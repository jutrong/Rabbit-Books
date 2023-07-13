import { useState } from 'react';
import mookImg1 from '../../../assets/images/mook1.jpg';
import mookImg2 from '../../../assets/images/mook2.jpg';
import mookImg3 from '../../../assets/images/mook3.jpg';
import mookImg4 from '../../../assets/images/mook4.jpg';
import mookImg5 from '../../../assets/images/mook5.jpg';
import mookImg6 from '../../../assets/images/mook6.jpg';
import mookImg7 from '../../../assets/images/mook7.jpg';
import mookImg8 from '../../../assets/images/mook8.jpg';
import mookImg9 from '../../../assets/images/mook9.jpg';
import mookImg10 from '../../../assets/images/mook10.jpg';
import mookImg11 from '../../../assets/images/mook11.jpg';
import mookImg12 from '../../../assets/images/mook12.jpg';

const Mook = () => {
    const [slideBookDatas] = useState([
        { imgSrc: mookImg1, target: '#' },
        { imgSrc: mookImg2, target: '#' },
        { imgSrc: mookImg3, target: '#' },
        { imgSrc: mookImg4, target: '#' },
        { imgSrc: mookImg5, target: '#' },
        { imgSrc: mookImg6, target: '#' },
        { imgSrc: mookImg7, target: '#' },
        { imgSrc: mookImg8, target: '#' },
        { imgSrc: mookImg9, target: '#' },
        { imgSrc: mookImg10, target: '#' },
        { imgSrc: mookImg11, target: '#' },
        { imgSrc: mookImg12, target: '#' },
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
                                                src={slide.imgSrc}
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
                                                src={slide.imgSrc}
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
