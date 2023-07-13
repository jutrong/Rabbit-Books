import './ProductInfo.scss';
import { useNavigate, useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import zoom from '../../../assets/images/icons/icon_guide01.png';
import cart from '../../../assets/images/icons/icon_cart.png';
import { SERVER_URL, priceFormat, setCartItems } from '../../../utils';

const ProductInfo = () => {
    const [book, setBook] = useState({});
    const { id } = useParams();
    const [quantity, setQuantity] = useState(1);
    const navigate = useNavigate();

    useEffect(() => {
        fetch(`http://kdt-sw-5-team05.elicecoding.com/api/products/${id}`)
            .then((res) => res.json())
            .then((data) => {
                setBook(data);
            });
    }, [id]);

    const navigateToOrder = () => {
        const orderData = {
            author: book.author,
            categoryName: book.categoryName,
            checked: book.checked,
            description: book.description,
            imgPath: book.imgPath,
            name: book.name,
            price: book.price,
            publishData: book.publishData,
            quantity: quantity,
            stock: book.stock,
            _id: book._id,
        };

        // 로컬스토리지에서 기존의 카트 아이템을 가져옴
        const existingCartItems = localStorage.getItem('cart');
        let cartItems = existingCartItems ? JSON.parse(existingCartItems) : [];

        let itemExists = false;

        // 동일한 _id 값을 가진 상품을 찾아 quantity를 증가시킴
        cartItems = cartItems.map((item) => {
            if (item._id === orderData._id) {
                item.quantity += orderData.quantity;
                itemExists = true;
            }
            return item;
        });

        // 동일한 _id 값을 가진 상품이 없으면 새로운 상품으로 추가
        if (!itemExists) {
            cartItems.push(orderData);
        }

        // 업데이트된 카트 아이템을 로컬스토리지에 저장
        localStorage.setItem('cart', JSON.stringify(cartItems));
        navigate('/order');
    };

    const saveToLocalStorage = () => {
        const cartItem = {
            author: book.author,
            categoryName: book.categoryName,
            checked: book.checked,
            description: book.description,
            imgPath: book.imgPath,
            name: book.name,
            price: book.price,
            publishData: book.publishData,
            quantity: quantity,
            stock: book.stock,
            _id: book._id,
        };
        setCartItems(cartItem, quantity);
        // // 로컬스토리지에서 기존의 카트 아이템을 가져오기
        // const existingCartItems = localStorage.getItem('cart');
        // let cartItems = existingCartItems ? JSON.parse(existingCartItems) : [];

        // // 이미 카트에 있는 상품인 경우 수량 업데이트 또는 카트에 추가
        // const existingCartItem = cartItems.find(
        //     (item) => item._id === cartItem._id,
        // );
        // if (existingCartItem) {
        //     existingCartItem.quantity += quantity;
        // } else {
        //     cartItems.push(cartItem);
        // }

        // // 업데이트된 카트 아이템을 로컬스토리지에 저장
        // localStorage.setItem('cart', JSON.stringify(cartItems));

        // 카트 페이지로 이동
        navigate('/cart');
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
                    <img src={`${SERVER_URL}${book.imgPath}`} alt="책2" />
                    <img src={zoom} alt="돋보기" />
                    <p>미리보기</p>
                </div>
            </section>
            <section className="right">
                <p className="main_title">{book.name}</p>
                <p className="sub_title">
                    자바스크립트 기초부터 애플리케이션 배포까지
                </p>
                <p className="price">
                    <span>💰</span>
                    {priceFormat(book.price)}원
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
                    <p>{book.name}</p>
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
                            {priceFormat(book.price)}원
                        </div>
                    </div>
                </div>
                <p className="all_price">
                    합계
                    <span>{priceFormat(book.price * quantity)}원</span>
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
