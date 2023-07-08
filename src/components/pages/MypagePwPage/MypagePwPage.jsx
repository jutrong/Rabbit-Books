import './MypagePwPage.scss';

const MypagePw = () => {
    return (
        <div className="cart_password con_wrap">
            <div className="cart_password_box">
                <strong>비밀번호 확인</strong>
                <div className="cart_password_txt">
                    <p>
                        <span>박*나</span>
                        님의 회원정보를 안전하게 보호하기 위해 <br />
                        비밀번호를 한번 더 확인해 주세요.
                    </p>
                    <input type="password" className="w_full martop_24" />
                </div>
                <div className="btn_center martop_24">
                    <button type="button" className="blue_btn w_120">
                        확인
                    </button>
                </div>
            </div>
        </div>
    );
};

export default MypagePw;
