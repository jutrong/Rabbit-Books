import "./Mypage.css";

export default function Mypage() {
  return (
    <div className="mypage_container">
      <div className="sidebar_container">
        <div className="sidebar_box">
          <ul className="sidebar_list">
            <li className="sidebar_list_main focus">
              <a href="#">내 정보 관리</a>
            </li>
            <li className="sidebar_list_sub focus">
              <a href="#">주문/배송목록</a>
            </li>
            <li className="sidebar_list_sub">
              <a href="#">계정 관리</a>
            </li>
            <li className="sidebar_list_main">
              <a href="#">활동내역</a>
            </li>
            <li className="sidebar_list_sub">
              <a href="#">이벤트 참여 내역</a>
            </li>
            <li className="sidebar_list_sub">
              <a href="#">문화공간 이용 내역</a>
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
              <a href="#">회원정보</a>
            </li>
            <li className="sidebar_list_sub">
              <a href="#">배송주소록</a>
            </li>
            <li className="sidebar_list_sub">
              <a href="#">회원정보관리</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="main_container">
        <h3>계정 관리</h3>
        <p>기본정보</p>
        <div className="main_container_box"></div>
      </div>
    </div>
  );
}
