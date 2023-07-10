import { useRef, useState } from 'react';
import './Mypage.scss';
// import Sidebar from '../../atoms/Sidebar/Sidebar';

const Mypage = () => {
    const newPasswordRef = useRef();

    const nameRef = useRef();
    const phoneRef = useRef();
    const addressRef = useRef();

    const [email] = useState('yunana@gmail.com');
    const [password, setPassword] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [newChkPassword, setNewChkPassword] = useState('');
    const [name, setName] = useState('규나');
    const [phone, setPhone] = useState('01012341234');
    const [address, setAddress] = useState('서울시 금천구 벚꽃로 100길');

    // 필드별 입력 처리 (공통 메소드)
    const onInput = (e) => {
        const { name: targetName, value: targetValue } = e.target;

        if (targetName === 'password') setPassword(targetValue);
        else if (targetName === 'newPassword') setNewPassword(targetValue);
        else if (targetName === 'newChkPassword')
            setNewChkPassword(targetValue);
        else if (targetName === 'name') setName(targetValue);
        else if (targetName === 'phone') setPhone(targetValue);
        else if (targetName === 'address') setAddress(targetValue);
    };

    const [readMode, setReadMode] = useState(true);

    const onModify = () => {
        setReadMode((prev) => !prev);
    };

    const onSubmit = async (e) => {
        console.log('onSubmit', newPassword);
        e.preventDefault();

        if (newPassword.length < 10 || newPassword.length > 20) {
            alert('비밀번호를 10 ~ 20 자리로 입력해주세요');
            newPasswordRef.current.focus();
            return;
        }
        if (newPassword !== newChkPassword) {
            alert('새로운 비밀번호가 서로 일치하지 않습니다');
            newPassword.current.focus();
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

        // 유효성 통과 후
        // fetch();
        onModify();
    };

    // 한글 정규식
    const korChk = (str) => /[ㄱ-ㅎ|ㅏ-ㅣ|가-힣]/.test(str);

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
                    {readMode ? (
                        <>
                            <table className="type2 txt_left">
                                <colgroup>
                                    <col width="200px" />
                                    <col width="*" />
                                </colgroup>
                                <tbody>
                                    <tr>
                                        <th>아이디</th>
                                        <td>{email}</td>
                                    </tr>
                                    <tr>
                                        <th>비밀번호</th>
                                        <td>
                                            &#8226;&#8226;&#8226;&#8226;&#8226;&#8226;&#8226;&#8226;&#8226;&#8226;
                                        </td>
                                    </tr>
                                    <tr>
                                        <th>이름</th>
                                        <td>{name}</td>
                                    </tr>
                                    <tr>
                                        <th>휴대전화 번호</th>
                                        <td>{phone}</td>
                                    </tr>
                                    <tr>
                                        <th>주소</th>
                                        <td>{address}</td>
                                    </tr>
                                </tbody>
                            </table>
                            <div className="btn_center martop_40">
                                <button
                                    className="blue_btn w_200 big"
                                    onClick={onModify}
                                >
                                    회원 정보 수정
                                </button>
                                <button className="white_btn w_100">
                                    회원 탈퇴
                                </button>
                            </div>
                        </>
                    ) : (
                        <>
                            <form onSubmit={onSubmit} autoComplete="off">
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
                                                    name="password"
                                                    minLength={10}
                                                    maxLength={20}
                                                    value={password}
                                                    onChange={onInput}
                                                />
                                                <input
                                                    type="password"
                                                    className="w_full martop_8"
                                                    placeholder="새 비밀번호"
                                                    name="newPassword"
                                                    minLength={10}
                                                    maxLength={20}
                                                    value={newPassword}
                                                    onChange={onInput}
                                                    ref={newPasswordRef}
                                                />
                                                <input
                                                    type="password"
                                                    className="w_full martop_8"
                                                    placeholder="새 비밀번호 재입력"
                                                    minLength={10}
                                                    maxLength={20}
                                                    name="newChkPassword"
                                                    value={newChkPassword}
                                                    onChange={onInput}
                                                />
                                                <p className="grey_tag martop_4">
                                                    ※ 10 ~ 20자의 영문 소문자,
                                                    숫자 및 특수문자 모두 사용
                                                    가능
                                                </p>
                                            </td>
                                        </tr>
                                        <tr>
                                            <th>이름</th>
                                            <td>
                                                <input
                                                    type="text"
                                                    className="w_full"
                                                    name="name"
                                                    minLength={2}
                                                    maxLength={10}
                                                    value={name}
                                                    onChange={onInput}
                                                    ref={nameRef}
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
                                                    name="phone"
                                                    maxLength={11}
                                                    value={phone}
                                                    onChange={onInput}
                                                    ref={phoneRef}
                                                />
                                            </td>
                                        </tr>
                                        <tr>
                                            <th>주소</th>
                                            <td>
                                                <input
                                                    type="text"
                                                    className="w_full"
                                                    name="address"
                                                    value={address}
                                                    onChange={onInput}
                                                    ref={addressRef}
                                                />
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                                <div className="btn_center martop_40">
                                    <button
                                        type="submit"
                                        className="blue_btn w_200 big"
                                    >
                                        회원 정보 저장
                                    </button>
                                    <button
                                        className="white_btn w_100"
                                        onClick={onModify}
                                        type="button"
                                    >
                                        취소
                                    </button>
                                </div>
                            </form>
                        </>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Mypage;
