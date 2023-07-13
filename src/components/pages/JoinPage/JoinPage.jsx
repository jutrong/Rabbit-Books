import './JoinPage.scss';
import loginLogo from '../../../assets/images/rabbit.png';
import loginBg from '../../../assets/images/login_bg.png';

import { useState, useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import {
    SERVER_URL,
    emailChk,
    korChk,
    postFetch,
    setSaveJoinName,
} from '../../../utils';

const Join = () => {
    const navigate = useNavigate();

    const emailRef = useRef();
    const passwordRef = useRef();
    const nameRef = useRef();
    const phoneRef = useRef();
    const addressRef = useRef();

    const [duplicateEmail, setDuplicateEmail] = useState(false);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [rePassword, setRePassword] = useState('');
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [address, setAddress] = useState('');

    // 필드별 입력 처리 (공통 메소드)
    const onInput = (e) => {
        const { name: targetName, value: targetValue } = e.target;

        if (targetName === 'email') setEmail(targetValue);
        else if (targetName === 'password') setPassword(targetValue);
        else if (targetName === 'rePassword') setRePassword(targetValue);
        else if (targetName === 'name') setName(targetValue);
        else if (targetName === 'phone') setPhone(targetValue);
        else if (targetName === 'address') setAddress(targetValue);
    };

    // 아이디 중복체크
    const onDuplicateChk = async () => {
        const data = { email };
        const json = await postFetch(
            `${SERVER_URL}/api/auth/duplicateChkId`,
            data,
        );

        if (json?.result === 'success') {
            setDuplicateEmail(true);
            alert('사용 가능한 이메일입니다');
        } else if (json) {
            alert('이미 가입된 이메일입니다');
        } else {
            alert('알 수 없는 오류가 발생했습니다\n다시 시도해주세요');
        }
    };

    // 회원가입
    const onSubmit = async (e) => {
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
        if (address.length === 0) {
            alert('주소를 입력해주세요');
            addressRef.current.focus();
            return;
        }

        const data = {
            email,
            password,
            username: name,
            phone,
            address,
        };

        // 유효성 통과 후 로직(Post)
        const json = await postFetch(`${SERVER_URL}/api/auth/join`, data);
        if (json) {
            setSaveJoinName(name);
            // 회원가입 완료 시 완료 화면 전환
            navigate('/joinComplete');
        } else {
            alert(
                '회원 가입에 실패했습니다\n동일한 오류가 발생시 관리자에게 문의바랍니다',
            );
        }
    };

    return (
        <div className="login join">
            <div className="header_menu">
                <h1 className="main_logo">
                    <Link to="/">
                        <img src={loginLogo} alt="로고" />
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
                                    minLength={2}
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
                                <input
                                    type="text"
                                    placeholder="주소를 입력해주세요."
                                    name="address"
                                    value={address}
                                    onChange={onInput}
                                    ref={addressRef}
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
