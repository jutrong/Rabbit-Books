const Header = () => {
    return (
        <header>
            <div className="con_wrap">
                <div className="service_menu">
                    <ul>
                        <li>
                            <a href="HeaderPage#none" className="col_blue">
                                회원 가입
                            </a>
                        </li>
                        <li>
                            <a href="HeaderPage#none">로그인</a>
                        </li>
                        <li>
                            <a href="HeaderPage#none">고객센터</a>
                        </li>
                    </ul>
                </div>
                <div className="header_menu">
                    <h1 className="main_logo">
                        <a href="HeaderPage#none">
                            <img
                                src="/src/assets/images/rabbit.png"
                                alt="로고"
                            />
                            <p>
                                토끼
                                <br />
                                책방
                            </p>
                        </a>
                    </h1>

                    <div className="inp_search_wrap">
                        <input type="text" placeholder="상품명만 검색 가능" />
                        <button type="button" className="search_btn">
                            <span className="hide">상품명 검색</span>
                        </button>
                    </div>

                    <ul className="move_list">
                        <li className="basket">
                            <a href="HeaderPage#none"></a>
                        </li>
                        <li className="my">
                            <a href="HeaderPage#none"></a>
                        </li>
                        <li className="delivery">
                            <a href="HeaderPage#none"></a>
                        </li>
                    </ul>
                </div>
            </div>

            <div className="gnb_menu">
                <ul className="gnb_bar con_wrap">
                    <li>
                        <button type="button" className="gnb category">
                            카테고리
                        </button>
                        <div className="sub_nav">
                            <ul className="depth01 hover_thumb_menu">
                                <li className="">
                                    <a href="HeaderPage#none">국내도서</a>
                                    <div className="sub_menu active">
                                        <ul className="gnb_thumbnail">
                                            <li>
                                                <a href="HeaderPage#none">소설</a>
                                            </li>
                                            <li>
                                                <a href="HeaderPage#none">시/에세이</a>
                                            </li>
                                            <li>
                                                <a href="HeaderPage#none">인문</a>
                                            </li>
                                            <li>
                                                <a href="HeaderPage#none">가정/육아</a>
                                            </li>
                                            <li>
                                                <a href="HeaderPage#none">요리</a>
                                            </li>
                                            <li>
                                                <a href="HeaderPage#none">건강</a>
                                            </li>
                                            <li>
                                                <a href="HeaderPage#none">
                                                    취미/실용/스포츠
                                                </a>
                                            </li>
                                            <li>
                                                <a href="HeaderPage#none">경제/경영</a>
                                            </li>
                                            <li>
                                                <a href="HeaderPage#none">자기계발</a>
                                            </li>
                                            <li>
                                                <a href="HeaderPage#none">정치/사회</a>
                                            </li>
                                            <li>
                                                <a href="HeaderPage#none">역사/문화</a>
                                            </li>
                                        </ul>
                                        <ul className="gnb_thumbnail">
                                            <li>
                                                <a href="HeaderPage#none">종교</a>
                                            </li>
                                            <li>
                                                <a href="HeaderPage#none">
                                                    예술/대중문화
                                                </a>
                                            </li>
                                            <li>
                                                <a href="HeaderPage#none">
                                                    중/고등참고서
                                                </a>
                                            </li>
                                            <li>
                                                <a href="HeaderPage#none">기술/공학</a>
                                            </li>
                                            <li>
                                                <a href="HeaderPage#none">외국어</a>
                                            </li>
                                            <li>
                                                <a href="HeaderPage#none">과학</a>
                                            </li>
                                            <li>
                                                <a href="HeaderPage#none">취업/수험서</a>
                                            </li>
                                            <li>
                                                <a href="HeaderPage#none">여행</a>
                                            </li>
                                            <li>
                                                <a href="HeaderPage#none">컴퓨터/IT</a>
                                            </li>
                                            <li>
                                                <a href="HeaderPage#none">잡지</a>
                                            </li>
                                            <li>
                                                <a href="HeaderPage#none">청소년</a>
                                            </li>
                                        </ul>
                                        <ul className="gnb_thumbnail">
                                            <li>
                                                <a href="HeaderPage#none">초등참고서</a>
                                            </li>
                                            <li>
                                                <a href="HeaderPage#none">유아(0~7세)</a>
                                            </li>
                                            <li>
                                                <a href="HeaderPage#none">어린이(초등)</a>
                                            </li>
                                            <li>
                                                <a href="HeaderPage#none">만화</a>
                                            </li>
                                            <li>
                                                <a href="HeaderPage#none">대학교재</a>
                                            </li>
                                            <li>
                                                <a href="HeaderPage#none">한국소개도서</a>
                                            </li>
                                            <li>
                                                <a href="HeaderPage#none">토끼오리지널</a>
                                            </li>
                                        </ul>
                                    </div>
                                </li>
                                <li className="">
                                    <a href="HeaderPage#none">서양도서</a>
                                    <div className="sub_menu">
                                        <ul className="gnb_thumbnail">
                                            <li>
                                                <a href="HeaderPage#none">
                                                    서양도서 소메뉴~
                                                </a>
                                            </li>
                                            <li>
                                                <a href="HeaderPage#none">서양에세이</a>
                                            </li>
                                            <li>
                                                <a href="HeaderPage#none">서양</a>
                                            </li>
                                            <li>
                                                <a href="HeaderPage#none">서양/육아</a>
                                            </li>
                                            <li>
                                                <a href="HeaderPage#none">서양</a>
                                            </li>
                                            <li>
                                                <a href="HeaderPage#none">서양</a>
                                            </li>
                                            <li>
                                                <a href="HeaderPage#none">
                                                    서양/실용/스포츠
                                                </a>
                                            </li>
                                            <li>
                                                <a href="HeaderPage#none">서양/경영</a>
                                            </li>
                                            <li>
                                                <a href="HeaderPage#none">서양계발</a>
                                            </li>
                                            <li>
                                                <a href="HeaderPage#none">서양/사회</a>
                                            </li>
                                            <li>
                                                <a href="HeaderPage#none">역사/문화</a>
                                            </li>
                                        </ul>
                                        <ul className="gnb_thumbnail">
                                            <li>
                                                <a href="HeaderPage#none">종교</a>
                                            </li>
                                            <li>
                                                <a href="HeaderPage#none">
                                                    예술/대중문화
                                                </a>
                                            </li>
                                            <li>
                                                <a href="HeaderPage#none">
                                                    중/고등참고서
                                                </a>
                                            </li>
                                            <li>
                                                <a href="HeaderPage#none">기술/공학</a>
                                            </li>
                                            <li>
                                                <a href="HeaderPage#none">외국어</a>
                                            </li>
                                            <li>
                                                <a href="HeaderPage#none">과학</a>
                                            </li>
                                            <li>
                                                <a href="HeaderPage#none">취업/수험서</a>
                                            </li>
                                            <li>
                                                <a href="HeaderPage#none">여행</a>
                                            </li>
                                            <li>
                                                <a href="HeaderPage#none">컴퓨터/IT</a>
                                            </li>
                                            <li>
                                                <a href="HeaderPage#none">잡지</a>
                                            </li>
                                            <li>
                                                <a href="HeaderPage#none">청소년</a>
                                            </li>
                                        </ul>
                                        <ul className="gnb_thumbnail">
                                            <li>
                                                <a href="HeaderPage#none">초등참고서</a>
                                            </li>
                                            <li>
                                                <a href="HeaderPage#none">유아(0~7세)</a>
                                            </li>
                                            <li>
                                                <a href="HeaderPage#none">어린이(초등)</a>
                                            </li>
                                            <li>
                                                <a href="HeaderPage#none">만화</a>
                                            </li>
                                            <li>
                                                <a href="HeaderPage#none">대학교재</a>
                                            </li>
                                            <li>
                                                <a href="HeaderPage#none">한국소개도서</a>
                                            </li>
                                            <li>
                                                <a href="HeaderPage#none">토끼오리지널</a>
                                            </li>
                                        </ul>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </li>
                    <li>
                        <button type="button" className="gnb">
                            신간
                        </button>
                    </li>
                    <li>
                        <button type="button" className="gnb">
                            베스트
                        </button>
                    </li>
                    <li>
                        <button type="button" className="gnb">
                            이벤트
                        </button>
                    </li>
                    <li>
                        <button type="button" className="gnb">
                            이달의 책
                        </button>
                    </li>
                    <li>
                        <button type="button" className="gnb">
                            할인 혜택
                        </button>
                    </li>
                </ul>
            </div>
        </header>
    );
};

export default Header;
