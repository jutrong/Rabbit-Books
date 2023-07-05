import { Link } from "react-router-dom";

const Home = () => {
    return (
        <div className="con_wrap">
            <h3>Home입니다</h3>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/style">스타일 가이드</Link>
                </li>
            </ul>
        </div>
    );
};

export default Home;
