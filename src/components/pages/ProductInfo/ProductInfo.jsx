import './ProductInfo.scss';
import { useNavigate, useParams } from 'react-router-dom';
import React, { useState } from 'react';
import zoom from '../../../assets/images/icons/icon_guide01.png';
import cart from '../../../assets/images/icons/icon_cart.png';
import bookData from '../../dummydata/BookData.json';

const ProductInfo = () => {
    const [books] = useState(bookData);
    const { id } = useParams();
    const [quantity, setQuantity] = useState(1);
    const navigate = useNavigate();

    const navigateToCartPage = () => {
        navigate('/cart');
    };
    const navigateToOrder = () => {
        const selectedBook = books.find((book) => book.id === parseInt(id));
        navigate('/order', {
            state: {
                author: selectedBook.author,
                categoryName: selectedBook.categoryName,
                checked: true,
                description: '설명부분',
                id: selectedBook.id,
                imgLink: selectedBook.imgLink,
                price: selectedBook.price,
                productName: selectedBook.productName,
                quantity: quantity,
                stock: selectedBook.stock,
            },
        });
    };
    const saveToLocalStorage = () => {
        const selectedBook = books.find((book) => book.id === parseInt(id));
        const cartItem = {
            author: selectedBook.author,
            categoryName: selectedBook.categoryName,
            checked: true,
            description: '설명부분',
            id: selectedBook.id,
            imgLink: selectedBook.imgLink,
            price: selectedBook.price,
            productName: selectedBook.productName,
            quantity: quantity,
            stock: selectedBook.stock,
        };
        // 로컬스토리지에서 기존의 카트 아이템을 가져오기
        const existingCartItems = localStorage.getItem('cart');
        let cartItems = existingCartItems ? JSON.parse(existingCartItems) : [];

        // 이미 카트에 있는 상품인 경우 수량 업데이트 또는 카트에 추가
        const existingCartItem = cartItems.find(
            (item) => item.id === cartItem.id,
        );
        if (existingCartItem) {
            existingCartItem.quantity += quantity;
        } else {
            cartItems.push(cartItem);
        }

        // 업데이트된 카트 아이템을 로컬스토리지에 저장
        localStorage.setItem('cart', JSON.stringify(cartItems));

        // 카트 페이지로 이동
        navigateToCartPage();
    };
    const handleMinus = () => {
        if (quantity > 1) {
            setQuantity(quantity - 1);
        }
    };

    const handlePlus = () => {
        setQuantity(quantity + 1);
    };

    return (
        <div className="productinfo">
            <section className="left">
                <div className="book_img">
                    <img src={books[id].imgLink} alt="책2" />
                    <img src={zoom} alt="돋보기" />
                    <p>미리보기</p>
                </div>
            </section>
            <section className="right">
                <p className="main_title">{books[id].productName}</p>
                <p className="sub_title">
                    자바스크립트 기초부터 애플리케이션 배포까지
                </p>
                <p className="price">
                    <span>💰</span>
                    {books[id].price.toLocaleString()}
                </p>
                <div className="delivery_info">
                    <p>배송정보</p>
                    <p>택배배송</p>
                </div>
                <div className="delivery_fee">
                    <p>배송비</p>
                    <p>무료 (30만원 이상 무료)</p>
                </div>
                <p className="plus_fee">제주 4,000원, 도서산간 5,000원 추가</p>
                <div className="book_counter">
                    <p>한 입 크기로 잘라 먹는 리액트</p>
                    <div>
                        <div className="increase_box">
                            <button
                                type="button"
                                id="minusBtn"
                                className="minus_btn"
                                onClick={handleMinus}
                            >
                                <i></i>
                            </button>
                            <input
                                type="number"
                                id="quantity"
                                value={quantity}
                                readOnly
                            />
                            <button
                                type="button"
                                id="plusBtn"
                                className="plus_btn"
                                onClick={handlePlus}
                            >
                                <i></i>
                            </button>
                        </div>
                        <div className="count_price">
                            {books[id].price.toLocaleString()}원
                        </div>
                    </div>
                </div>
                <p className="all_price">
                    합계
                    <span>
                        {(books[id].price * quantity).toLocaleString()}원
                    </span>
                </p>
                <div className="order_box">
                    <button className="goCart" onClick={saveToLocalStorage}>
                        <img src={cart} alt="카트" />
                        장바구니
                    </button>
                    <button onClick={navigateToOrder}>구매하기</button>
                </div>
            </section>
        </div>
    );
};

export default ProductInfo;
