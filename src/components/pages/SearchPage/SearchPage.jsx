import './SearchPage.scss';
import { useCallback, useEffect, useState } from 'react';
import NoSearch from './NoSearchPage';
import { Link, useNavigate, useParams } from 'react-router-dom';
import {
    SERVER_URL,
    disCount,
    getFetch,
    priceFormat,
    setCartItems,
} from '../../../utils';
import Loading from '../../atoms/Common/Loading';

const Search = () => {
    const navigate = useNavigate();
    const { keyword } = useParams();
    const [allData, setAllData] = useState([]);
    const [searchData, setSearchData] = useState([]);
    const [sort, setSort] = useState('recent');

    const changeSort = (e) => setSort(e.target.value);
    const bookSorting = useCallback(
        (books) => {
            if (sort === 'recent') {
                return books.sort((a, b) => {
                    const num1 = Number(a.publishDate.replace(/[^0-9]/g, ''));
                    const num2 = Number(b.publishDate.replace(/[^0-9]/g, ''));
                    return num2 - num1;
                });
            } else if (sort === 'highPrice') {
                return books.sort((a, b) => b.price - a.price);
            } else if (sort === 'lowPrice') {
                return books.sort((a, b) => a.price - b.price);
            } else if (sort === 'name') {
                return books.sort((a, b) =>
                    a.name < b.name ? -1 : a.name > b.name ? 1 : 0,
                );
            } else {
                return books;
            }
        },
        [sort],
    );

    const getServerData = async () => {
        const category = ['kor', 'west'];
        for (let i = 0; i < category.length; i++) {
            const json = await getFetch(
                `${SERVER_URL}/api/products?keyword=${category[i]}`,
            );
            setAllData((prev) => [...prev, ...json]);
        }
    };

    const getShipDate = () => {
        const dayStr = ['일', '월', '화', '수', '목', '금', '토'];
        const date = new Date();
        date.setDate(date.getDate() + 1); // 내일 날짜 구하기(배송 날짜 다음날로 지정)
        return `${date.getMonth() + 1}/${date.getDate()}, ${
            dayStr[date.getDay()]
        }`;
    };

    // 장바구니 추가
    const addCartItems = (bookInfo) => {
        setCartItems(bookInfo);
        alert(`장바구니에 [${bookInfo.name}]을/를 담았습니다`);
    };

    // 장바구니 추가 후 구매 페이지로 넘어가는 형태
    const buyBooks = (bookInfo) => {
        setCartItems(bookInfo);
        navigate('/order');
    };

    useEffect(() => {
        getServerData();
    }, []);

    useEffect(() => {
        let equalData = allData.filter(
            (data) =>
                data.name.includes(keyword) || data.author.includes(keyword),
        );
        equalData = bookSorting(equalData);
        setSearchData(equalData);
    }, [keyword, allData, bookSorting]);

    return (
        <div className="search con_wrap">
            {allData.length > 0 || searchData.length > 0 ? (
                <div className="search_container">
                    <strong className="search_title">
                        &#39;<em>{keyword}</em>&#39;에 대한 검색 결과
                        <span>({searchData.length})</span>
                    </strong>

                    <div className="related_txt">
                        <ul>
                            <li>
                                <span className="related_label">
                                    추천검색어
                                </span>
                            </li>
                            <li>
                                <a href="#">소설</a>
                            </li>
                            <li>
                                <a href="#">베스트셀러</a>
                            </li>
                            <li>
                                <a href="#">세계문학상</a>
                            </li>
                            <li>
                                <a href="#">자기계발</a>
                            </li>
                        </ul>
                    </div>

                    <div className="search_box">
                        <div className="clear">
                            <select
                                className="select w_156 right"
                                onChange={changeSort}
                            >
                                <option value="recent">최신순</option>
                                <option value="name">이름순</option>
                                <option value="highPrice">높은가격순</option>
                                <option value="lowPrice">낮은가격순</option>
                            </select>
                        </div>

                        <div className="table_box">
                            <table className="type1 txt_left2">
                                <colgroup>
                                    <col width="80px" />
                                    <col width="*" />
                                    <col width="240px" />
                                    <col width="240px" />
                                </colgroup>
                                <thead>
                                    <tr>
                                        <th>No.</th>
                                        <th>상품 정보</th>
                                        <th>배송 정보</th>
                                        <th>구매 하기</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {searchData.map((book, i) => (
                                        <tr key={book._id + i}>
                                            <td>{i + 1}</td>
                                            <td>
                                                <div className="book_info_box">
                                                    <Link
                                                        to={`/productlist/${book._id}`}
                                                    >
                                                        <img
                                                            src={
                                                                SERVER_URL +
                                                                book.imgPath
                                                            }
                                                            alt="책 이미지"
                                                        />
                                                    </Link>
                                                    <div className="book_info">
                                                        <PickTag num={i} />
                                                        <Link
                                                            to={`/productlist/${book._id}`}
                                                        >
                                                            <strong className="book_info_title">
                                                                {book.name}
                                                            </strong>
                                                        </Link>
                                                        <p className="author">
                                                            {book.author}&nbsp;
                                                            저자(글)
                                                        </p>
                                                        <p>
                                                            {book.publishDate}
                                                        </p>
                                                        <div className="pay">
                                                            <em>10%</em>
                                                            <strong>
                                                                {priceFormat(
                                                                    disCount(
                                                                        book.price,
                                                                    ),
                                                                )}
                                                            </strong>
                                                            원
                                                            <span>
                                                                {priceFormat(
                                                                    book.price,
                                                                )}
                                                                원
                                                            </span>
                                                        </div>
                                                        <span className="star_grade">
                                                            9.89
                                                        </span>
                                                    </div>
                                                </div>
                                            </td>
                                            <td>
                                                <span className="speaker">
                                                    내일 ({getShipDate()})
                                                </span>
                                                도착 예정
                                            </td>
                                            <td>
                                                <button
                                                    onClick={() =>
                                                        addCartItems(book)
                                                    }
                                                    className="white_btn w_156"
                                                >
                                                    장바구니
                                                </button>
                                                <button
                                                    onClick={() =>
                                                        buyBooks(book)
                                                    }
                                                    className="blue_btn w_156 martop_10"
                                                >
                                                    바로구매
                                                </button>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            ) : allData.length === 0 ? (
                <Loading />
            ) : (
                <NoSearch keyword={keyword} />
            )}
        </div>
    );
};

export default Search;

const PickTag = ({ num }) => {
    const idx = num % 3;
    switch (idx) {
        case 0:
            return (
                <ul className="book_tag_list">
                    <li>
                        <span className="sky">오늘의 선택</span>
                    </li>
                    <li>
                        <span className="green">MD의 선택</span>
                    </li>
                    <li>
                        <span className="orange">이벤트</span>
                    </li>
                </ul>
            );
        case 1:
            return (
                <ul className="book_tag_list">
                    <li>
                        <span className="sky">오늘의 선택</span>
                    </li>
                    <li>
                        <span className="green">무료배송</span>
                    </li>
                    <li>
                        <span className="yellow">사은품</span>
                    </li>
                    <li>
                        <span className="orange">이벤트</span>
                    </li>
                    <li>
                        <span className="pink">소득공제</span>
                    </li>
                </ul>
            );
        default:
            return (
                <ul className="book_tag_list">
                    <li>
                        <span className="sky">오늘의 선택</span>
                    </li>
                    <li>
                        <span className="green">무료배송</span>
                    </li>
                    <li>
                        <span className="orange">이벤트</span>
                    </li>
                    <li>
                        <span className="pink">소득공제</span>
                    </li>
                </ul>
            );
    }
};
