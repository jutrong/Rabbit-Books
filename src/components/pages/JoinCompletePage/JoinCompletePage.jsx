import './JoinCompletePage.scss';
import loginLogo from '../../../assets/images/rabbit.png';
import joinBg from '../../../assets/images/join_bg.png';

const JoinComplete = () => {
    return (
        <div className="login">
            <div className="header_menu">
                <h1 className="main_logo">
                    <a href="#none">
                        <img src={loginLogo} alt="로고" />
                        <p>토끼 책방</p>
                    </a>
                </h1>
            </div>
            <div className="join_complete_container con_wrap">
                <h2>
                    <span>박*나</span>님 환영합니다!
                </h2>
                <p>토끼책방 가입이 완료되었습니다.</p>
                <button className="blue_btn">로그인</button>
                <img src={joinBg} alt="회원가입 완료 백그라운드 이미지" />
            </div>
        </div>
    );
};
export default JoinComplete;
