import './OrderCheck.scss';
import Sidebar from '../../atoms/Sidebar/Sidebar';
import last from '../../../assets/images/icons/icon_last.png';
import gnbbox from '../../../assets/images/icons/icon_gnb_box.png';

const OrderCheck = () => {
    
    return (
        <div className="ordercheck">
            <Sidebar></Sidebar>
            <div className="ordercheck_right">
                <p className="title">주문/배송 조회</p>
                {/* 주문내역이 없는 경우 */}
                <div className="no_order">
                    <p>앗!</p>
                    <p>아직 주문내역이 없습니다.</p>
                    <button>
                        <a href="#">메인으로</a>
                    </button>
                </div>
                {/* 주문내역이 있는 경우 */}
                <div className="yes_order">
                    <div className="order_date">
                        <div>
                            <p>2023.07.15</p>
                            <a href="#">상세보기</a>
                            <img src={last} alt="넘기기화살표" />
                        </div>
                        <div>
                            <img src={gnbbox} alt="상세조회" />
                            <a href="#">상세조회</a>
                        </div>
                    </div>
                    <div className="order_product">
                        <div className="order_img">
                            <img src={book2} alt="책이미지2" />
                        </div>
                        <div className="order_book">
                            <p>토끼책방 배송</p>
                            <p>한 입 크기로 잘라먹는 리액트</p>
                            <p>수량 : 1</p>
                        </div>
                        <div className="order_price">
                            <p>
                                <strong>38,200</strong>원
                            </p>
                        </div>
                        <div className="order_progress">
                            <p>상품준비중</p>
                        </div>
                        <div className="order_button">
                            <button>리뷰 작성</button>
                            <button>주문 취소</button>
                        </div>
                    </div>
                    <div className="order_product">
                        <div className="order_img">
                            <img src={book2} alt="책이미지2" />
                        </div>
                        <div className="order_book">
                            <p>토끼책방 배송</p>
                            <p>한 입 크기로 잘라먹는 리액트</p>
                            <p>수량 : 1</p>
                        </div>
                        <div className="order_price">
                            <p>
                                <strong>38,200</strong>원
                            </p>
                        </div>
                        <div className="order_progress">
                            <p>상품준비중</p>
                        </div>
                        <div className="order_button">
                            <button>리뷰 작성</button>
                            <button>주문 취소</button>
                        </div>
                    </div>
                    <div className="order_product">
                        <div className="order_img">
                            <img src={book2} alt="책이미지2" />
                        </div>
                        <div className="order_book">
                            <p>토끼책방 배송</p>
                            <p>한 입 크기로 잘라먹는 리액트</p>
                            <p>수량 : 1</p>
                        </div>
                        <div className="order_price">
                            <p>
                                <strong>38,200</strong>원
                            </p>
                        </div>
                        <div className="order_progress">
                            <p>상품준비중</p>
                        </div>
                        <div className="order_button">
                            <button>리뷰 작성</button>
                            <button>주문 취소</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OrderCheck;
