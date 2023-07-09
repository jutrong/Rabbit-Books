import './JoinPage.scss';
import loginLogo from '../../../assets/images/rabbit.png';
import loginBg from '../../../assets/images/login_bg.png';

import { useState, useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import { setSaveJoinName } from '../../../utils';

const Join = () => {
    const navigate = useNavigate();

    const emailRef = useRef();
    const passwordRef = useRef();
    const nameRef = useRef();
    const phoneRef = useRef();

    const [duplicateEmail, setDuplicateEmail] = useState(false);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [rePassword, setRePassword] = useState('');
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');

    // 필드별 입력 처리 (공통 메소드)
    const onInput = (e) => {
        const { name: targetName, value: targetValue } = e.target;

        if (targetName === 'email') setEmail(targetValue);
        else if (targetName === 'password') setPassword(targetValue);
        else if (targetName === 'rePassword') setRePassword(targetValue);
        else if (targetName === 'name') setName(targetValue);
        else if (targetName === 'phone') setPhone(targetValue);
    };

    // 아이디 중복체크
    const onDuplicateChk = () => {
        // fetch() 작성

        setDuplicateEmail(true);
    };

    // 회원가입
    const onSubmit = (e) => {
        e.preventDefault();

        // 유효성 검사
        if (!emailChk(email)) {
            alert('이메일을 정확하게 입력해주세요');
            emailRef.current.focus();
            return;
        }
        if (!duplicateEmail) {
            alert('이메일 중복 체크를 해주세요');
            emailRef.current.focus();
            return;
        }
        if (password.length < 10 || password.length > 20) {
            alert('비밀번호를 10 ~ 20 자리로 입력해주세요');
            passwordRef.current.focus();
            return;
        }
        if (rePassword !== password) {
            alert('비밀번호가 서로 일치하지 않습니다');
            passwordRef.current.focus();
            return;
        }
        if (name.length < 2 || name.length > 10) {
            alert('이름을 2 ~ 10 자리로 입력해주세요');
            nameRef.current.focus();
            return;
        }
        if (!korChk(name)) {
            alert('이름은 한글만 입력해주세요');
            nameRef.current.focus();
            return;
        }
        if (phone.length !== 11) {
            alert('휴대폰 번호를 정확하게 입력해주세요');
            phoneRef.current.focus();
            return;
        }

        // 유효성 통과 후 로직
        // fetch() 작성

        setSaveJoinName(name);
        // 회원가입 완료 시 완료 화면 전환
        navigate('/joinComplete');
    };

    // 한글 정규식
    const korChk = (str) => /[ㄱ-ㅎ|ㅏ-ㅣ|가-힣]/.test(str);

    // 이메일 정규식
    const emailChk = (email) => {
        // eslint가 정규식을 제대로 확인을 못하는 것 같음... 더 쉽고 간편한 정규식 찾으면 변경 예정...
        const emailRegex =
            /^(([^<>()\[\].,;:\s@"]+(\.[^<>()\[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/i;
        return emailRegex.test(email);
    };

    return (
        <div className="login">
            <div className="header_menu">
                <h1 className="main_logo">
                    <Link to="/">
                        <img src={loginLogo} alt="로고" />
                        <p>토끼 책방</p>
                    </Link>
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
                                <Link to="/login">
                                    <span>로그인</span>
                                </Link>
                            </p>
                            <img src={loginBg} alt="로그인 백그라운드 이미지" />
                        </div>

                        <div className="login_form">
                            <h2>회원가입</h2>
                            <form onSubmit={onSubmit} autoComplete="off">
                                <div className="inp_btn_container">
                                    <input
                                        type="text"
                                        placeholder="이메일을 입력해주세요"
                                        name="email"
                                        value={email}
                                        onChange={onInput}
                                        ref={emailRef}
                                    />
                                    <button
                                        type="button"
                                        className="blue_btn w_96"
                                        onClick={onDuplicateChk}
                                    >
                                        중복 확인
                                    </button>
                                </div>
                                <input
                                    type="password"
                                    placeholder="비밀번호를 입력해주세요"
                                    name="password"
                                    minLength={10}
                                    maxLength={20}
                                    value={password}
                                    onChange={onInput}
                                    ref={passwordRef}
                                />
                                <input
                                    type="password"
                                    placeholder="비밀번호를 한번 더 입력해주세요"
                                    name="rePassword"
                                    minLength={10}
                                    maxLength={20}
                                    value={rePassword}
                                    onChange={onInput}
                                />
                                <input
                                    type="text"
                                    placeholder="이름을 입력해주세요"
                                    name="name"
                                    maxLength={10}
                                    value={name}
                                    onChange={onInput}
                                    ref={nameRef}
                                />
                                <input
                                    type="number"
                                    placeholder="휴대폰 번호를 '-' 없이 입력해주세요"
                                    name="phone"
                                    maxLength={11}
                                    value={phone}
                                    onChange={onInput}
                                    ref={phoneRef}
                                />
                                <button className="blue_btn">가입하기</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default Join;
