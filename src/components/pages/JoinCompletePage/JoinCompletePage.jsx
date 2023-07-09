import './JoinCompletePage.scss';
import loginLogo from '../../../assets/images/rabbit.png';
import joinBg from '../../../assets/images/join_bg.png';
import { Link, useNavigate } from 'react-router-dom';
import { getSaveJoinName, removeSaveJoinName } from '../../../utils';
import { useEffect, useState } from 'react';

const JoinComplete = () => {
    const navigate = useNavigate();

    // 로컬 스토리지에 저장된 이름을 호출
    const [joinName] = useState(getSaveJoinName());
    useEffect(() => {
        if (!joinName) navigate('/'); // 호출된 이름이 없으면 홈 화면으로 강제 이동

        removeSaveJoinName(); // 회원가입 완료 후 처음 한번만 보여주기 위해 강제 삭제
    }, [joinName, navigate]);
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
                    <span>{getSaveJoinName()}</span>님 환영합니다!
                </h2>
                <p>토끼책방 가입이 완료되었습니다.</p>
                <Link to="/login" className="blue_btn">
                    로그인
                </Link>
                <img src={joinBg} alt="회원가입 완료 백그라운드 이미지" />
            </div>
        </div>
    );
};
export default JoinComplete;
