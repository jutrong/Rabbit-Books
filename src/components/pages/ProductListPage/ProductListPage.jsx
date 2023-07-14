import './ProductListPage.scss';
import {
    SERVER_URL,
    disCount,
    getFetch,
    priceFormat,
    setCartItems,
} from '../../../utils';
import { useState, useEffect, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import cart from '../../../assets/images/icons/icon_gnb_basket.png';
import wish from '../../../assets/images/icons/icon_wish.png';
import qs from 'qs';

const ProductList = () => {
    const query = qs.parse(location.search, {
        ignoreQueryPrefix: true,
    });
    const navigate = useNavigate();
    const [category, setCategory] = useState(query.category);
    const [books, setBooks] = useState([]);
    const [modalOpen, setModalOpen] = useState(false);
    const [selectAll, setSelectAll] = useState(false);
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
            } else {
                return books.sort((a, b) =>
                    a.name < b.name ? -1 : a.name > b.name ? 1 : 0,
                );
            }
        },
        [sort],
    );

    // 서버에서 책리스트를 받아오는 함수
    const getBooks = useCallback(async () => {
        let bookList = []; // 책을 담는다.
        const defaultCategory = ['west', 'kor'];
        if (category === 'kor' || category === 'west') {
            // 카테고리가 있으면 접근한 카테고리 책들만 보여준다.
            const data = await getFetch(
                `${SERVER_URL}/api/products?keyword=${category}`,
            );
            bookList = [...data];
        } else {
            // 카테고리가 없으면 전부 보여준다
            for (let i = 0; i < defaultCategory.length; i++) {
                const data = await getFetch(
                    `${SERVER_URL}/api/products?keyword=${defaultCategory[i]}`,
                );
                bookList = [...bookList, ...data];
            }
        }
        bookList = bookSorting(bookList);
        setBooks(bookList);
    }, [category, bookSorting]);

    // 장바구니 추가
    const goCart = () => {
        if (books.filter((book) => book.checked).length === 0) {
            alert('장바구니에 추가할 책이 없습니다');
            return;
        }
        const checkedItems = books.filter((book) => book.checked);
        for (let i = 0; i < checkedItems.length; i++) {
            setCartItems(checkedItems[i]);
        }
        showModal();
    };

    // 모달 띄우기
    const showModal = () => {
        setModalOpen(true);
    };

    // 함수는 전체 선택, 해제 기능
    const handleSelectAll = () => {
        const updatedCheck = books.map((book) => ({
            ...book,
            checked: !selectAll,
        }));
        setBooks(updatedCheck);
        setSelectAll((prev) => !prev);
    };
    // 개별 체크박스 선택 상태를 토글
    const handleCheckboxChange = (id) => {
        const updatedCheck = books.map((book) => {
            if (book._id === id) {
                return { ...book, checked: !book.checked };
            }
            return book;
        });
        setBooks(updatedCheck);
        // 모든 책이 선택된 경우 전체 선택 상태로 설정
        const allChecked = updatedCheck.every((book) => book.checked);
        setSelectAll(allChecked);
    };

    //클릭시 상세페이지로 이동
    const navigateToItem = (id) => navigate(`/productlist/${id}`);

    useEffect(() => {
        // ?category=kor 또는 west용
        setCategory(query.category);
    }, [query.category]);

    useEffect(() => {
        getBooks();
    }, [getBooks]);

    return (
        <div className="productlist">
            <div className="list_content">
                <div className="list_right">
                    <h2 className="product_title">
                        {category === 'west' ? '서양' : '국내'}도서
                    </h2>
                    <div className="inp_box_wrap clear">
                        <p>총 {books.length}건</p>
                        <div className="right">
                            <select
                                className="select w_156"
                                id="bookFilter"
                                onChange={changeSort}
                            >
                                <option value="recent">최신순</option>
                                <option value="name">이름순</option>
                                <option value="highPrice">높은가격순</option>
                                <option value="lowPrice">낮은가격순</option>
                            </select>
                            <input
                                type="checkbox"
                                className="ch_check hide"
                                id="ipChkAll2"
                                value={''}
                                checked={selectAll}
                                onChange={handleSelectAll}
                            />
                            <label htmlFor="ipChkAll2" className="label w_156">
                                전체 선택
                            </label>
                            <button onClick={goCart} className="blue_btn w_156">
                                장바구니 담기
                            </button>
                        </div>
                    </div>
                    <div className="book_list">
                        {books.map((book, i) => (
                            <BookItem
                                key={book._id + i}
                                book={book}
                                handleCheckboxChange={handleCheckboxChange}
                                navigateToItem={navigateToItem}
                            />
                        ))}
                    </div>

                    <div className="paging txt_center clear martop_40 pagenation">
                        <ul>
                            <li>
                                <a href="" className="paging_first"></a>
                            </li>
                            <li>
                                <a href="" className="paging_prev"></a>
                            </li>
                            <li className="on">
                                <a href="" className="paging_num">
                                    1
                                </a>
                            </li>
                            <li>
                                <a href="" className="paging_num">
                                    2
                                </a>
                            </li>
                            <li>
                                <a href="" className="paging_num">
                                    3
                                </a>
                            </li>
                            <li>
                                <a href="" className="paging_num">
                                    4
                                </a>
                            </li>
                            <li>
                                <a href="" className="paging_num">
                                    5
                                </a>
                            </li>
                            <li>
                                <a href="" className="paging_num">
                                    6
                                </a>
                            </li>
                            <li>
                                <a href="" className="paging_num">
                                    7
                                </a>
                            </li>
                            <li>
                                <a href="" className="paging_num">
                                    8
                                </a>
                            </li>
                            <li>
                                <a href="" className="paging_num">
                                    9
                                </a>
                            </li>
                            <li>
                                <a href="" className="paging_num">
                                    10
                                </a>
                            </li>
                            <li>
                                <a href="" className="paging_next"></a>
                            </li>
                            <li>
                                <a href="" className="paging_last"></a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            {modalOpen && (
                <CartModal
                    closeModal={() => setModalOpen(false)}
                    navigateToCart={() => navigate('/cart')}
                />
            )}
        </div>
    );
};

const BookItem = ({ book, handleCheckboxChange, navigateToItem }) => {
    const CheckboxChange = () => {
        handleCheckboxChange(book._id);
    };

    return (
        <div className="items">
            <a href="#" onClick={() => navigateToItem(book._id)}>
                <img
                    loading="lazy"
                    src={`${SERVER_URL}${book.imgPath}`}
                    alt="책이미지1"
                    id="book1"
                />
            </a>
            <div className="book_content">
                <p className="book_title">{book.name}</p>
                <p className="author">{book.author} 저자(글)</p>
                <p className="publish_date">{book.publishDate}</p>
                <div className="price_container">
                    <div>
                        <em>10%</em>
                        <p className="price">
                            <strong>{priceFormat(disCount(book.price))}</strong>
                            원<span>{priceFormat(book.price)}원</span>
                        </p>
                    </div>
                    <button className="active">
                        <img loading="lazy" src={wish} alt="찜하기" />
                    </button>
                    <input
                        type="checkbox"
                        name="inpChk"
                        key={book._id}
                        className="ch_check hide allcheck"
                        value={''}
                        id={book._id}
                        checked={book.checked}
                        onChange={CheckboxChange}
                    />
                    <label htmlFor={book._id} className="label single"></label>
                </div>
            </div>
        </div>
    );
};
const CartModal = ({ closeModal, navigateToCart }) => {
    return (
        <div className="cart_modal">
            <div className="modal">
                <h4>장바구니에 추가되었습니다.</h4>
                <div>
                    <button className="blue_btn" onClick={closeModal}>
                        계속 장보기
                    </button>
                    <button className="black_btn" onClick={navigateToCart}>
                        장바구니 이동하기
                    </button>
                </div>
            </div>
        </div>
    );
};
export default ProductList;
