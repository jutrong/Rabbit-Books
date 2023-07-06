import { Link, useNavigate } from 'react-router-dom';

const List = () => {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate('/style');
    };

    return (
        <div className="con_wrap">
            <h3>Page List 입니다 😉</h3>

            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    {/*<Link to="/style">스타일 가이드</Link>*/}
                    <p onClick={handleClick}>스타일 가이드로 클릭!</p>
                </li>
                <li>
                    <Link to="/login">로그인 클릭!</Link>
                </li>
                <li>
                    <Link to="/join">회원가입 클릭!</Link>
                </li>
            </ul>
        </div>
    );
};

export default List;
