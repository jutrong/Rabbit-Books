import './LoginPage.css';
import loginLogo from '../../../assets/imgs/login-logo.png';

export default function LoginPage() {
    return (
        <div className='login-container'>
            <div className='login-left'>
                <h3>
                    안녕하세요!
                </h3>
                <div className='subtitle'>
                    <p>
                        토끼문고는 다양한 지식과
                    </p>
                    <p>
                        예술문화 경험을 제공합니다.
                    </p>
                </div>
                <p className='info'>
                    지금 바로 가입하고 혜택을 바등세요!
                    <a href='#'>회원가입</a>
                </p>
                <img className='login-logo' src={loginLogo} alt="login-logo"/>
            </div>
            <div className='login-right'>
                <h3>
                    로그인
                </h3>
                <div className='inputs'>
                    <input type='text' placeholder='이메일을 입력해주세요'/>
                    <input type='text' placeholder='비밀번호를 입력해주세요'/>
                </div>
                <div className='remember'>
                    <label>
                        <input type='checkbox'/>
                        아이디 저장
                    </label>
                    <div className='find'>
                        <p>
                            아이디 찾기
                        </p>
                        <span> | </span>
                        <p>
                            비밀번호 찾기
                        </p>
                    </div>
                </div>
                <button className='login-btn'>
                    로그인
                </button>
            </div>
        </div>
    )
}