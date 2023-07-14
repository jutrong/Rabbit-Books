import './OrderPage.scss';
import { useState, useEffect, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import radioOn from '../../../assets/images/icons/radio_on.png';
import radioOff from '../../../assets/images/icons/radio_off.png';
import {
    SERVER_URL,
    getCartItems,
    getFetch,
    postFetch,
    priceFormat,
    removeCartItems,
} from '../../../utils';

const Order = () => {
    const navigate = useNavigate();
    const [cartData, setCartData] = useState([]);
    const [totalPrice, setTotalPrice] = useState(0);
    const [userName, setUserName] = useState('');
    const [phone, setPhone] = useState('');
    const [address, setAddress] = useState('');

    // 내 정보 받아오기
    const getMyInfo = useCallback(async () => {
        const json = await getFetch(`${SERVER_URL}/api/users/my-profile`);
        if (json?.reason || json?.error) {
            alert('로그인이 필요한 서비스입니다');
            navigate('/login');
        } else {
            const { username: name, phone, address } = json;
            setUserName(name);
            setPhone(콜);
            setAddress(address);
        }
    }, [navigate]);

    // 주문하기
    const handleSubmitOrder = async () => {
        const orderData = cartData.map((item) => ({
            _id: item._id,
            name: item.name,
            price: item.price,
            categoryName: item.categoryName,
            author: item.author,
            quantity: item.quantity,
            imgPath: item.imgPath,
        }));
        const data = {
            products: orderData,
            address: address,
            phone: phone,
            totalPrice: totalPrice.toString(),
            imgPath: '/static/images/products/kor/book1.jpg',
        };

        const json = await postFetch(`${SERVER_URL}/api/orders`, data);
        console.log(json);
        if (json?.reason) {
            alert(json?.reason);
        } else if (json?.error) {
            alert('주문 도중 오류가 발생했습니다');
        } else if (json) {
            alert('주문되었습니다');
            navigate('/orderComplete');
            removeCartItems();
        } else {
            alert('주문에 실패하였습니다');
        }
    };

    useEffect(() => {
        getMyInfo();
    }, [getMyInfo]);

    useEffect(() => {
        const storedCartData = getCartItems();
        setCartData(storedCartData);
        const calculatedTotalPrice = storedCartData.reduce(
            (accumulator, item) => accumulator + item.price * item.quantity,
            0,
        );
        setTotalPrice(calculatedTotalPrice);
    }, []);

    const totalAmount = cartData.reduce(
        (accumulator, item) => accumulator + item.price * item.quantity,
        0,
    );
    const totalNumber = cartData.reduce(
        (total, item) => total + item.quantity,
        0,
    );

    return (
        <div className="order">
            {userName ? (
                <>
                    <OrderProcedure />
                    <section className="content">
                        <div className="content_left">
                            <div className="content_container">
                                <div className="delivery_area">
                                    <div className="delivery_info">
                                        <div className="info_left">
                                            <p>배송지 정보</p>
                                        </div>
                                        <div className="info_right">
                                            <p>내 정보</p>
                                            <span>
                                                {userName} / {phone}
                                            </span>
                                            <span className="address">
                                                {address}
                                            </span>
                                            <button className="white_btn w_276">
                                                변경
                                            </button>
                                        </div>
                                    </div>
                                    <div className="delivery_message">
                                        <p>배송지요청사항</p>
                                        <button className="white_btn w_276">
                                            배송요청사항 메시지
                                        </button>
                                    </div>
                                </div>
                                <div className="order_product">
                                    <div className="product_header">
                                        <span>주문상품</span>
                                        <p>
                                            총 <span>{totalNumber}</span>개
                                        </p>
                                    </div>
                                    {cartData.map((item) => (
                                        <OrderProduct
                                            item={item}
                                            key={item._id}
                                        />
                                    ))}
                                </div>

                                <div className="coupon_area">
                                    <p>할인쿠폰</p>
                                    <p>사용 가능한 쿠폰이 없습니다.</p>
                                </div>
                                <div className="order_select">
                                    <span>결제수단</span>
                                    <div className="select_box">
                                        <div className="toss">
                                            <p>토스페이</p>
                                            <img src={radioOn} alt="라디오온" />
                                        </div>
                                        <div className="other">
                                            <p>다른 결제 수단</p>
                                            <img
                                                src={radioOff}
                                                alt="라디오오프"
                                            />
                                        </div>
                                    </div>
                                    <div className="three_box">
                                        <div className="kakao">
                                            <p>카카오페이</p>
                                        </div>
                                        <div className="kb">
                                            <p>kb페이</p>
                                        </div>
                                        <div className="mobile">
                                            <p>모바일팝</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="content_right">
                            <div className="sidebar">
                                <div className="sidebar_container">
                                    <div className="price">
                                        <span>상품금액</span>
                                        <span>
                                            {priceFormat(totalAmount)}원
                                        </span>
                                    </div>
                                    <div className="delivery_fee">
                                        <span>배송비</span>
                                        <span>3,000원</span>
                                    </div>
                                    <div className="coupon">
                                        <span>쿠폰할인</span>
                                        <span>0원</span>
                                    </div>
                                    <div className="point">
                                        <span>포인트 사용</span>
                                        <span>0원</span>
                                    </div>
                                    <div className="final_fee">
                                        <span>최종결제금액</span>
                                        <span>
                                            {priceFormat(totalAmount + 3000)}원
                                        </span>
                                    </div>
                                    <button
                                        className="blue_btn w_276"
                                        onClick={handleSubmitOrder}
                                    >
                                        결제하기
                                    </button>
                                </div>
                            </div>
                        </div>
                    </section>
                </>
            ) : null}
        </div>
    );
};
const OrderProduct = ({ item }) => {
    return (
        <div className="product_box">
            <div className="product_content">
                <img src={SERVER_URL + item.imgPath} alt="주문책" />
                <p>{item.name}</p>
                <p>토끼책방배송</p>
                <p>{item.quantity}개</p>
                <p>{priceFormat(item.price)}원</p>
            </div>
        </div>
    );
};
const OrderProcedure = () => {
    return (
        <header>
            <div className="header_left">
                <p>주문/결제</p>
            </div>
            <div className="header_right">
                <ul>
                    <li num="1">장바구니</li>
                    <li className="active" num="2">
                        주문/결제
                    </li>
                    <li num="3">주문완료</li>
                </ul>
            </div>
        </header>
    );
};
export default Order;
