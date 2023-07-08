import { useState } from 'react';

const Mook = () => {
    const PREFIX_SRC = 'https://contents.kyobobook.co.kr/sih/fit-in/458x0/pdt/';
    const [slideBookDatas] = useState([
        { imgSrc: '3904000356228.jpg', target: '#' },
        { imgSrc: '9791190109178.jpg', target: '#' },
        { imgSrc: '3904000351094.jpg', target: '#' },
        { imgSrc: '9788970414201.jpg', target: '#' },
        { imgSrc: '9791197488665.jpg', target: '#' },
        { imgSrc: '3904000345864.jpg', target: '#' },
        { imgSrc: '3904000342375.jpg', target: '#' },
        { imgSrc: '3904000357744.jpg', target: '#' },
        { imgSrc: '9791198108517.jpg', target: '#' },
        { imgSrc: '9791160360516.jpg', target: '#' },
        { imgSrc: '9791191645231.jpg', target: '#' },
        { imgSrc: '3904000346502.jpg', target: '#' },
    ]);

    const [animation, setAnimation] = useState(true);
    const onStop = () => setAnimation(false);
    const onRun = () => setAnimation(true);

    return (
        <section className="marquee_section">
            <h2 className="con_wrap">이 계절의 무크지</h2>
            <div className="list_container">
                <ul className="slider_wrapper">
                    <div className="marquee-wrapper">
                        <div className="js-marquee">
                            <div
                                className={
                                    animation
                                        ? 'slider original'
                                        : 'slider original stopped'
                                }
                                onMouseEnter={onStop}
                                onMouseLeave={onRun}
                            >
                                {slideBookDatas.map((slide, i) => (
                                    <li
                                        key={i}
                                        className={
                                            i % 2 === 0 ? 'big' : 'small'
                                        }
                                    >
                                        <div className="today_img">
                                            <img
                                                src={PREFIX_SRC + slide.imgSrc}
                                                alt="책 이미지"
                                            />
                                        </div>
                                    </li>
                                ))}
                            </div>
                            <div
                                className={
                                    animation
                                        ? 'slider clone'
                                        : 'slider clone stopped'
                                }
                                onMouseEnter={onStop}
                                onMouseLeave={onRun}
                            >
                                {slideBookDatas.map((slide, i) => (
                                    <li
                                        key={i}
                                        className={
                                            i % 2 === 0 ? 'big' : 'small'
                                        }
                                    >
                                        <div className="today_img">
                                            <img
                                                src={PREFIX_SRC + slide.imgSrc}
                                                alt="책 이미지"
                                            />
                                        </div>
                                    </li>
                                ))}
                            </div>
                        </div>
                    </div>
                </ul>
            </div>
        </section>
    );
};

export default Mook;
