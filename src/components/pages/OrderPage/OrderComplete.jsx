import loginLogo from '../../../assets/images/rabbit.png';
import joinBg from '../../../assets/images/event4.png';
import { Link, useNavigate } from 'react-router-dom';
import './OrderComplete.scss';

const OrderComplete = () => {
    const navigate = useNavigate();
    const routeToProductlist = () => {
        navigate('/');
    };
    return (
        <div className="order_complete">
            <div className="header_menu">
                <h1 className="main_logo">
                    <a href="#none">
                        <img src={loginLogo} alt="로고" />
                    </a>
                </h1>
            </div>
            <div className="join_complete_container con_wrap">
                <h2>
                    <span>주문이 완료되었습니다 🤝</span>
                </h2>
                <p> 감사합니다</p>
                <Link to="/" className="blue_btn" onClick={routeToProductlist}>
                    홈페이지로 이동
                </Link>
                <img src={joinBg} alt="주문완료 이미지" />
            </div>
        </div>
    );
};
export default OrderComplete;
