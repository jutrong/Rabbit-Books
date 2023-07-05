import { Link, useNavigate } from "react-router-dom";

const Home = () => {
    const navigate = useNavigate();
    const handleClick = () => {
        navigate("/style");
    };

    return (
        <div className="con_wrap">
            <h3>Home입니다</h3>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    {/*<Link to="/style">스타일 가이드</Link>*/}
                    <p onClick={handleClick}>스타일 가이드로 클릭!</p>
                </li>
            </ul>
        </div>
    );
};

export default Home;
