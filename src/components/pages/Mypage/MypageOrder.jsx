const MypageOrder = () => {
    return (
        <div className="main_container_wrap">
            <strong>주문배송조회</strong>
            <div className="search con_wrap tracking">
                <div className="search_container">
                    <div className="search_box">
                        <div className="table_box">
                            <table className="type1 txt_left1">
                                <colgroup>
                                    <col width="*" />
                                    <col width="280px" />
                                    <col width="280px" />
                                </colgroup>
                                <thead>
                                    <tr>
                                        <th>상품 정보</th>
                                        <th>배송 정보</th>
                                        <th>고객 센터</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>
                                            <div className="book_info_box">
                                                <img
                                                    src="https://contents.kyobobook.co.kr/sih/fit-in/458x0/pdt/9788937460449.jpg"
                                                    alt="책 이미지"
                                                />
                                                <div className="book_info">
                                                    <ul className="book_tag_list">
                                                        {/* <li>
                                                            <span className="green">
                                                                주문 일자 -
                                                                2023.03.03
                                                            </span>
                                                        </li> */}
                                                        <li>
                                                            <span className="sky">
                                                                주문 번호 -
                                                                ORD20230303
                                                            </span>
                                                        </li>
                                                    </ul>
                                                    <strong className="book_info_title">
                                                        데미안
                                                    </strong>
                                                    <p className="author">
                                                        헤르만 헤세 저자(글)
                                                        &#183; 전영애 번역
                                                    </p>
                                                    <div className="pay">
                                                        <strong>15,120</strong>
                                                        원 / 수량&nbsp;&nbsp;
                                                        <b>1</b>개
                                                    </div>

                                                    <p className="order_title">
                                                        구매자 정보
                                                    </p>
                                                    <ul className="order_list">
                                                        <li>
                                                            주문자 &#183;&nbsp;
                                                            <b>박유나</b>
                                                        </li>
                                                        <li>
                                                            휴대폰 &#183;&nbsp;
                                                            <b>010-1234-1234</b>
                                                        </li>
                                                        <li>
                                                            배송지 &#183;&nbsp;
                                                            <b>
                                                                서울 특별시
                                                                영등포구 어쩌구
                                                                저쩌구
                                                            </b>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </td>
                                        <td>
                                            <span className="shiping">
                                                배송완료
                                            </span>
                                        </td>
                                        <td>
                                            <button className="black_btn w_156">
                                                반품접수
                                            </button>
                                            <button className="blue_btn w_156 martop_10">
                                                1:1문의
                                            </button>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <div className="book_info_box">
                                                <img
                                                    src="https://contents.kyobobook.co.kr/sih/fit-in/458x0/pdt/9788937460449.jpg"
                                                    alt="책 이미지"
                                                />
                                                <div className="book_info">
                                                    <ul className="book_tag_list">
                                                        {/* <li>
                                                            <span className="green">
                                                                주문 일자 -
                                                                2023.03.03
                                                            </span>
                                                        </li> */}
                                                        <li>
                                                            <span className="sky">
                                                                주문 번호 -
                                                                ORD20230303
                                                            </span>
                                                        </li>
                                                    </ul>
                                                    <strong className="book_info_title">
                                                        데미안
                                                    </strong>
                                                    <p className="author">
                                                        헤르만 헤세 저자(글)
                                                        &#183; 전영애 번역
                                                    </p>
                                                    <div className="pay">
                                                        <strong>15,120</strong>
                                                        원 / 수량&nbsp;&nbsp;
                                                        <b>1</b>개
                                                    </div>

                                                    <p className="order_title">
                                                        구매자 정보
                                                    </p>
                                                    <ul className="order_list">
                                                        <li>
                                                            주문자 &#183;&nbsp;
                                                            <b>박유나</b>
                                                        </li>
                                                        <li>
                                                            휴대폰 &#183;&nbsp;
                                                            <b>010-1234-1234</b>
                                                        </li>
                                                        <li>
                                                            배송지 &#183;&nbsp;
                                                            <b>
                                                                서울 특별시
                                                                영등포구 어쩌구
                                                                저쩌구
                                                            </b>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </td>
                                        <td>
                                            <span className="shiping">
                                                배송완료
                                            </span>
                                        </td>
                                        <td>
                                            <button className="black_btn w_156">
                                                반품접수
                                            </button>
                                            <button className="blue_btn w_156 martop_10">
                                                1:1문의
                                            </button>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <div className="book_info_box">
                                                <img
                                                    src="https://contents.kyobobook.co.kr/sih/fit-in/458x0/pdt/9788937460449.jpg"
                                                    alt="책 이미지"
                                                />
                                                <div className="book_info">
                                                    <ul className="book_tag_list">
                                                        {/* <li>
                                                            <span className="green">
                                                                주문 일자 -
                                                                2023.03.03
                                                            </span>
                                                        </li> */}
                                                        <li>
                                                            <span className="sky">
                                                                주문 번호 -
                                                                ORD20230303
                                                            </span>
                                                        </li>
                                                    </ul>
                                                    <strong className="book_info_title">
                                                        데미안
                                                    </strong>
                                                    <p className="author">
                                                        헤르만 헤세 저자(글)
                                                        &#183; 전영애 번역
                                                    </p>
                                                    <div className="pay">
                                                        <strong>15,120</strong>
                                                        원 / 수량&nbsp;&nbsp;
                                                        <b>1</b>개
                                                    </div>

                                                    <p className="order_title">
                                                        구매자 정보
                                                    </p>
                                                    <ul className="order_list">
                                                        <li>
                                                            주문자 &#183;&nbsp;
                                                            <b>박유나</b>
                                                        </li>
                                                        <li>
                                                            휴대폰 &#183;&nbsp;
                                                            <b>010-1234-1234</b>
                                                        </li>
                                                        <li>
                                                            배송지 &#183;&nbsp;
                                                            <b>
                                                                서울 특별시
                                                                영등포구 어쩌구
                                                                저쩌구
                                                            </b>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </td>
                                        <td>
                                            <span className="shiping">
                                                배송완료
                                            </span>
                                        </td>
                                        <td>
                                            <button className="black_btn w_156">
                                                반품접수
                                            </button>
                                            <button className="blue_btn w_156 martop_10">
                                                1:1문의
                                            </button>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default MypageOrder;
