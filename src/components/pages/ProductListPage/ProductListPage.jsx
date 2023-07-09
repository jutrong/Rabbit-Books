import './ProductListPage.scss';
import React, { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import cart from '../../../assets/images/icons/icon_gnb_basket.png';
import wish from '../../../assets/images/icons/icon_wish.png';
// import wishActive from '../../../assets/images/icons/icon_wish_active.png';
import bookData from '../../dummydata/BookData.json';

const ProductList = () => {
    const [books, setBooks] = useState(bookData);
    const [selectAll, setSelectAll] = useState(false);
    // 전체 선택/해제 처리
    const handleSelectAll = () => {
        const updatedCheck = books.map((book) => ({
            ...book,
            checked: !selectAll,
        }));
        setBooks(updatedCheck);
        setSelectAll(!selectAll);
    };
    // 개별 체크박스 변경 처리
    const handleCheckboxChange = (check) => {
        //선택 상태 토글
        const updatedCheck = books.map((book) => {
            if (book.id === check) {
                return { ...book, checked: !book.checked };
            }
            return book;
        });
        setBooks(updatedCheck);
        // 모든 책이 선택된 경우 전체 선택 상태로 설정
        const allChecked = updatedCheck.every((book) => book.checked);
        setSelectAll(allChecked);
    };
    // 개별 선택 해제 시 전체 선택 체크 해제
    const handleIndividualDeselect = () => {
        const allChecked = books.every((book) => book.checked);
        // 모든 책이 선택된 경우 전체 선택 체크 해제
        if (allChecked) {
            setSelectAll(false);
        }
    };
    //상세페이지로 이동
    const navigate = useNavigate();
    const navigateToItem = (id) => {
        navigate(`/productlist/${id}`);
    };

    return (
        <div className="productlist">
            <div className="list_content">
                <div className="list_left">
                    <h3>
                        <a href="#">국내도서</a>
                    </h3>
                    <div>
                        <h4>
                            <a href="#">컴퓨터공학</a>
                        </h4>
                        <ul>
                            <li>
                                <a href="#">컴퓨터공학/과학개론</a>
                            </li>
                            <li>
                                <a href="#">소프트웨어공학</a>
                            </li>
                            <li>
                                <a href="#">정보통신공학</a>
                            </li>
                            <li>
                                <a href="#">컴퓨터구조</a>
                            </li>
                            <li>
                                <a href="#">마이크로프로세서</a>
                            </li>
                            <li>
                                <a href="#">운영체제론</a>
                            </li>
                            <li>
                                <a href="#">자료구조/알고리즘</a>
                            </li>
                            <li>
                                <a href="#">인공지능</a>
                            </li>
                            <li>
                                <a href="#">블록체인</a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="list_right">
                    <header>
                        <p>컴퓨터 공학</p>
                        <select name="select w_156" id="bookFilter">
                            <option>최신순</option>
                            <option>판매량순</option>
                            <option>높은가격순</option>
                            <option>낮은가격순</option>
                        </select>
                    </header>
                    <div className="boundary">
                        <div>
                            <input
                                type="checkbox"
                                className="ch_check hide"
                                id="ipChkAll2"
                                checked={selectAll}
                                onChange={handleSelectAll}
                            />
                            <label htmlFor="ipChkAll2" className="label">
                                전체 선택
                            </label>
                        </div>
                        <div>
                            <a href="#">
                                <img src={cart} alt="장바구니" />
                                <p>장바구니</p>
                            </a>
                        </div>
                    </div>
                    <div className="book_list">
                        {books.map((book) => (
                            <BookItem
                                key={book.id}
                                book={book}
                                onCheckboxChange={handleCheckboxChange}
                                onDeselect={handleIndividualDeselect}
                                navigateToItem={navigateToItem}
                            />
                        ))}
                    </div>

                    <div className="paging txt_center clear martop_20 pagenation">
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
        </div>
    );
};

const BookItem = ({ book, onCheckboxChange, onDeselect, navigateToItem }) => {
    const handleCheckboxChange = () => {
        onCheckboxChange(book.id);
        onDeselect();
    };

    return (
        <div className="items">
            <input
                type="checkbox"
                name="inpChk"
                className="ch_check hide allcheck"
                id={book.id}
                checked={book.checked}
                onChange={handleCheckboxChange}
            />
            <label htmlFor={book.id} className="label single"></label>
            <a href="#" onClick={() => navigateToItem(book.id)}>
                <img src={book.imgLink} alt="책이미지1" id="book1" />
            </a>
            <div className="book_content">
                <p className="book_title">{book.productName}</p>
                <p className="author">{book.author}</p>
                <div>
                    <p className="price">{book.price}</p>
                    <button className="active">
                        <img src={wish} alt="찜하기" />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ProductList;
