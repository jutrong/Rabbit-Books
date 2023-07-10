import './CartPage.scss';
import { useState, useEffect } from 'react';
import NoCart from './NoCartPage';

const Cart = () => {
    const [isData] = useState(true);
    const [cartItems, setCartItems] = useState([]);
    const [selectAll, setSelectAll] = useState(true);

    // 상품리스트에서 장바구니 버튼 누르면 추가되면서 장바구니 페이지 이동 OK

    // 로컬스토리지에 있는 데이터를 배열로 OK
    // JSON 형태의 데이터를 화면에 뿌려줌 OK

    // x박스 누르면 화면에서 없어지고 로컬스토리지에서도 삭제 OK
    // 체크된 것 삭제 버튼 누르면 화면에서 없어지고 로컬스토리지에서도 삭제 OK
    // 수량 카운트 부분 - OK
    // 구매 버튼 누르면 주문페이지 이동

    useEffect(() => {
        // 로컬 스토리지에서 저장된 카트 아이템을 가져와서 초기화
        const storedCartItems = localStorage.getItem('cart');
        if (storedCartItems) {
            setCartItems(JSON.parse(storedCartItems));
        }
    }, []);

    const removeProduct = (itemId) => {
        // // 로컬 스토리지에서 항목 삭제
        const deleteItem = cartItems.filter(
            (cartItem) => cartItem.id !== itemId,
        );
        localStorage.setItem('cart', JSON.stringify(deleteItem));

        // 화면에서 항목 삭제
        setCartItems(
            cartItems.filter((item) => {
                return item.id !== itemId;
            }),
        );
    };

    const checkAll = () => {
        // 모든 아이템의 체크 상태 변경
        const updatedItems = cartItems.map((item) => ({
            ...item,
            checked: !selectAll,
        }));
        setSelectAll((prevSelectAll) => !prevSelectAll);
        setCartItems(updatedItems);
    };

    const toggleCheckbox = (itemId, checked) => {
        // 이전 상태를 기반으로 새로운 배열(updatedItems) 생성
        setCartItems((prevItems) => {
            const updatedItems = prevItems.map((item) => {
                if (item.id === itemId) {
                    // 현재 항목의 id가 매개변수로 전달된 itemId와 일치하는 경우
                    // 새로운 객체를 생성하여 checked 속성을 전달된 checked 값으로 업데이트
                    return {
                        ...item,
                        checked: checked,
                    };
                }
                return item; // 일치하지 않는 경우, 항목을 그대로 반환
            });

            // 전체 선택/해제 체크박스 상태 업데이트
            // 모든 항목이 check된 경우 selectAll 상태를 true로 업데이트
            const allChecked = updatedItems.every((item) => item.checked);
            setSelectAll(allChecked);

            return updatedItems;
        });
    };
    const handleDeleteAll = () => {
        // 로컬 스토리지에서 데이터 삭제
        localStorage.removeItem('cart');

        // 화면에서 모든 항목 삭제
        setCartItems([]);
    };
    const deleteChecked = () => {
        // 선택된 상품의 id 배열 가져오기
        const selectedIds = cartItems
            .filter((item) => item.checked)
            .map((item) => item.id);

        // 로컬 스토리지에서 선택된 상품 삭제
        const updatedItems = cartItems.filter(
            (item) => !selectedIds.includes(item.id),
        );
        localStorage.setItem('cart', JSON.stringify(updatedItems));

        // 화면에서 선택된 상품 삭제
        setCartItems(updatedItems);
    };

    // 장바구니 물건 수량 변경 기능
    const handleAdd = (productId) => {
        const addQty = cartItems.map((product) => {
            if (productId === product.id && product.quantity > 0) {
                return { ...product, quantity: product.quantity + 1 };
            } else return product;
        });
        setCartItems(addQty);
    };
    const handleMinus = (productId) => {
        const minusQty = cartItems.map((product) => {
            if (productId === product.id && product.quantity > 1) {
                return { ...product, quantity: product.quantity - 1 };
            } else return product;
        });
        setCartItems(minusQty);
    };

    // 전체 가격, 숫자
    const calculateTotalPrice = () => {
        let totalPrice = 0;
        let totalCount = 0;
        for (const book of cartItems) {
            totalPrice += book.price * book.quantity;
            totalCount += book.quantity;
        }
        return {totalPrice, totalCount};
     };
     const { totalPrice, totalCount } = calculateTotalPrice();
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
                                                id="checkAll"
                                                onClick={checkAll}
                                                checked={selectAll}
                                            />
                                            <label
                                                htmlFor="checkAll"
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
                                    {cartItems.map((item) => (
                                        <Tablerow
                                            key={item.id}
                                            item={item}
                                            cartItems={cartItems}
                                            removeProduct={removeProduct}
                                            toggleCheckbox={toggleCheckbox}
                                            handleAdd={handleAdd}
                                            handleMinus={handleMinus}
                                        />
                                    ))}
                                </tbody>
                            </table>
                            <div className="btn_left martop_20">
                                <button
                                    className="white_btn w_156"
                                    onClick={deleteChecked}
                                >
                                    선택 상품 삭제
                                </button>
                                <button
                                    className="white_btn w_156"
                                    onClick={handleDeleteAll}
                                >
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
                                                        <em>{totalPrice}</em>원
                                                    </strong>
                                                    <p>
                                                        총 <em>{totalCount}</em>개
                                                    </p>
                                                </div>
                                            </td>
                                            <td>
                                                <div className="ship_box">
                                                    <i className="plus_ship_btn"></i>
                                                    <strong>
                                                        <em>3000</em>원
                                                    </strong>
                                                    <i className="minus_ship_btn"></i>
                                                </div>
                                            </td>
                                            <td>
                                                <div className="order_box">
                                                    <strong>
                                                        <em>{totalPrice + 3000}</em>원
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
const Tablerow = ({
    item,
    removeProduct,
    toggleCheckbox,
    handleAdd,
    handleMinus,
}) => {
    const handleCheckbox = (event) => {
        const checkbox = event.target;
        const checked = checkbox.checked;
        toggleCheckbox(item.id, checked);
    };

    return (
        <tr className="cart_info">
            <td>
                <input
                    type="checkbox"
                    name="inpChk"
                    className="ch_check hide individual"
                    id={item.id}
                    checked={item.checked}
                    onClick={handleCheckbox}
                />
                <label htmlFor={item.id} className="label single"></label>
            </td>
            <td>
                <div className="book_info_box">
                    <img src={item.imgLink} alt="책 이미지" />
                    <div className="book_info">
                        <strong className="book_info_title">
                            {item.productName}
                        </strong>
                        <p className="author">{item.author}</p>
                        <p>창비&#183; 2022년 03월 28일</p>
                        <div className="pay">
                            <em>10%</em>
                            <strong>{item.price}</strong>원
                            <span>{item.price}</span>
                        </div>
                    </div>
                    <button
                        className="remove_btn"
                        onClick={() => {
                            removeProduct(item.id);
                        }}
                    ></button>
                </div>
            </td>
            <td>
                <div className="increase_box">
                    <button
                        type="button"
                        id="minusBtn"
                        className="minus_btn"
                        onClick={() => {
                            handleMinus(item.id);
                        }}
                    >
                        <i></i>
                    </button>
                    <input type="number" id="quantity" value={item.quantity} />
                    <button
                        type="button"
                        id="plusBtn"
                        className="plus_btn"
                        onClick={() => {
                            handleAdd(item.id);
                        }}
                    >
                        <i></i>
                    </button>
                </div>
            </td>
            <td>
                <strong className="amount">{item.price * item.quantity}</strong>
                <button className="blue_btn w_156 martop_10">바로구매</button>
            </td>
            <td>
                <span className="speaker">7월 10일(월)</span>
                도착 예정
            </td>
        </tr>
    );
};

export default Cart;
