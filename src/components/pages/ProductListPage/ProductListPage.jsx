import './ProductListPage.scss';
import { SERVER_URL } from '../../../utils';
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import cart from '../../../assets/images/icons/icon_gnb_basket.png';
import wish from '../../../assets/images/icons/icon_wish.png';
// import wishActive from '../../../assets/images/icons/icon_wish_active.png';

const ProductList = () => {
    const [books, setBooks] = useState([]);
    const [modalOpen, setModalOpen] = useState(false);
    const [selectAll, setSelectAll] = useState(false);

    useEffect(() => {
        fetch('http://kdt-sw-5-team05.elicecoding.com/api/products?keyword=kor')
            .then((res) => res.json())
            .then((data) => {
                setBooks(data);
                const initialBooks = data.map((book) => ({
                    ...book,
                    quantity: 1,
                    checked: false,
                }));
                setBooks(initialBooks);
                console.log(initialBooks);
            });
    }, []);

    const showModal = () => {
        setModalOpen(true);
    };
    // 선택된 상품을 로컬 스토리지에 저장
    const inputStorage = (check) => {
        const updatedCheck = books.map((book) => {
            if (book._id === check) {
                return { ...book, checked: !book.checked };
            }
            return book;
        });
        setBooks(updatedCheck);
        // 로컬 스토리지에서 기존 항목을 가져오거나 빈 배열을 초기화
        const cartItems = JSON.parse(localStorage.getItem('cart')) || [];
        const checkedItems = updatedCheck.filter((book) => book.checked);

        // 이미 로컬 스토리지에 있는 항목은 필터링
        // 현재 book의 id와 동일한 id를 가진 요소가 없을 경우 true를 반환
        const newItems = checkedItems.filter(
            (book) => !cartItems.some((item) => item._id === book._id),
        );

        // 기존 항목과 새로운 항목을 결합
        const updatedItems = [...cartItems, ...newItems];
        localStorage.setItem('cart', JSON.stringify(updatedItems));
    };

    // 함수는 전체 선택, 해제 기능
    const handleSelectAll = () => {
        const updatedCheck = books.map((book) => ({
            ...book,
            checked: !selectAll,
        }));
        setBooks(updatedCheck);
        setSelectAll(!selectAll);
    };
    // 개별 체크박스 선택 상태를 토글
    const handleCheckboxChange = (check) => {
        console.log('da');

        const updatedCheck = books.map((book) => {
            if (book._id === check) {
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
    const navigate = useNavigate();
    const navigateToItem = (id) => {
        navigate(`/productlist/${id}`);
        console.log(id);
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
                                value={''}
                                checked={selectAll}
                                onChange={handleSelectAll}
                            />
                            <label htmlFor="ipChkAll2" className="label">
                                전체 선택
                            </label>
                        </div>
                        <div
                            onClick={() => {
                                inputStorage();
                                showModal();
                            }}
                        >
                            <a href="#">
                                <img src={cart} alt="장바구니" />
                                <p>장바구니</p>
                            </a>
                        </div>
                    </div>
                    <div className="book_list">
                        {books.map((book) => (
                            <BookItem
                                key={book._id}
                                book={book}
                                handleCheckboxChange={handleCheckboxChange}
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
            <a href="#" onClick={() => navigateToItem(book._id)}>
                <img
                    src={`${SERVER_URL}${book.imgPath}`}
                    alt="책이미지1"
                    id="book1"
                />
            </a>
            <div className="book_content">
                <p className="book_title">{book.name}</p>
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
const CartModal = ({ closeModal, navigateToCart }) => {
    return (
        <div className="cart_modal">
            <div className="modal">
                <h4>장바구니에 추가되었습니다.</h4>
                <div>
                    <button onClick={closeModal}>계속 장보기</button>
                    <button onClick={navigateToCart}>
                        장바구니로 이동하기
                    </button>
                </div>
            </div>
        </div>
    );
};
export default ProductList;
