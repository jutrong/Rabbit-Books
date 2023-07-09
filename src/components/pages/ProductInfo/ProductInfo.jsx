import './ProductInfo.scss';
import { Routes, Route, useParams } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import book2 from '../../../assets/images/book2.jpeg';
import zoom from '../../../assets/images/icons/icon_guide01.png';
import cart from '../../../assets/images/icons/icon_cart.png';
import bookData from '../../dummydata/BookData.json';

const ProductInfo = () => {
    let [books] = useState(bookData);
    let { id } = useParams();

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
                <p className="main_title">{books[id].title}</p>
                <p className="sub_title">
                    자바스크립트 기초부터 애플리케이션 배포까지
                </p>
                <p className="price">
                    <span>💰</span>
                    {books[id].price}
                </p>
                <div className="delivery_info">
                    <p>배송정보</p>
                    <p>택배배송</p>
                </div>
                <div className="delivery_fee">
                    <p>배송비</p>
                    <p>무료 (3만원 이상 무료)</p>
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
                            >
                                <i></i>
                            </button>
                            <input type="number" id="quantity" />
                            <button
                                type="button"
                                id="plusBtn"
                                className="plus_btn"
                            >
                                <i></i>
                            </button>
                        </div>
                        <div className="count_price">38,200원</div>
                    </div>
                </div>
                <p className="all_price">
                    합계<span>38,200원</span>
                </p>
                <div className="order_box">
                    <button>
                        <img src={cart} alt="카트" />
                        장바구니
                    </button>
                    <button>구매하기</button>
                </div>
            </section>
        </div>
    );
};

export default ProductInfo;
