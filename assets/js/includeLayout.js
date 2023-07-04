/**
 * 불필요한 공통 헤더 푸터 작업을 줄이기 위해 작성한 js입니다.
 * 공통으로 작성되는 레이아웃 header, footer부분을 강제 주입합니다.
 */
window.addEventListener("DOMContentLoaded", () => {
    const header = document.querySelector("header");
    const footer = document.querySelector("footer");
    if (!header) {
        console.warn("header태그가 없습니다.");
        return;
    }
    if (!footer) {
        console.warn("footer태그가 없습니다.");
        return;
    }
    header.innerHTML = headerDom;
    footer.innerHTML = footerDom;
    console.log("include");
});

const headerDom = `
            <div class="con_wrap">
                <div class="service_menu">
                    <ul>
                        <li>
                            <a href="#none" class="col_blue">회원 가입</a>
                        </li>
                        <li>
                            <a href="#none">로그인</a>
                        </li>
                        <li>
                            <a href="#none">고객센터</a>
                        </li>
                    </ul>
                </div>
                <div class="header_menu">
                    <h1 class="main_logo">
                        <a href="#none">
                            <img src="/assets/images/rabbit.png" alt="로고" />
                            <p>토끼<br />책방</p>
                        </a>
                    </h1>

                    <div class="inp_search_wrap">
                        <input type="text" placeholder="상품명만 검색 가능" />
                        <button type="button" class="search_btn">
                            <span class="hide">상품명 검색</span>
                        </button>
                    </div>

                    <ul class="move_list">
                        <li class="basket">
                            <a href="#none"></a>
                        </li>
                        <li class="my">
                            <a href="#none"></a>
                        </li>
                        <li class="delivery">
                            <a href="#none"></a>
                        </li>
                    </ul>
                    <!-- <div class="home_menu">
                        <ul class="portfolio_menu">
                            <li>
                                <a href="#none" class="packing">장바구니</a>
                            </li>
                            <li>
                                <a href="#none" class="order">마이페이지</a>
                            </li>
                            <li>
                                <a href="#none" class="portfolio">주문·배송 조회</a>
                            </li>
                        </ul>
                    </div> -->
                </div>
            </div>

            <!-- GNB -->
            <div class="gnb_menu">
                <ul class="gnb_bar con_wrap">
                    <li>
                        <button type="button" class="gnb category">카테고리</button>
                        <div class="sub_nav">
                            <ul class="depth01 hover_thumb_menu">
                                <li class="">
                                    <a href="#none">국내도서</a>
                                    <div class="sub_menu active">
                                        <ul class="gnb_thumbnail">
                                            <li>
                                                <a href="#none">소설</a>
                                            </li>
                                            <li>
                                                <a href="#none">시/에세이</a>
                                            </li>
                                            <li>
                                                <a href="#none">인문</a>
                                            </li>
                                            <li>
                                                <a href="#none">가정/육아</a>
                                            </li>
                                            <li>
                                                <a href="#none">요리</a>
                                            </li>
                                            <li>
                                                <a href="#none">건강</a>
                                            </li>
                                            <li>
                                                <a href="#none">취미/실용/스포츠</a>
                                            </li>
                                            <li>
                                                <a href="#none">경제/경영</a>
                                            </li>
                                            <li>
                                                <a href="#none">자기계발</a>
                                            </li>
                                            <li>
                                                <a href="#none">정치/사회</a>
                                            </li>
                                            <li>
                                                <a href="#none">역사/문화</a>
                                            </li>
                                        </ul>
                                        <ul class="gnb_thumbnail">
                                            <li>
                                                <a href="#none">종교</a>
                                            </li>
                                            <li>
                                                <a href="#none">예술/대중문화</a>
                                            </li>
                                            <li>
                                                <a href="#none">중/고등참고서</a>
                                            </li>
                                            <li>
                                                <a href="#none">기술/공학</a>
                                            </li>
                                            <li>
                                                <a href="#none">외국어</a>
                                            </li>
                                            <li>
                                                <a href="#none">과학</a>
                                            </li>
                                            <li>
                                                <a href="#none">취업/수험서</a>
                                            </li>
                                            <li>
                                                <a href="#none">여행</a>
                                            </li>
                                            <li>
                                                <a href="#none">컴퓨터/IT</a>
                                            </li>
                                            <li>
                                                <a href="#none">잡지</a>
                                            </li>
                                            <li>
                                                <a href="#none">청소년</a>
                                            </li>
                                        </ul>
                                        <ul class="gnb_thumbnail">
                                            <li>
                                                <a href="#none">초등참고서</a>
                                            </li>
                                            <li>
                                                <a href="#none">유아(0~7세)</a>
                                            </li>
                                            <li>
                                                <a href="#none">어린이(초등)</a>
                                            </li>
                                            <li>
                                                <a href="#none">만화</a>
                                            </li>
                                            <li>
                                                <a href="#none">대학교재</a>
                                            </li>
                                            <li>
                                                <a href="#none">한국소개도서</a>
                                            </li>
                                            <li>
                                                <a href="#none">토끼오리지널</a>
                                            </li>
                                        </ul>
                                    </div>
                                </li>
                                <li class="">
                                    <a href="#none">서양도서</a>
                                    <div class="sub_menu">
                                        <ul class="gnb_thumbnail">
                                            <li>
                                                <a href="#none">서양도서 소메뉴~</a>
                                            </li>
                                            <li>
                                                <a href="#none">서양에세이</a>
                                            </li>
                                            <li>
                                                <a href="#none">서양</a>
                                            </li>
                                            <li>
                                                <a href="#none">서양/육아</a>
                                            </li>
                                            <li>
                                                <a href="#none">서양</a>
                                            </li>
                                            <li>
                                                <a href="#none">서양</a>
                                            </li>
                                            <li>
                                                <a href="#none">서양/실용/스포츠</a>
                                            </li>
                                            <li>
                                                <a href="#none">서양/경영</a>
                                            </li>
                                            <li>
                                                <a href="#none">서양계발</a>
                                            </li>
                                            <li>
                                                <a href="#none">서양/사회</a>
                                            </li>
                                            <li>
                                                <a href="#none">역사/문화</a>
                                            </li>
                                        </ul>
                                        <ul class="gnb_thumbnail">
                                            <li>
                                                <a href="#none">종교</a>
                                            </li>
                                            <li>
                                                <a href="#none">예술/대중문화</a>
                                            </li>
                                            <li>
                                                <a href="#none">중/고등참고서</a>
                                            </li>
                                            <li>
                                                <a href="#none">기술/공학</a>
                                            </li>
                                            <li>
                                                <a href="#none">외국어</a>
                                            </li>
                                            <li>
                                                <a href="#none">과학</a>
                                            </li>
                                            <li>
                                                <a href="#none">취업/수험서</a>
                                            </li>
                                            <li>
                                                <a href="#none">여행</a>
                                            </li>
                                            <li>
                                                <a href="#none">컴퓨터/IT</a>
                                            </li>
                                            <li>
                                                <a href="#none">잡지</a>
                                            </li>
                                            <li>
                                                <a href="#none">청소년</a>
                                            </li>
                                        </ul>
                                        <ul class="gnb_thumbnail">
                                            <li>
                                                <a href="#none">초등참고서</a>
                                            </li>
                                            <li>
                                                <a href="#none">유아(0~7세)</a>
                                            </li>
                                            <li>
                                                <a href="#none">어린이(초등)</a>
                                            </li>
                                            <li>
                                                <a href="#none">만화</a>
                                            </li>
                                            <li>
                                                <a href="#none">대학교재</a>
                                            </li>
                                            <li>
                                                <a href="#none">한국소개도서</a>
                                            </li>
                                            <li>
                                                <a href="#none">토끼오리지널</a>
                                            </li>
                                        </ul>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </li>
                    <li>
                        <button type="button" class="gnb">신간</button>
                    </li>
                    <li>
                        <button type="button" class="gnb">베스트</button>
                    </li>
                    <li>
                        <button type="button" class="gnb">이벤트</button>
                    </li>
                    <li>
                        <button type="button" class="gnb">이달의 책</button>
                    </li>
                    <li>
                        <button type="button" class="gnb">할인 혜택</button>
                    </li>
                </ul>
            </div>
            <!-- // GNB -->
`;

const footerDom = `
                <!-- 푸터메뉴 -->
                <div class="footer_menu">
                    <div class="con_wrap">
                        <ul>
                            <li>
                                <a href="#none">회사소개</a>
                            </li>
                            <li>
                                <a href="#none">이용약관</a>
                            </li>
                            <li>
                                <a href="#none">개인정보처리방침</a>
                            </li>
							<li>
                                <a href="#none">제휴문의</a>
                            </li>
							<li>
                                <a href="#none">고객센터</a>
                            </li>
							<li>
                                <a>ⓒ 토끼책방.&nbsp;&nbsp;&nbsp;All Rights Reserved</a>
                            </li>
                        </ul>
                    </div>
                </div>
                <!-- // 푸터메뉴 -->
`;
