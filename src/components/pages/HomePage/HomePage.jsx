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
import { useRef } from 'react';

const Home = () => {
    const slideSectionPrevBtn = useRef();
    const slideSectionNextBtn = useRef();

    const todaySectionPrevBtn = useRef();
    const todaySectionNextBtn = useRef();

    return (
        <div className="home">
            <section className="slide_section">
                <Swiper
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
                    modules={[Autoplay, Pagination, Navigation]}
                    className="mainSwiper"
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
                    slidesPerView={4}
                    spaceBetween={20}
                    modules={[Navigation]}
                    className="todaySwiper"
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
