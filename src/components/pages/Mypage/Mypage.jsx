import './Mypage.scss';
import Profile from '../../../assets/images/rabbit.png';
import member from '../../../assets/images/icons/icon_member_active.png';
import check from '../../../assets/images/icons/icon_check_shape.png';
// import Sidebar from '../../atoms/Sidebar/Sidebar';

const Mypage = () => {
    return (
        <div className="mypage_container con_wrap">
            <div className="mypage_status">
                <ul>
                    <li>
                        <em className="rank">회원 등급</em>
                        <strong>일반</strong>
                    </li>
                    <li>
                        <em className="order">주문·배송 건수</em>
                        <strong>30</strong>
                    </li>
                    <li>
                        <em className="qa">내 문의 건수</em>
                        <strong>3</strong>
                    </li>
                    <li>
                        <em className="payment">총 주문 금액 (월)</em>
                        <strong>
                            3,500,000 <span>원</span>
                        </strong>
                    </li>
                    <li>
                        <em className="point">적립 포인트</em>
                        <strong>
                            10,500 <span>P</span>
                        </strong>
                    </li>
                </ul>
            </div>

            <ul className="tab_menu_type3 clear">
                <li className="active">
                    <a>회원 정보</a>
                </li>
                <li>
                    <a>주문·배송 조회</a>
                </li>
                <li>
                    <a>내 문의 조회</a>
                </li>
                <li>
                    <a>포인트 조회</a>
                </li>
                <li>
                    <a>배송지 관리</a>
                </li>
            </ul>

            <div className="main_container">
                <div className="main_container_wrap">
                    <strong>기본정보</strong>
                    <table className="type2 txt_left">
                        <colgroup>
                            <col width="200px" />
                            <col width="*" />
                        </colgroup>
                        <tbody>
                            <tr>
                                <th>아이디</th>
                                <td>yuna@gmail.com</td>
                            </tr>
                            <tr>
                                <th>비밀번호</th>
                                <td>
                                    <input
                                        type="password"
                                        className="w_full"
                                        placeholder="현재 비밀번호"
                                    />
                                    <input
                                        type="password"
                                        className="w_full martop_8"
                                        placeholder="새 비밀번호"
                                    />
                                    <input
                                        type="password"
                                        className="w_full martop_8"
                                        placeholder="새 비밀번호 재입력"
                                    />
                                    <p className="grey_tag martop_4">
                                        ※ 10 ~ 20자의 영문 소문자, 숫자 및
                                        특수문자 모두 사용 가능
                                    </p>
                                </td>
                            </tr>
                            <tr>
                                <th>이름</th>
                                <td>
                                    <input
                                        type="text"
                                        className="w_full"
                                        value="박유나"
                                    />
                                    <p className="grey_tag martop_4">
                                        ※ 2 ~ 10자의 한글 사용 가능
                                    </p>
                                </td>
                            </tr>
                            <tr>
                                <th>휴대전화 번호</th>
                                <td>
                                    <input
                                        type="number"
                                        className="w_full"
                                        placeholder="- 없이 입력"
                                    />
                                </td>
                            </tr>
                            <tr>
                                <th>주소</th>
                                <td>
                                    <input
                                        type="text"
                                        className="w_minus210"
                                        value="123456"
                                        readOnly={true}
                                    />
                                    <button className="blue_btn w_200 marleft_6">
                                        주소 검색
                                    </button>
                                    <input
                                        type="text"
                                        className="w_minus210 martop_8"
                                        value="서울시 종로구 새문안로 76"
                                        readOnly={true}
                                    />
                                    <input
                                        type="text"
                                        className="w_minus210 martop_8"
                                        value="콘코디언 빌딩 6~10층"
                                    />
                                </td>
                            </tr>
                        </tbody>
                    </table>

                    <div className="btn_center martop_40">
                        <button className="blue_btn w_200 big">
                            회원 정보 수정
                        </button>
                        <button className="white_btn w_100">회원 탈퇴</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Mypage;
