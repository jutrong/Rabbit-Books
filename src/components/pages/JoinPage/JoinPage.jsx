import './LoginPage.css';
import loginLogo from '../../../assets/images/rabbit.png';
import loginBg from '../../../assets/images/login_bg.png';

const Login = () => {
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
            <div className="login_container">
                <div className="con_wrap">
                    <div className="login_inner">
                        <div className="login_left">
                            <strong className="fw_bold">안녕하세요!</strong>
                            <p>
                                토끼책방은 다양한 지식과
                                <br />
                                예술문화 경험을 제공합니다.
                            </p>
                            <p className="join_txt">
                                지금 바로 가입하고 혜택을 받으세요!
                                <span>회원가입</span>
                            </p>
                            <img src={loginBg} alt="로그인 백그라운드 이미지" />
                        </div>

                        <div className="login_form">
                            <h2>로그인</h2>
                            <input
                                type="text"
                                placeholder="이메일을 입력해주세요"
                            />
                            <input
                                type="text"
                                placeholder="비밀번호를 입력해주세요"
                            />
                            <div className="login_features">
                                <input
                                    type="checkbox"
                                    className="ch_check hide"
                                    id="ipChk1"
                                />
                                <label htmlFor="ipChk1" className="label">
                                    아이디 저장
                                </label>
                                <button>아이디 찾기 | 비밀번호 찾기</button>
                            </div>
                            <button className="blue_btn">로그인</button>
                            <p>SNS 계정으로 로그인하기</p>
                            <ul className="auth_login_list">
                                <li>
                                    <img src={logoNaver} alt="네이버 로고" />
                                </li>
                                <li>
                                    <img src={logoKakao} alt="카카오 로고" />
                                </li>
                                <li>
                                    <img src={logoGoogle} alt="구글 로고" />
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default Login;
