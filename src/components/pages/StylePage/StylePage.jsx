const Style = () => {
    return (
        <>
            <div className="con_wrap">
                <h2 className="title martop_20">button</h2>
                <div className="martop_10">
                    <button className="black_btn w_276">활성</button>
                    <button className="blue_btn w_276">활성</button>
                    <button className="blue_btn w_276 disabled">비활성</button>
                    <button className="white_btn w_276">활성</button>

                    <br />
                    <br />

                    <button className="black_btn big w_100">활성</button>
                    <button className="blue_btn big w_100">활성</button>
                    <button className="blue_btn big w_100 disabled">
                        비활성
                    </button>

                    <button className="black_btn small w_64">활성</button>
                    <button className="blue_btn small w_64">활성</button>
                    <button className="blue_btn small w_64 disabled">
                        비활성
                    </button>

                    <br />
                    <br />

                    <div className="increase_box">
                        <button
                            type="button"
                            id="minusBtn"
                            className="minus_btn"
                        >
                            <i></i>
                        </button>
                        <input type="number" id="quantity" value="0" />
                        <button type="button" id="plusBtn" className="plus_btn">
                            <i></i>
                        </button>
                    </div>
                </div>

                <h2 className="title martop_20">input / select</h2>
                <div className="martop_10">
                    <input
                        type="text"
                        className="w_276"
                        placeholder="default"
                    />
                    <input
                        type="text"
                        className="w_276"
                        placeholder="disabled"
                        disabled
                    />

                    <div className="inp_search_wrap">
                        <input
                            type="text"
                            className="w_276"
                            placeholder="제목, 내용, 작성자 검색가능"
                        />
                        <button type="button" className="search_btn marleft_4">
                            <span className="hide">검색</span>
                        </button>
                    </div>

                    <select className="select w_156">
                        <option value="0">select box</option>
                        <option value="1">select option 1</option>
                        <option value="2">select option 2</option>
                        <option value="3">select option 3</option>
                    </select>

                    <br />

                    <p>데이트피커 추후 구현</p>
                    <div className="custom_date w_156">
                        <input
                            type="text"
                            className="date w_full"
                            id="datepickerToggle"
                            placeholder="2021-09-01"
                            readOnly
                        />
                    </div>
                    <span className="tilde">~</span>
                    <div className="custom_date w_156">
                        <input
                            type="text"
                            className="date w_full"
                            id="datepickerToggle2"
                            placeholder="2021-09-01"
                            readOnly
                        />
                    </div>
                </div>

                <h2 className="title martop_20">check / radio</h2>
                <div className="martop_10">
                    <input
                        type="checkbox"
                        className="ch_check hide"
                        id="ipChk1"
                        checked
                    />
                    <label htmlFor="ipChk1" className="label">
                        선택
                    </label>

                    <input
                        type="checkbox"
                        className="ch_check hide"
                        id="ipChk2"
                    />
                    <label htmlFor="ipChk2" className="label marleft_10">
                        미선택
                    </label>

                    <input
                        type="checkbox"
                        className="ch_check hide"
                        id="ipChk3"
                        disabled
                    />
                    <label htmlFor="ipChk3" className="label marleft_10">
                        비활성화
                    </label>
                </div>

                <div className="martop_10">
                    <input
                        type="radio"
                        name="inpRadio"
                        className="ch_radio hide"
                        id="inpRadio1"
                        checked
                    />
                    <label htmlFor="inpRadio1" className="label">
                        선택
                    </label>

                    <input
                        type="radio"
                        name="inpRadio"
                        className="ch_radio hide"
                        id="inpRadio2"
                    />
                    <label htmlFor="inpRadio2" className="label">
                        미선택
                    </label>

                    <input
                        type="radio"
                        name="inpRadio"
                        className="ch_radio hide"
                        id="inpRadio3"
                        disabled
                    />
                    <label htmlFor="inpRadio3" className="label">
                        비활성화
                    </label>

                    <input
                        type="radio"
                        name="inpRadio2"
                        className="ch_radio hide"
                        id="inpRadio4"
                        checked
                        disabled
                    />
                    <label htmlFor="inpRadio4" className="label">
                        비활성화
                    </label>
                </div>

                <h2 className="title martop_20">pagination</h2>
                <div className="paging txt_center clear martop_20">
                    <ul>
                        <li>
                            <a href="" className="paging_first"></a>
                        </li>
                        <li>
                            <a href="" className="paging_prev"></a>
                        </li>
                        <li className="on">
                            <a href="" className="paging_num">
                                1
                            </a>
                        </li>
                        <li>
                            <a href="" className="paging_num">
                                2
                            </a>
                        </li>
                        <li>
                            <a href="" className="paging_num">
                                3
                            </a>
                        </li>
                        <li>
                            <a href="" className="paging_num">
                                4
                            </a>
                        </li>
                        <li>
                            <a href="" className="paging_num">
                                5
                            </a>
                        </li>
                        <li>
                            <a href="" className="paging_num">
                                6
                            </a>
                        </li>
                        <li>
                            <a href="" className="paging_num">
                                7
                            </a>
                        </li>
                        <li>
                            <a href="" className="paging_num">
                                8
                            </a>
                        </li>
                        <li>
                            <a href="" className="paging_num">
                                9
                            </a>
                        </li>
                        <li>
                            <a href="" className="paging_num">
                                10
                            </a>
                        </li>
                        <li>
                            <a href="" className="paging_next"></a>
                        </li>
                        <li>
                            <a href="" className="paging_last"></a>
                        </li>
                    </ul>
                </div>

                <h2 className="title martop_20">table type1</h2>
                <table className="type1 txt_left4">
                    <colgroup>
                        <col width="60px" />
                        <col width="80px" />
                        <col width="160px" />
                        <col width="*" />
                        <col width="160px" />
                        <col width="160px" />
                        <col width="160px" />
                    </colgroup>
                    <thead>
                        <tr>
                            <th>
                                <input
                                    type="checkbox"
                                    name="inpChk"
                                    className="ch_check hide allcheck"
                                    id="inpChk1"
                                />
                                <label
                                    htmlFor="inpChk1"
                                    className="label single"
                                ></label>
                            </th>
                            <th>번호</th>
                            <th>문의유형</th>
                            <th>제목</th>
                            <th>작성자</th>
                            <th>작성일자</th>
                            <th>답변상태</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>
                                <input
                                    type="checkbox"
                                    name="inpChk"
                                    className="ch_check hide"
                                    id="inpChk2"
                                />
                                <label
                                    htmlFor="inpChk2"
                                    className="label single"
                                ></label>
                            </td>
                            <td>10</td>
                            <td>주문/결제</td>
                            <td className="ellipsis lock">
                                <a href="#none">
                                    제목 예시 텍스트 입니다.제목 예시 텍스트
                                    입니다.제목 예시 텍스트 입니다.
                                </a>
                            </td>
                            <td>서부원</td>
                            <td>22-03-12</td>
                            <td>답변 전</td>
                        </tr>
                        <tr>
                            <td>
                                <input
                                    type="checkbox"
                                    name="inpChk"
                                    className="ch_check hide"
                                    id="inpChk3"
                                />
                                <label
                                    htmlFor="inpChk3"
                                    className="label single"
                                ></label>
                            </td>
                            <td>9</td>
                            <td>주문/결제</td>
                            <td className="ellipsis">
                                <a href="#none">제목 예시 텍스트 입니다.</a>
                            </td>
                            <td>서부원</td>
                            <td>22-03-12</td>
                            <td>답변 완료</td>
                        </tr>
                        <tr>
                            <td>
                                <input
                                    type="checkbox"
                                    name="inpChk"
                                    className="ch_check hide"
                                    id="inpChk4"
                                />
                                <label
                                    htmlFor="inpChk4"
                                    className="label single"
                                ></label>
                            </td>
                            <td>8</td>
                            <td>주문/결제</td>
                            <td className="ellipsis lock">
                                <a href="#none">제목 예시 텍스트 입니다.</a>
                            </td>
                            <td>서부원</td>
                            <td>22-03-12</td>
                            <td>답변 완료</td>
                        </tr>
                        <tr>
                            <td>
                                <input
                                    type="checkbox"
                                    name="inpChk"
                                    className="ch_check hide"
                                    id="inpChk5"
                                />
                                <label
                                    htmlFor="inpChk5"
                                    className="label single"
                                ></label>
                            </td>
                            <td>7</td>
                            <td>주문/결제</td>
                            <td className="ellipsis lock">
                                <a href="#none">제목 예시 텍스트 입니다.</a>
                            </td>
                            <td>서부원</td>
                            <td>22-03-12</td>
                            <td>답변 완료</td>
                        </tr>
                        <tr>
                            <td>
                                <input
                                    type="checkbox"
                                    name="inpChk"
                                    className="ch_check hide"
                                    id="inpChk6"
                                />
                                <label
                                    htmlFor="inpChk6"
                                    className="label single"
                                ></label>
                            </td>
                            <td>6</td>
                            <td>주문/결제</td>
                            <td className="ellipsis lock">
                                <a href="#none">제목 예시 텍스트 입니다.</a>
                            </td>
                            <td>서부원</td>
                            <td>22-03-12</td>
                            <td>답변 완료</td>
                        </tr>
                        <tr>
                            <td>
                                <input
                                    type="checkbox"
                                    name="inpChk"
                                    className="ch_check hide"
                                    id="inpChk7"
                                />
                                <label
                                    htmlFor="inpChk7"
                                    className="label single"
                                ></label>
                            </td>
                            <td>5</td>
                            <td>주문/결제</td>
                            <td className="ellipsis lock">
                                <a href="#none">제목 예시 텍스트 입니다.</a>
                            </td>
                            <td>서부원</td>
                            <td>22-03-12</td>
                            <td>답변 완료</td>
                        </tr>
                        <tr>
                            <td>
                                <input
                                    type="checkbox"
                                    name="inpChk"
                                    className="ch_check hide"
                                    id="inpChk8"
                                />
                                <label
                                    htmlFor="inpChk8"
                                    className="label single"
                                ></label>
                            </td>
                            <td>4</td>
                            <td>주문/결제</td>
                            <td className="ellipsis lock">
                                <a href="#none">제목 예시 텍스트 입니다.</a>
                            </td>
                            <td>서부원</td>
                            <td>22-03-12</td>
                            <td>답변 완료</td>
                        </tr>
                        <tr>
                            <td>
                                <input
                                    type="checkbox"
                                    name="inpChk"
                                    className="ch_check hide"
                                    id="inpChk9"
                                />
                                <label
                                    htmlFor="inpChk9"
                                    className="label single"
                                ></label>
                            </td>
                            <td>3</td>
                            <td>주문/결제</td>
                            <td className="ellipsis lock">
                                <a href="#none">제목 예시 텍스트 입니다.</a>
                            </td>
                            <td>서부원</td>
                            <td>22-03-12</td>
                            <td>답변 완료</td>
                        </tr>
                        <tr>
                            <td>
                                <input
                                    type="checkbox"
                                    name="inpChk"
                                    className="ch_check hide"
                                    id="inpChk10"
                                />
                                <label
                                    htmlFor="inpChk10"
                                    className="label single"
                                ></label>
                            </td>
                            <td>2</td>
                            <td>주문/결제</td>
                            <td className="ellipsis lock">
                                <a href="#none">제목 예시 텍스트 입니다.</a>
                            </td>
                            <td>서부원</td>
                            <td>22-03-12</td>
                            <td>답변 완료</td>
                        </tr>
                        <tr>
                            <td>
                                <input
                                    type="checkbox"
                                    name="inpChk"
                                    className="ch_check hide"
                                    id="inpChk11"
                                />
                                <label
                                    htmlFor="inpChk11"
                                    className="label single"
                                ></label>
                            </td>
                            <td>1</td>
                            <td>주문/결제</td>
                            <td className="ellipsis lock">
                                <a href="#none">제목 예시 텍스트 입니다.</a>
                            </td>
                            <td>서부원</td>
                            <td>22-03-12</td>
                            <td>답변 완료</td>
                        </tr>
                    </tbody>
                </table>

                <h2 className="title martop_20">table type2</h2>
                <table className="type2 txt_left1">
                    <colgroup>
                        <col width="200px" />
                        <col width="*" />
                    </colgroup>
                    <tbody>
                        <tr>
                            <th>문의유형</th>
                            <td>
                                <input
                                    type="radio"
                                    name="inquiry"
                                    className="ch_radio hide"
                                    id="inquiryRadio1"
                                    checked
                                />
                                <label
                                    htmlFor="inquiryRadio1"
                                    className="label"
                                >
                                    주문/결제
                                </label>

                                <input
                                    type="radio"
                                    name="inquiry"
                                    className="ch_radio hide"
                                    id="inquiryRadio2"
                                />
                                <label
                                    htmlFor="inquiryRadio2"
                                    className="label marleft_40"
                                >
                                    상품
                                </label>

                                <input
                                    type="radio"
                                    name="inquiry"
                                    className="ch_radio hide"
                                    id="inquiryRadio3"
                                />
                                <label
                                    htmlFor="inquiryRadio3"
                                    className="label marleft_40"
                                >
                                    취소/반품/환불
                                </label>

                                <input
                                    type="radio"
                                    name="inquiry"
                                    className="ch_radio hide"
                                    id="inquiryRadio4"
                                />
                                <label
                                    htmlFor="inquiryRadio4"
                                    className="label marleft_40"
                                >
                                    배송
                                </label>

                                <input
                                    type="radio"
                                    name="inquiry"
                                    className="ch_radio hide"
                                    id="inquiryRadio5"
                                />
                                <label
                                    htmlFor="inquiryRadio5"
                                    className="label marleft_40"
                                >
                                    회원
                                </label>

                                <input
                                    type="radio"
                                    name="inquiry"
                                    className="ch_radio hide"
                                    id="inquiryRadio6"
                                />
                                <label
                                    htmlFor="inquiryRadio6"
                                    className="label marleft_40"
                                >
                                    기타
                                </label>
                            </td>
                        </tr>
                        <tr>
                            <th>제목</th>
                            <td>
                                <input
                                    type="text"
                                    className="w_full"
                                    placeholder="제목, 내용, 작성자 검색가능"
                                />
                            </td>
                        </tr>
                        <tr>
                            <th>내용</th>
                            <td>
                                <textarea
                                    className="w_full re_none h_300 scroll"
                                    placeholder="제목, 내용, 작성자 검색가능"
                                ></textarea>
                                <span className="grey_tag right martop_8">
                                    0 / 2000자 이내 입력
                                </span>
                            </td>
                        </tr>
                        <tr>
                            <th>비밀 글 설정</th>
                            <td>
                                <input
                                    type="password"
                                    className="w_200"
                                    value="1234"
                                />
                                <span className="grey_tag marleft_12">
                                    ※ 4자리 숫자입력
                                </span>
                            </td>
                        </tr>
                    </tbody>
                </table>

                <h2 className="title martop_20">popup</h2>
                <div className="martop_10">
                    <button className="blue_btn w_100 modal_btn">modal</button>
                </div>

                <h2 className="title martop_20">tab type1</h2>
                <ul className="tab_menu_type1 clear">
                    <li className="active">
                        <button data-target="type1_01">상품 상세정보</button>
                    </li>
                    <li>
                        <button data-target="type1_02">
                            배송/취소/반품/환불 정보
                        </button>
                    </li>
                </ul>
                <div className="tab_con_type1">
                    <div className="type1_01">상품 상세정보 입니다.</div>
                    <div className="type1_02 dis_none">
                        배송/취소/반품/환불 정보 입니다.
                    </div>
                </div>

                <h2 className="title martop_20">tab type2</h2>
                <ul className="tab_menu_type2 clear">
                    <li className="active">
                        <button data-target="type2_01" className="qa">
                            고객문의
                        </button>
                    </li>
                    <li>
                        <button data-target="type2_02" className="notice">
                            공지사항
                        </button>
                    </li>
                    <li>
                        <button data-target="type2_03" className="faq">
                            FAQ
                        </button>
                    </li>
                </ul>
                <div className="tab_con_type2">
                    <div className="type2_01">고객문의 입니다.</div>
                    <div className="type2_02 dis_none">공지사항 입니다.</div>
                    <div className="type2_03 dis_none">FAQ 입니다.</div>
                </div>

                <h2 className="title martop_20">tab type3</h2>
                <ul className="tab_menu_type3 clear">
                    <li className="active">
                        <button data-target="type3_01">전체</button>
                    </li>
                    <li>
                        <button data-target="type3_02">주문·결제</button>
                    </li>
                    <li>
                        <button data-target="type3_03">배송문의</button>
                    </li>
                    <li>
                        <button data-target="type3_04">상품문의</button>
                    </li>
                    <li>
                        <button data-target="type3_05">취소·반품·환불</button>
                    </li>
                    <li>
                        <button data-target="type3_06">회원·기타</button>
                    </li>
                </ul>
                <div className="tab_con_type3">
                    <div className="type3_01">전체 입니다.</div>
                    <div className="type3_02 dis_none">주문·결제 입니다.</div>
                    <div className="type3_03 dis_none">배송문의 입니다.</div>
                    <div className="type3_04 dis_none">상품문의 입니다.</div>
                    <div className="type3_05 dis_none">
                        취소·반품·환불 입니다.
                    </div>
                    <div className="type3_06 dis_none">회원·기타 입니다.</div>
                </div>
            </div>

            <div className="modal_wrap">
                <div className="modal_section w_400">
                    <div className="modal_header">
                        <strong className="modal_title">title</strong>
                        <button
                            type="button"
                            className="x_btn close_modal"
                        ></button>
                    </div>
                    <div className="modal_contents">
                        <p>텍스트텍스트텍스트</p>
                        <input type="text" className="w_full martop_24" />
                        <span className="col_blue martop_10 dis_inblock">
                            * alert text
                        </span>
                    </div>
                    <div className="btn_center">
                        <button type="button" className="blue_btn w_120">
                            확인
                        </button>
                        <button
                            type="button"
                            className="black_btn w_120 close_modal"
                        >
                            닫기
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Style;
