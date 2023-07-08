import './CartPage.scss';
import noCartBg from '../../../assets/images/no_cart_bg.png';

const NoSearch = () => {
    return (
        <div className="no_cart">
            <strong className="cart_title">
                장바구니에 담은 상품이 없습니다.
            </strong>
            <img src={noCartBg} alt="검색 결과 없음" />
        </div>
    );
};

export default NoSearch;
