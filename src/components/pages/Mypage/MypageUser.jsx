import { useEffect, useRef, useState, useCallback } from 'react';
import {
    SERVER_URL,
    deleteFetch,
    getFetch,
    korChk,
    putFetch,
    removeToken,
} from '../../../utils';
import { useNavigate } from 'react-router-dom';

const MypageUser = () => {
    const navigate = useNavigate();
    const newPasswordRef = useRef();

    const nameRef = useRef();
    const phoneRef = useRef();
    const addressRef = useRef();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [newChkPassword, setNewChkPassword] = useState('');
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [address, setAddress] = useState('');

    // 페이지 접근시 로그인된 내 정보 가져오기
    const getMyInfo = useCallback(async () => {
        const json = await getFetch(`${SERVER_URL}/api/users/my-profile`);
        if (json?.error) {
            alert('로그아웃 되었습니다');
            navigate('/');
        } else {
            const { email, username: name, phone, address } = json;
            setEmail(email);
            setName(name);
            setPhone(phone);
            setAddress(address);
        }
    }, [navigate]);

    useEffect(() => {
        getMyInfo();
    }, [getMyInfo]);

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

    // 회원 정보 수정(Submit)
    const onSubmit = async (e) => {
        e.preventDefault();

        // 비밀번호 변경하는 경우 새로운 비밀번호 유효성 검증
        if (password) {
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
        }

        // 공통 유효성 검증
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

        // 공통으로 전송 요청 옵션
        const data = {
            email,
            username: name,
            address,
            phone,
        };

        // 비밀번호 변경하는 경우 옵션 추가
        if (password) {
            data.password = password;
            data.newPassword = newPassword;
        }
        // 유효성 통과 후
        const json = await putFetch(`${SERVER_URL}/api/users`, data);
        if (json?.error) {
            alert(
                '회원 정보 수정에 실패했습니다\n동일한 오류가 발생시 관리자에게 문의바랍니다',
            );
            console.warn(json.error);
        } else if (json) {
            alert('회원 정보가 수정되었습니다');
            onModify();
        } else {
            alert(
                '회원 정보 수정에 실패했습니다\n동일한 오류가 발생시 관리자에게 문의바랍니다',
            );
        }
    };

    // 회원 탈퇴 --- 테스트 필요
    const onRemove = async () => {
        const json = await deleteFetch(`${SERVER_URL}/api/auth/withdraw`);
        if (json?.error) {
            alert('회원 탈퇴가 정상적으로 진행되지 않았습니다');
            console.warn(json.error);
        } else if (json) {
            removeToken(); // 기존 로그인 토큰 삭제
            alert(
                '회원 탈퇴가 정상적으로 진행되었습니다\n그동안 이용해 주셔서 감사합니다',
            );
            navigate('/');
        } else {
            alert(
                '회원 탈퇴에 실패했습니다\n동일한 오류가 발생시 관리자에게 문의바랍니다',
            );
        }
    };

    return (
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
                        <button className="white_btn w_100" onClick={onRemove}>
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
                                    <td>{email}</td>
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
    );
};
export default MypageUser;
