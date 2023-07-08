import './Sidebar.scss';

const Sidebar = () => {
    return (
        <div className="sidebar_container">
            <div className="sidebar_box">
                <ul className="sidebar_list">
                    <li className="sidebar_list_main">
                        <a href="#">내 정보 관리</a>
                    </li>
                    <li className="sidebar_list_sub focus">
                        <a href="#">개인정보 수정</a>
                    </li>
                    <li className="sidebar_list_sub">
                        <a href="#">회원 탈퇴</a>
                    </li>
                    <li className="sidebar_list_main">
                        <a href="#">주문 내역</a>
                    </li>
                    <li className="sidebar_list_sub">
                        <a href="#">주문 조회</a>
                    </li>
                    <li className="sidebar_list_sub">
                        <a href="#">주문 변경/취소</a>
                    </li>
                    <li className="sidebar_list_main">
                        <a href="#">혜택/포인트</a>
                    </li>
                    <li className="sidebar_list_sub">
                        <a href="#">쿠폰</a>
                    </li>
                    <li className="sidebar_list_sub">
                        <a href="#">포인트</a>
                    </li>
                    <li className="sidebar_list_main">
                        <a href="#">고객센터</a>
                    </li>
                    <li className="sidebar_list_sub">
                        <a href="#">자주 묻는 질문 FAQ</a>
                    </li>
                    <li className="sidebar_list_sub">
                        <a href="#">1:1 고객상담</a>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Sidebar;