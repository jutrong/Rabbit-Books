import './SearchPage.scss';
import { useState } from 'react';
import NoSearch from './NoSearchPage';

const Search = () => {
    const [isData] = useState(true);
    return (
        <div className="search con_wrap">
            {isData ? (
                <div className="search_container">
                    <strong className="search_title">
                        &#39;<em>TEXT</em>&#39;에 대한 검색 결과
                        <span>(44)</span>
                    </strong>

                    <div className="related_txt">
                        <ul>
                            <li>
                                <span className="related_label">
                                    연관검색어
                                </span>
                            </li>
                            <li>
                                <a href="#">연관검색어1</a>
                            </li>
                            <li>
                                <a href="#">연관검색어2연관검색어2</a>
                            </li>
                            <li>
                                <a href="#">연관검색어3</a>
                            </li>
                            <li>
                                <a href="#">연관검색어4</a>
                            </li>
                        </ul>
                    </div>

                    <div className="search_box">
                        <div className="clear">
                            <select className="select w_156 right">
                                <option>정렬 선택</option>
                                <option>추천순</option>
                                <option>판매순</option>
                                <option>최신순</option>
                            </select>
                        </div>

                        <div className="table_box">
                            <table className="type1 txt_left2">
                                <colgroup>
                                    <col width="80px" />
                                    <col width="*" />
                                    <col width="240px" />
                                    <col width="240px" />
                                </colgroup>
                                <thead>
                                    <tr>
                                        <th>선택</th>
                                        <th>상품 정보</th>
                                        <th>배송 정보</th>
                                        <th>구매 하기</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>
                                            <input
                                                type="checkbox"
                                                name="inpChk"
                                                className="ch_check hide"
                                                id="inpChk1"
                                            />
                                            <label
                                                htmlFor="inpChk1"
                                                className="label single"
                                            ></label>
                                        </td>
                                        <td>
                                            <div className="book_info_box">
                                                <img
                                                    src="https://contents.kyobobook.co.kr/sih/fit-in/200x0/pdt/9791167901996.jpg"
                                                    alt="책 이미지"
                                                />
                                                <div className="book_info">
                                                    <ul className="book_tag_list">
                                                        <li>
                                                            <span className="sky">
                                                                오늘의 선택
                                                            </span>
                                                        </li>
                                                        <li>
                                                            <span className="green">
                                                                MD의 선택
                                                            </span>
                                                        </li>
                                                        <li>
                                                            <span className="orange">
                                                                이벤트
                                                            </span>
                                                        </li>
                                                    </ul>
                                                    <strong className="book_info_title">
                                                        매스커레이드 게임
                                                    </strong>
                                                    <p className="author">
                                                        히가시노 게이고 저자(글)
                                                        &#183; 양윤옥 번역
                                                    </p>
                                                    <p>
                                                        현대문학&#183; 2023년
                                                        06월 23일
                                                    </p>
                                                    <div className="pay">
                                                        <em>10%</em>
                                                        <strong>15,120</strong>
                                                        원<span>16,800원</span>
                                                    </div>
                                                    <span className="star_grade">
                                                        9.89
                                                    </span>
                                                </div>
                                            </div>
                                        </td>
                                        <td>
                                            <span className="speaker">
                                                내일 (7/8, 토)
                                            </span>
                                            도착 예정
                                        </td>
                                        <td>
                                            <button className="white_btn w_156">
                                                장바구니
                                            </button>
                                            <button className="blue_btn w_156 martop_10">
                                                바로구매
                                            </button>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <input
                                                type="checkbox"
                                                name="inpChk"
                                                className="ch_check hide"
                                                id="inpChk1"
                                            />
                                            <label
                                                htmlFor="inpChk1"
                                                className="label single"
                                            ></label>
                                        </td>
                                        <td>
                                            <div className="book_info_box">
                                                <img
                                                    src="https://contents.kyobobook.co.kr/sih/fit-in/200x0/pdt/9791167901996.jpg"
                                                    alt="책 이미지"
                                                />
                                                <div className="book_info">
                                                    <ul className="book_tag_list">
                                                        <li>
                                                            <span className="sky">
                                                                오늘의 선택
                                                            </span>
                                                        </li>
                                                        <li>
                                                            <span className="green">
                                                                MD의 선택
                                                            </span>
                                                        </li>
                                                        <li>
                                                            <span className="orange">
                                                                이벤트
                                                            </span>
                                                        </li>
                                                    </ul>
                                                    <strong className="book_info_title">
                                                        매스커레이드 게임
                                                    </strong>
                                                    <p className="author">
                                                        히가시노 게이고 저자(글)
                                                        &#183; 양윤옥 번역
                                                    </p>
                                                    <p>
                                                        현대문학&#183; 2023년
                                                        06월 23일
                                                    </p>
                                                    <div className="pay">
                                                        <em>10%</em>
                                                        <strong>15,120</strong>
                                                        원<span>16,800원</span>
                                                    </div>
                                                    <span className="star_grade">
                                                        9.89
                                                    </span>
                                                </div>
                                            </div>
                                        </td>
                                        <td>
                                            <span className="speaker">
                                                내일 (7/8, 토)
                                            </span>
                                            도착 예정
                                        </td>
                                        <td>
                                            <button className="white_btn w_156">
                                                장바구니
                                            </button>
                                            <button className="blue_btn w_156 martop_10">
                                                바로구매
                                            </button>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <input
                                                type="checkbox"
                                                name="inpChk"
                                                className="ch_check hide"
                                                id="inpChk1"
                                            />
                                            <label
                                                htmlFor="inpChk1"
                                                className="label single"
                                            ></label>
                                        </td>
                                        <td>
                                            <div className="book_info_box">
                                                <img
                                                    src="https://contents.kyobobook.co.kr/sih/fit-in/200x0/pdt/9791167901996.jpg"
                                                    alt="책 이미지"
                                                />
                                                <div className="book_info">
                                                    <ul className="book_tag_list">
                                                        <li>
                                                            <span className="sky">
                                                                오늘의 선택
                                                            </span>
                                                        </li>
                                                        <li>
                                                            <span className="green">
                                                                MD의 선택
                                                            </span>
                                                        </li>
                                                        <li>
                                                            <span className="orange">
                                                                이벤트
                                                            </span>
                                                        </li>
                                                    </ul>
                                                    <strong className="book_info_title">
                                                        매스커레이드 게임
                                                    </strong>
                                                    <p className="author">
                                                        히가시노 게이고 저자(글)
                                                        &#183; 양윤옥 번역
                                                    </p>
                                                    <p>
                                                        현대문학&#183; 2023년
                                                        06월 23일
                                                    </p>
                                                    <div className="pay">
                                                        <em>10%</em>
                                                        <strong>15,120</strong>
                                                        원<span>16,800원</span>
                                                    </div>
                                                    <span className="star_grade">
                                                        9.89
                                                    </span>
                                                </div>
                                            </div>
                                        </td>
                                        <td>
                                            <span className="speaker">
                                                내일 (7/8, 토)
                                            </span>
                                            도착 예정
                                        </td>
                                        <td>
                                            <button className="white_btn w_156">
                                                장바구니
                                            </button>
                                            <button className="blue_btn w_156 martop_10">
                                                바로구매
                                            </button>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <input
                                                type="checkbox"
                                                name="inpChk"
                                                className="ch_check hide"
                                                id="inpChk1"
                                            />
                                            <label
                                                htmlFor="inpChk1"
                                                className="label single"
                                            ></label>
                                        </td>
                                        <td>
                                            <div className="book_info_box">
                                                <img
                                                    src="https://contents.kyobobook.co.kr/sih/fit-in/200x0/pdt/9791167901996.jpg"
                                                    alt="책 이미지"
                                                />
                                                <div className="book_info">
                                                    <ul className="book_tag_list">
                                                        <li>
                                                            <span className="sky">
                                                                오늘의 선택
                                                            </span>
                                                        </li>
                                                        <li>
                                                            <span className="green">
                                                                MD의 선택
                                                            </span>
                                                        </li>
                                                        <li>
                                                            <span className="orange">
                                                                이벤트
                                                            </span>
                                                        </li>
                                                    </ul>
                                                    <strong className="book_info_title">
                                                        매스커레이드 게임
                                                    </strong>
                                                    <p className="author">
                                                        히가시노 게이고 저자(글)
                                                        &#183; 양윤옥 번역
                                                    </p>
                                                    <p>
                                                        현대문학&#183; 2023년
                                                        06월 23일
                                                    </p>
                                                    <div className="pay">
                                                        <em>10%</em>
                                                        <strong>15,120</strong>
                                                        원<span>16,800원</span>
                                                    </div>
                                                    <span className="star_grade">
                                                        9.89
                                                    </span>
                                                </div>
                                            </div>
                                        </td>
                                        <td>
                                            <span className="speaker">
                                                내일 (7/8, 토)
                                            </span>
                                            도착 예정
                                        </td>
                                        <td>
                                            <button className="white_btn w_156">
                                                장바구니
                                            </button>
                                            <button className="blue_btn w_156 martop_10">
                                                바로구매
                                            </button>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            ) : (
                <NoSearch />
            )}
        </div>
    );
};

export default Search;
