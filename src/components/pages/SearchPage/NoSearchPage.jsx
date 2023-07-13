import './SearchPage.scss';
import noSearchBg from '../../../assets/images/no_search_bg.png';

const NoSearch = ({ keyword }) => {
    return (
        <div className="no_search">
            <strong className="search_title">
                &#39;<em>{keyword}</em>&#39;에 대한 검색 결과가 없습니다.
            </strong>
            <img src={noSearchBg} alt="검색 결과 없음" />
        </div>
    );
};

export default NoSearch;
