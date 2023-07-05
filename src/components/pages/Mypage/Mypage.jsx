import "./Mypage.css";
import Profile from "../../../assets/images/rabbit.png";
import member from "../../../assets/images/icons/icon_member_active.png";

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
        <p>회원정보</p>
        <div className="main_container_box">
          <div className="profile">
            <img src={Profile} alt="profile" className="profile_img" />
          </div>
          <div className="input_box">
            <form action="">
              <div className="name_wrap">
                <label className="input_box_name" for="mypage_name">
                  이름
                </label>
                <input
                  type="text"
                  className="w_276"
                  id="mypage_name"
                  placeholder="토깽이"
                />
              </div>
              <div className="mypage_email_box">
                <div className="email_wrap">
                  <label className="input_box_email" for="mypage_email">
                    이메일
                  </label>
                </div>
                <div>
                  <input
                    type="text"
                    className="w_276"
                    id="mypage_email"
                    placeholder="elice@tokki.io"
                  />
                  <button className="blue_btn w_100 modal_btn">
                    이메일 변경
                  </button>
                </div>
              </div>

              <div className="mypage_phone_box">
                <label className="input_box_phone" for="mypage_phone">
                  휴대폰 번호
                </label>
                <div>
                  <input
                    type="number"
                    className="w_276"
                    id="mypage_phone"
                    placeholder="010-1234-1234"
                  />
                  <button className="blue_btn w_100 modal_btn">
                    휴대폰 인증
                  </button>
                </div>
              </div>
              <div className="input_btn_box">
                <button className="cancle_btn black_btn big w_100">취소</button>
                <button className="save_btn blue_btn big w_100">저장</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
