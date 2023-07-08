import './CartPage.scss';
import { useState } from 'react';
import NoCart from './NoCartPage';

const Cart = () => {
    const [isData] = useState(true);
    return (
        <div className="cart con_wrap">
            {isData ? (
                <div className="cart_container">
                    <div className="title_box">
                        <strong className="sub_title">장바구니</strong>
                        <ul>
                            <li className="list1 active">장바구니</li>
                            <li className="list2">주문/결제</li>
                            <li className="list3">주문완료</li>
                        </ul>
                    </div>

                    <div className="search_box">
                        <div className="table_box">
                            <table className="type1 txt_left2">
                                <colgroup>
                                    <col width="80px" />
                                    <col width="*" />
                                    <col width="200px" />
                                    <col width="200px" />
                                    <col width="200px" />
                                </colgroup>
                                <thead>
                                    <tr>
                                        <th>
                                            <input
                                                type="checkbox"
                                                name="inpChk"
                                                className="ch_check hide"
                                                id="inpChk1"
                                            />
                                            <label
                                                htmlFor="inpChk1"
                                                className="label single"
                                            ></label>
                                        </th>
                                        <th>상품 정보</th>
                                        <th>수량</th>
                                        <th>주문금액</th>
                                        <th>배송비</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>
                                            <input
                                                type="checkbox"
                                                name="inpChk"
                                                className="ch_check hide"
                                                id="inpChk2"
                                            />
                                            <label
                                                htmlFor="inpChk2"
                                                className="label single"
                                            ></label>
                                        </td>
                                        <td>
                                            <div className="book_info_box">
                                                <img
                                                    src="https://contents.kyobobook.co.kr/sih/fit-in/300x0/pdt/9788936434595.jpg"
                                                    alt="책 이미지"
                                                />
                                                <div className="book_info">
                                                    <strong className="book_info_title">
                                                        채식주의자
                                                    </strong>
                                                    <p className="author">
                                                        한강 저자(글)
                                                    </p>
                                                    <p>
                                                        창비&#183; 2022년 03월
                                                        28일
                                                    </p>
                                                    <div className="pay">
                                                        <em>10%</em>
                                                        <strong>13,500</strong>
                                                        원<span>15,000원</span>
                                                    </div>
                                                </div>
                                                <button className="remove_btn"></button>
                                            </div>
                                        </td>
                                        <td>
                                            <div className="increase_box">
                                                <button
                                                    type="button"
                                                    id="minusBtn"
                                                    className="minus_btn"
                                                >
                                                    <i></i>
                                                </button>
                                                <input
                                                    type="number"
                                                    id="quantity"
                                                />
                                                <button
                                                    type="button"
                                                    id="plusBtn"
                                                    className="plus_btn"
                                                >
                                                    <i></i>
                                                </button>
                                            </div>
                                        </td>
                                        <td>
                                            <strong className="amount">
                                                13,500원
                                            </strong>
                                            <button className="blue_btn w_156 martop_10">
                                                바로구매
                                            </button>
                                        </td>
                                        <td>
                                            <span className="speaker">
                                                7월 10일(월)
                                            </span>
                                            도착 예정
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <input
                                                type="checkbox"
                                                name="inpChk"
                                                className="ch_check hide"
                                                id="inpChk2"
                                            />
                                            <label
                                                htmlFor="inpChk2"
                                                className="label single"
                                            ></label>
                                        </td>
                                        <td>
                                            <div className="book_info_box">
                                                <img
                                                    src="https://contents.kyobobook.co.kr/sih/fit-in/300x0/pdt/9788936434595.jpg"
                                                    alt="책 이미지"
                                                />
                                                <div className="book_info">
                                                    <strong className="book_info_title">
                                                        채식주의자
                                                    </strong>
                                                    <p className="author">
                                                        한강 저자(글)
                                                    </p>
                                                    <p>
                                                        창비&#183; 2022년 03월
                                                        28일
                                                    </p>
                                                    <div className="pay">
                                                        <em>10%</em>
                                                        <strong>13,500</strong>
                                                        원<span>15,000원</span>
                                                    </div>
                                                </div>
                                                <button className="remove_btn"></button>
                                            </div>
                                        </td>
                                        <td>
                                            <div className="increase_box">
                                                <button
                                                    type="button"
                                                    id="minusBtn"
                                                    className="minus_btn"
                                                >
                                                    <i></i>
                                                </button>
                                                <input
                                                    type="number"
                                                    id="quantity"
                                                />
                                                <button
                                                    type="button"
                                                    id="plusBtn"
                                                    className="plus_btn"
                                                >
                                                    <i></i>
                                                </button>
                                            </div>
                                        </td>
                                        <td>
                                            <strong className="amount">
                                                13,500원
                                            </strong>
                                            <button className="blue_btn w_156 martop_10">
                                                바로구매
                                            </button>
                                        </td>
                                        <td>
                                            <span className="speaker">
                                                7월 10일(월)
                                            </span>
                                            도착 예정
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                            <div className="btn_left martop_20">
                                <button className="white_btn w_156">
                                    선택 상품 삭제
                                </button>
                                <button className="white_btn w_156">
                                    전체 상품 삭제
                                </button>
                            </div>

                            <div className="cart_amout_box">
                                <table className="type1">
                                    <colgroup>
                                        <col width="400px" />
                                        <col width="*" />
                                        <col width="400px" />
                                    </colgroup>
                                    <thead>
                                        <tr>
                                            <th>총 주문금액</th>
                                            <th>총 배송비</th>
                                            <th>총 결제금액</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>
                                                <div className="order_box">
                                                    <strong>
                                                        <em>25,000</em>원
                                                    </strong>
                                                    <p>
                                                        총 <em>2</em>개
                                                    </p>
                                                </div>
                                            </td>
                                            <td>
                                                <div className="ship_box">
                                                    <i className="plus_ship_btn"></i>
                                                    <strong>
                                                        <em>0</em>원
                                                    </strong>
                                                    <i className="minus_ship_btn"></i>
                                                </div>
                                            </td>
                                            <td>
                                                <div className="order_box">
                                                    <strong>
                                                        <em>25,000</em>원
                                                    </strong>
                                                </div>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            ) : (
                <NoCart />
            )}
        </div>
    );
};

export default Cart;
