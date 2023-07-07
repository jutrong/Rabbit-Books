import './MyPage.scss';
import Profile from '../../../assets/images/rabbit.png';
import member from '../../../assets/images/icons/icon_member_active.png';
import check from '../../../assets/images/icons/icon_check_shape.png';

const Mypage = () => {
    return (
        <div className="mypage_container">
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
            <div className="main_container">
                <div className="main_container_wrap">
                    <h3>계정 관리</h3>
                    <p>회원정보</p>
                    <div className="main_container_box">
                        <div className="profile">
                            <img
                                src={Profile}
                                alt="profile"
                                className="profile_img"
                            />
                            <img src={member} alt="아이콘" />
                        </div>
                        <div className="input_box">
                            <form action="">
                                <div className="name_wrap">
                                    <label
                                        className="input_box_name"
                                        htmlFor="mypageName"
                                    >
                                        이름
                                    </label>
                                    <input
                                        type="text"
                                        className="w_276"
                                        id="mypageName"
                                        placeholder="토깽이"
                                    />
                                </div>
                                <div className="mypage_email_box">
                                    <div className="email_wrap">
                                        <label
                                            className="input_box_email"
                                            htmlFor="mypageEmail"
                                        >
                                            이메일
                                        </label>
                                    </div>
                                    <div>
                                        <input
                                            type="text"
                                            id="mypageEmail"
                                            placeholder="elice@tokki.io"
                                        />
                                        <button className="blue_btn w_100 modal_btn">
                                            이메일 변경
                                        </button>
                                    </div>
                                    <img
                                        src={check}
                                        alt="인증완료"
                                        className="check_img"
                                    />
                                    <p>인증 완료</p>
                                </div>

                                <div className="mypage_phone_box">
                                    <label
                                        className="input_box_phone"
                                        htmlFor="mypagePhone"
                                    >
                                        휴대폰 번호
                                    </label>
                                    <div>
                                        <input
                                            type="number"
                                            className="w_276"
                                            id="mypagePhone"
                                            placeholder="010-1234-1234"
                                        />
                                        <button className="blue_btn w_100 modal_btn">
                                            휴대폰 인증
                                        </button>
                                    </div>
                                </div>
                                <div className="input_btn_box">
                                    <button className="cancle_btn black_btn big w_100">
                                        취소
                                    </button>
                                    <button className="save_btn blue_btn big w_100">
                                        저장
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
                <div className="psd_change_container">
                    <p>비밀번호</p>
                    <div className="psd_change_box">
                        <div className="psd_change_left">
                            <span>최근 업데이트 : 2023-07-15</span>
                            <p>비밀번호</p>
                        </div>
                        <div className="psd_change_right ">
                            <button className="blue_btn w_100 modal_btn">
                                비밀번호 변경
                            </button>
                        </div>
                    </div>
                </div>
                <div className="account_delete_container">
                    <p>계정 삭제</p>
                    <div className="account_delete_box">
                        <span>
                            계정 삭제 시 프로필 및 응시한 테스트 정보가 삭제
                            됩니다.
                        </span>
                        <button className="blue_btn w_100 modal_btn">
                            삭제하기
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Mypage;
