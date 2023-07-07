import './HomePage.scss';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import mainBanner1 from '../../../assets/images/main_banner1.webp';
import mainBanner2 from '../../../assets/images/main_banner2.webp';
import mainBanner3 from '../../../assets/images/main_banner3.webp';
import mainBanner4 from '../../../assets/images/main_banner4.webp';
import mainBanner5 from '../../../assets/images/main_banner5.webp';

import eventImg1 from '../../../assets/images/event1.png';
import eventImg2 from '../../../assets/images/event2.png';
import eventImg3 from '../../../assets/images/event3.png';
import eventImg4 from '../../../assets/images/event4.png';
import eventImg5 from '../../../assets/images/event5.png';
import eventImg6 from '../../../assets/images/event6.png';

import authorImg1 from '../../../assets/images/author1.jpg';
import authorImg2 from '../../../assets/images/author2.jpg';
import authorImg3 from '../../../assets/images/author3.png';
import authorImg4 from '../../../assets/images/author4.png';
import authorImg5 from '../../../assets/images/author5.webp';
import authorImg6 from '../../../assets/images/author6.jpg';
import authorImg7 from '../../../assets/images/author7.jpg';
import authorImg8 from '../../../assets/images/author8.webp';
import authorImg9 from '../../../assets/images/author9.jpg';

import { useRef } from 'react';
import Mook from './Mook';

const Home = () => {
    const slideSectionPrevBtn = useRef();
    const slideSectionNextBtn = useRef();

    const todaySectionPrevBtn = useRef();
    const todaySectionNextBtn = useRef();

    const authorSectionPrevBtn = useRef();
    const authorSectionNextBtn = useRef();

    return (
        <div className="home">
            <section className="slide_section">
                <Swiper
                    className="mainSwiper"
                    modules={[Autoplay, Pagination, Navigation]}
                    spaceBetween={0}
                    centeredSlides={true}
                    loop={true}
                    speed={1400}
                    autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
                    }}
                    pagination={{
                        clickable: true,
                    }}
                    onInit={(swiper) => {
                        swiper.params.navigation.prevEl =
                            slideSectionPrevBtn.current;
                        swiper.params.navigation.nextEl =
                            slideSectionNextBtn.current;
                        swiper.navigation.init();
                        swiper.navigation.update();
                    }}
                >
                    <SwiperSlide className="slide_black">
                        <div className="slide_container">
                            <div className="blur_bg"></div>
                            <img src={mainBanner1} alt="슬라이드 이미지" />
                            <div className="slide_txt">
                                <ul>
                                    <li>ORIGINAL</li>
                                    <li>대여</li>
                                </ul>
                                <strong>
                                    내일 일어날 일
                                    <br />
                                    내세에 일어날 일
                                </strong>
                                <p>우주라이크소설 SF 장르전</p>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className="slide_blue">
                        <div className="slide_container">
                            <div className="blur_bg"></div>
                            <img src={mainBanner2} alt="슬라이드 이미지" />
                            <div className="slide_txt">
                                <ul>
                                    <li>10%할인</li>
                                    <li>대여</li>
                                </ul>
                                <strong>
                                    불가능 범죄 전문
                                    <br />샘 호손 박사 컴백!
                                </strong>
                                <p>
                                    &#60;샘 호손 박사의 세번째 불가능
                                    사건집&#62; 출간
                                </p>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className="slide_pink">
                        <div className="slide_container">
                            <div className="blur_bg"></div>
                            <img src={mainBanner3} alt="슬라이드 이미지" />
                            <div className="slide_txt">
                                <ul>
                                    <li>NEW</li>
                                    <li>대여</li>
                                </ul>
                                <strong>
                                    MZ세대 그 이후,
                                    <br />뉴 트렌드에 대비하라!
                                </strong>
                                <p>&#60;새로운 인류 알파세대&#62; 대여 50%</p>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className="slide_green">
                        <div className="slide_container">
                            <div className="blur_bg"></div>
                            <img src={mainBanner4} alt="슬라이드 이미지" />
                            <div className="slide_txt">
                                <ul>
                                    <li>10%할인</li>
                                </ul>
                                <strong>
                                    공부왕 찐천재
                                    <br />
                                    홍진경 인생책
                                </strong>
                                <p>
                                    사는 모습은 다 달라도 우리는 누구나 스토너다
                                </p>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className="slide_purple">
                        <div className="slide_container">
                            <div className="blur_bg"></div>
                            <img src={mainBanner5} alt="슬라이드 이미지" />
                            <div className="slide_txt">
                                <ul>
                                    <li>세트</li>
                                    <li>대여</li>
                                </ul>
                                <strong>
                                    원작으로 먼저
                                    <br />
                                    만나는 류츠신 &#60;삼체&#62;
                                </strong>
                                <p>넷플릭스 공개 임박 기념 특가 세트전</p>
                            </div>
                        </div>
                    </SwiperSlide>
                </Swiper>

                <div className="swiper_nav">
                    <div
                        ref={slideSectionPrevBtn}
                        className="swiper_nav_prev"
                    ></div>
                    <div
                        ref={slideSectionNextBtn}
                        className="swiper_nav_next"
                    ></div>
                </div>
            </section>

            <section className="today_section con_wrap">
                <h2>오늘, 토끼의 발견!</h2>
                <Swiper
                    className="todaySwiper"
                    modules={[Navigation]}
                    slidesPerView={4}
                    spaceBetween={20}
                    onInit={(swiper) => {
                        swiper.params.navigation.prevEl =
                            todaySectionPrevBtn.current;
                        swiper.params.navigation.nextEl =
                            todaySectionNextBtn.current;
                        swiper.navigation.init();
                        swiper.navigation.update();
                    }}
                >
                    <SwiperSlide>
                        <div className="today_img">
                            <img
                                src="https://img.ridicdn.net/cover/734002510/xxlarge#1"
                                alt="책 이미지"
                            />
                        </div>
                        <em>에세이</em>
                        <strong>
                            나는 앞으로 몇 번의 보름달을 볼 수 있을까
                        </strong>
                        <p>류이치 사카모토 · 위즈덤하우스</p>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="today_img">
                            <img
                                src="https://img.ridicdn.net/cover/2066005932/xxlarge#1"
                                alt="책 이미지"
                            />
                        </div>
                        <em>추리/스릴러</em>
                        <strong>페퍼스 고스트</strong>
                        <p>이사카 고타로 · 소미북스</p>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="today_img">
                            <img
                                src="https://img.ridicdn.net/cover/1546001077/xxlarge#1"
                                alt="책 이미지"
                            />
                        </div>
                        <em>자연과학</em>
                        <strong>기후 책</strong>
                        <p>그레타 툰베리 · 김영사</p>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="today_img">
                            <img
                                src="https://img.ridicdn.net/cover/2155023408/xxlarge#1"
                                alt="책 이미지"
                            />
                        </div>
                        <em>성곤/삶의자세</em>
                        <strong>세이노의 가르침</strong>
                        <p>세이노 · 데이원</p>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="today_img">
                            <img
                                src="https://img.ridicdn.net/cover/1546001070/xxlarge#1"
                                alt="책 이미지"
                            />
                        </div>
                        <em>정치/사회</em>
                        <strong>총, 균, 쇠</strong>
                        <p>재레드 다이아몬드 · 김영사</p>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="today_img">
                            <img
                                src="https://img.ridicdn.net/cover/852000790/xxlarge#1"
                                alt="책 이미지"
                            />
                        </div>
                        <em>에세이</em>
                        <strong>아무튼, 여름</strong>
                        <p>김신회 · 제철소</p>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="today_img">
                            <img
                                src="https://img.ridicdn.net/cover/754038212/xxlarge#1"
                                alt="책 이미지"
                            />
                        </div>
                        <em>한국소설</em>
                        <strong>구의 증명</strong>
                        <p>최진영 · 은행나무</p>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="today_img">
                            <img
                                src="https://img.ridicdn.net/cover/745000210/xxlarge#1"
                                alt="책 이미지"
                            />
                        </div>
                        <em>인문</em>
                        <strong>도파민네이션</strong>
                        <p>애나 렘키 · 흐름출판</p>
                    </SwiperSlide>
                </Swiper>
                <div className="swiper_nav">
                    <div
                        ref={todaySectionPrevBtn}
                        className="swiper_nav_prev"
                    ></div>
                    <div
                        ref={todaySectionNextBtn}
                        className="swiper_nav_next"
                    ></div>
                </div>
            </section>

            <section className="banner_section con_wrap">
                <img
                    src="https://contents.kyobobook.co.kr/display/i_1200_150_471e118f2e9d48f3ac71c37b91b5f631.jpg"
                    alt="배너 이미지"
                />
            </section>

            {/* <section className="marquee_section">
                <h2 className="con_wrap">이 계절의 무크지</h2>
                <div
                    className="list_container"
                    onMouseEnter={onStop}
                    onMouseLeave={onRun}
                >
                    <Swiper
                        className="marqueeSwiper"
                        ref={swiperRef}
                        modules={[Autoplay]}
                        loop={true}
                        loopedSlides={4}
                        allowTouchMove={false}
                        observer={true}
                        observeParents={true}
                        slidesPerView={'auto'}
                        spaceBetween={80}
                        speed={6000}
                        autoplay={{
                            delay: 1,
                            disableOnInteraction: false,
                            pauseOnMouseEnter: true,
                        }}
                    >
                        <SwiperSlide className="big">
                            <div className="today_img">
                                <img
                                    src="https://contents.kyobobook.co.kr/sih/fit-in/458x0/pdt/3904000356228.jpg"
                                    alt="책 이미지"
                                />
                            </div>
                        </SwiperSlide>
                        <SwiperSlide className="small">
                            <div className="today_img">
                                <img
                                    src="https://contents.kyobobook.co.kr/sih/fit-in/458x0/pdt/9791190109178.jpg"
                                    alt="책 이미지"
                                />
                            </div>
                        </SwiperSlide>
                        <SwiperSlide className="big">
                            <div className="today_img">
                                <img
                                    src="https://contents.kyobobook.co.kr/sih/fit-in/458x0/pdt/3904000351094.jpg"
                                    alt="책 이미지"
                                />
                            </div>
                        </SwiperSlide>
                        <SwiperSlide className="small">
                            <div className="today_img">
                                <img
                                    src="https://contents.kyobobook.co.kr/sih/fit-in/458x0/pdt/9788970414201.jpg"
                                    alt="책 이미지"
                                />
                            </div>
                        </SwiperSlide>
                        <SwiperSlide className="big">
                            <div className="today_img">
                                <img
                                    src="https://contents.kyobobook.co.kr/sih/fit-in/458x0/pdt/9791197488665.jpg"
                                    alt="책 이미지"
                                />
                            </div>
                        </SwiperSlide>
                        <SwiperSlide className="small">
                            <div className="today_img">
                                <img
                                    src="https://contents.kyobobook.co.kr/sih/fit-in/458x0/pdt/3904000345864.jpg"
                                    alt="책 이미지"
                                />
                            </div>
                        </SwiperSlide>
                        <SwiperSlide className="big">
                            <div className="today_img">
                                <img
                                    src="https://contents.kyobobook.co.kr/sih/fit-in/458x0/pdt/3904000342375.jpg"
                                    alt="책 이미지"
                                />
                            </div>
                        </SwiperSlide>
                        <SwiperSlide className="small">
                            <div className="today_img">
                                <img
                                    src="https://contents.kyobobook.co.kr/sih/fit-in/458x0/pdt/3904000357744.jpg"
                                    alt="책 이미지"
                                />
                            </div>
                        </SwiperSlide>
                        <SwiperSlide className="big">
                            <div className="today_img">
                                <img
                                    src="https://contents.kyobobook.co.kr/sih/fit-in/458x0/pdt/9791198108517.jpg"
                                    alt="책 이미지"
                                />
                            </div>
                        </SwiperSlide>
                        <SwiperSlide className="small">
                            <div className="today_img">
                                <img
                                    src="https://contents.kyobobook.co.kr/sih/fit-in/458x0/pdt/9791160360516.jpg"
                                    alt="책 이미지"
                                />
                            </div>
                        </SwiperSlide>
                        <SwiperSlide className="big">
                            <div className="today_img">
                                <img
                                    src="https://contents.kyobobook.co.kr/sih/fit-in/458x0/pdt/9791191645231.jpg"
                                    alt="책 이미지"
                                />
                            </div>
                        </SwiperSlide>
                        <SwiperSlide className="small">
                            <div className="today_img">
                                <img
                                    src="https://contents.kyobobook.co.kr/sih/fit-in/458x0/pdt/3904000346502.jpg"
                                    alt="책 이미지"
                                />
                            </div>
                        </SwiperSlide>
                    </Swiper>
                </div>
            </section> */}
            <Mook />

            <section className="author_section con_wrap">
                <h2>이 달의 작가</h2>
                <Swiper
                    className="todaySwiper"
                    modules={[Navigation]}
                    slidesPerView={4}
                    spaceBetween={0}
                    onInit={(swiper) => {
                        swiper.params.navigation.prevEl =
                            authorSectionPrevBtn.current;
                        swiper.params.navigation.nextEl =
                            authorSectionNextBtn.current;
                        swiper.navigation.init();
                        swiper.navigation.update();
                    }}
                >
                    <SwiperSlide>
                        <div className="img_box">
                            <img src={authorImg1} alt="작가 이미지" />
                            <div className="img_hover">
                                <p>
                                    다시 올라올 수 있는 힘을 얻으려면
                                    <br />
                                    바닥을 디뎌야 하는 거야.
                                </p>
                            </div>
                        </div>
                        <p>베르나르 베르베르</p>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="img_box">
                            <img src={authorImg2} alt="작가 이미지" />
                            <div className="img_hover">
                                <p>
                                    인생과 그 자신이
                                    <br />
                                    일치하는 자가 얼마나 될까
                                    <br />삶 따로, 사람 따로, 운명 따로.
                                    <br /> 대부분은 그렇게 산다.
                                </p>
                            </div>
                        </div>
                        <p>정유정</p>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="img_box">
                            <img src={authorImg3} alt="작가 이미지" />
                            <div className="img_hover">
                                <p>
                                    나의 미래는 오래전에 <br />
                                    개봉한 맥주였다. <br />
                                    향과 알코올과 탄산이 다 날아간 <br />
                                    미적지근한 그 병에 뚜껑만 다시 닫아 <br />
                                    놓고서 남에게나 나에게나 <br />
                                    새것이라고 우겨대는 것 같았다.
                                </p>
                            </div>
                        </div>
                        <p>최진영</p>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="img_box">
                            <img src={authorImg4} alt="작가 이미지" />
                            <div className="img_hover">
                                <p>
                                    새는 알에서 나오기 위해 투쟁한다. <br />
                                    알은 새의 세계이다. <br />
                                    누구든지 태어나려고 하는 자는 <br />
                                    하나의 세계를 파괴하여야 한다. <br />
                                    새는 신을 향해 날아간다. <br />그 신의
                                    이름은 아브락사스이다.
                                </p>
                            </div>
                        </div>
                        <p>헤르만 헤세</p>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="img_box">
                            <img src={authorImg5} alt="작가 이미지" />
                            <div className="img_hover">
                                <p>
                                    삶의 의미를 찾아 헤매고 있다면 <br />
                                    그것은 삶이 아니다.
                                </p>
                            </div>
                        </div>
                        <p>알베르 카뮈</p>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="img_box">
                            <img src={authorImg6} alt="작가 이미지" />
                            <div className="img_hover">
                                <p>
                                    앞으로 앞으로 나가게 하지 말고, <br />
                                    멈춰 서서 생각하게 할 것. <br />
                                    그것뿐이야.
                                </p>
                            </div>
                        </div>
                        <p>무라카미 하루키</p>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="img_box">
                            <img src={authorImg7} alt="작가 이미지" />
                            <div className="img_hover">
                                <p>
                                    어느날 아침 그레고르 잠자가 뒤숭숭한 꿈에서
                                    깨어났을 때 자신이 지난 밤 <br />
                                    사이에 한 마리의 커다란 벌레로 <br />
                                    변한 것을 발견했다.
                                </p>
                            </div>
                        </div>
                        <p>프란츠 카프카</p>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="img_box">
                            <img src={authorImg8} alt="작가 이미지" />
                            <div className="img_hover">
                                <p>
                                    별 하나에 추억과, <br />별 하나에 사랑과,
                                    <br /> 별 하나에 쓸쓸함과, <br />별 하나에
                                    동경과, <br />별 하나에 시와, <br />별
                                    하나에 어머니, <br />
                                    어머니
                                </p>
                            </div>
                        </div>
                        <p>윤동주</p>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="img_box">
                            <img src={authorImg9} alt="작가 이미지" />
                            <div className="img_hover">
                                <p>
                                    지금 저에게는 행복도 불행도 없습니다. 모든
                                    것은 지나간다는 것.
                                </p>
                            </div>
                        </div>
                        <p>다자이 오사무</p>
                    </SwiperSlide>
                </Swiper>
                <div className="swiper_nav">
                    <div
                        ref={authorSectionPrevBtn}
                        className="swiper_nav_prev"
                    ></div>
                    <div
                        ref={authorSectionNextBtn}
                        className="swiper_nav_next"
                    ></div>
                </div>
            </section>

            <section className="event_section con_wrap">
                <h2 className="con_wrap">이벤트</h2>

                <ul>
                    <li>
                        <div className="event_box sky">
                            <div className="event_txt">
                                <p>
                                    영화 플래시 개봉 기념
                                    <br />
                                    원작 도서 구매 이벤트
                                </p>
                                <span>
                                    이벤트 도서 구매 시<br />
                                    플래시 자수 에코백 증정!
                                </span>
                            </div>
                            <img src={eventImg1} alt="이벤트 이미지" />
                        </div>
                    </li>
                    <li>
                        <div className="event_box salmon">
                            <div className="event_txt">
                                <p>
                                    영화 플래시 개봉 기념
                                    <br />
                                    원작 도서 구매 이벤트
                                </p>
                                <span>
                                    이벤트 도서 구매 시<br />
                                    플래시 자수 에코백 증정!
                                </span>
                            </div>
                            <img src={eventImg2} alt="이벤트 이미지" />
                        </div>
                    </li>
                    <li>
                        <div className="event_box lavender">
                            <div className="event_txt">
                                <p>
                                    영화 플래시 개봉 기념
                                    <br />
                                    원작 도서 구매 이벤트
                                </p>
                                <span>
                                    이벤트 도서 구매 시<br />
                                    플래시 자수 에코백 증정!
                                </span>
                            </div>
                            <img src={eventImg3} alt="이벤트 이미지" />
                        </div>
                    </li>
                    <li>
                        <div className="event_box yellow">
                            <div className="event_txt">
                                <p>
                                    영화 플래시 개봉 기념
                                    <br />
                                    원작 도서 구매 이벤트
                                </p>
                                <span>
                                    이벤트 도서 구매 시<br />
                                    플래시 자수 에코백 증정!
                                </span>
                            </div>
                            <img src={eventImg4} alt="이벤트 이미지" />
                        </div>
                    </li>
                    <li>
                        <div className="event_box pink">
                            <div className="event_txt">
                                <p>
                                    영화 플래시 개봉 기념
                                    <br />
                                    원작 도서 구매 이벤트
                                </p>
                                <span>
                                    이벤트 도서 구매 시<br />
                                    플래시 자수 에코백 증정!
                                </span>
                            </div>
                            <img src={eventImg5} alt="이벤트 이미지" />
                        </div>
                    </li>
                    <li>
                        <div className="event_box green">
                            <div className="event_txt">
                                <p>
                                    영화 플래시 개봉 기념
                                    <br />
                                    원작 도서 구매 이벤트
                                </p>
                                <span>
                                    이벤트 도서 구매 시<br />
                                    플래시 자수 에코백 증정!
                                </span>
                            </div>
                            <img src={eventImg6} alt="이벤트 이미지" />
                        </div>
                    </li>
                </ul>
            </section>

            <section className="ad_section con_wrap">
                <img
                    src="http://image.kyobobook.co.kr/newimages/adcenter/IMAC/creatives/2023/06/28/46833/WELCOMEMAIND.jpg"
                    alt="광고 배너"
                />
                <img
                    src="http://image.kyobobook.co.kr/newimages/adcenter/IMAC/creatives/2023/06/28/61856/2-5.jpg"
                    alt="광고 배너"
                />
            </section>
        </div>
    );
};

export default Home;
