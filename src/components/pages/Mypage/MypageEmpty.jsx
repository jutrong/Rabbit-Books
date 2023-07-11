import updateImg from '../../../assets/images/img_tbu.png';

const MypageEmpty = () => {
    return (
        <div className="main_container_wrap">
            <div className="update_box">
                <img src={updateImg} alt="추후 업데이트 예정입니다" />
                <p>추후 업데이트 예정입니다</p>
            </div>
        </div>
    );
};
export default MypageEmpty;
