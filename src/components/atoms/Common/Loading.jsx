import './Loading.scss';

const Loading = () => {
    return (
        <>
            <div className="dimLayer"></div>
            <div className="loading">
                <div className="loading_bar"></div>
                <div className="loading_text">정보를 불러오는 중 입니다...</div>
            </div>
        </>
    );
};

export default Loading;
