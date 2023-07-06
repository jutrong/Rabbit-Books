import './JoinPage.scss';
import loginLogo from '../../../assets/images/rabbit.png';
import loginBg from '../../../assets/images/login_bg.png';

const Join = () => {
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
                                이미 계정을 가지고 계신가요?
                                <span>로그인</span>
                            </p>
                            <img src={loginBg} alt="로그인 백그라운드 이미지" />
                        </div>

                        <div className="login_form">
                            <h2>회원가입</h2>
                            <div className="inp_btn_container">
                                <input
                                    type="text"
                                    placeholder="이메일을 입력해주세요"
                                />
                                <button className="blue_btn w_96">
                                    중복 확인
                                </button>
                            </div>
                            <input
                                type="text"
                                placeholder="비밀번호를 입력해주세요"
                            />
                            <input
                                type="text"
                                placeholder="비밀번호를 한번 더 입력해주세요"
                            />
                            <input
                                type="text"
                                placeholder="이름을 입력해주세요"
                            />
                            <input
                                type="text"
                                placeholder="휴대폰 번호를 입력해주세요"
                            />
                            <button className="blue_btn">가입하기</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default Join;
