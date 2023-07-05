import { useState } from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    // 서비스 메뉴
    const [serviceMenus] = useState([
        { name: '회원 가입', target: '#', class: 'col_blue' },
        { name: '로그인', target: '#', class: '' },
        { name: '고객센터', target: '#', class: '' },
    ]);

    return (
        <header>
            <div className="con_wrap">
                <div className="service_menu">
                    <ul>
                        {serviceMenus.map((menu, i) => (
                            <li key={i}>
                                <Link to={menu.target} className={menu.class}>
                                    {menu.name}
                                </Link>
                            </li>
                        ))}
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
                                {CreateGnbMenus()}
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

const CreateGnbMenus = () => {
    const [gnbMenus] = useState([
        {
            id: 'korBooks',
            gnbCategory: '국내도서',
            target: '#',
            menus: [
                { name: '소설', target: '#' },
                { name: '시/에세이', target: '#' },
                { name: '인문', target: '#' },
                { name: '가정/육아', target: '#' },
                { name: '요리', target: '#' },
                { name: '건강', target: '#' },
                { name: '취미/실용/스포츠', target: '#' },
                { name: '경제/경영', target: '#' },
                { name: '자기계발', target: '#' },
                { name: '정치/사회', target: '#' },
                { name: '역사/문화', target: '#' },
                { name: '종교', target: '#' },
                { name: '예술/대중문화', target: '#' },
                { name: '중/고등참고서', target: '#' },
                { name: '기술/공학', target: '#' },
                { name: '외국어', target: '#' },
                { name: '과학', target: '#' },
                { name: '취업/수험서', target: '#' },
                { name: '여행', target: '#' },
                { name: '컴퓨터/IT', target: '#' },
                { name: '잡지', target: '#' },
                { name: '청소년', target: '#' },
                { name: '초등참고서', target: '#' },
                { name: '유아(0~7세)', target: '#' },
                { name: '어린이(초등)', target: '#' },
                { name: '만화', target: '#' },
                { name: '대학교재', target: '#' },
                { name: '한국소개도서', target: '#' },
                { name: '토끼오리지널', target: '#' },
            ],
        },
        {
            id: 'westernBooks',
            gnbCategory: '서양도서',
            target: '#',
            menus: [
                { name: '문학', target: '#' },
                { name: '취미/실용/여행', target: '#' },
                { name: '생활/요리/건강', target: '#' },
                { name: '예술/건축', target: '#' },
                { name: '인문/사회', target: '#' },
                { name: '경제/경영', target: '#' },
                { name: '과학/기술', target: '#' },
                { name: '어린이ELT', target: '#' },
                { name: '유아/아동/청소년', target: '#' },
                { name: '한국관련도서', target: '#' },
                { name: '문구/멀티/비도서', target: '#' },
                { name: 'ELT/수험서', target: '#' },
                { name: '프랑스도서', target: '#' },
                { name: '독일도서', target: '#' },
                { name: '스페인도서', target: '#' },
                { name: '기타도서', target: '#' },
                { name: '교재', target: '#' },
            ],
        },
    ]);

    const renderGnb = () => {
        const categorys = [];
        const per = 11;
        for (let i = 0; i < gnbMenus.length; i++) {
            const { id, gnbCategory, menus, target } = gnbMenus[i];
            const menusArr = [];
            for (let j = 0; j < menus.length; j += per) {
                const sublist = menus.slice(j, j + per);
                const listItems = sublist.map((item, idx) => (
                    <li key={idx}>
                        <Link to={item.target}>{item.name}</Link>
                    </li>
                ));
                menusArr.push(
                    <ul key={id + j} className="gnb_thumbnail">
                        {listItems}
                    </ul>,
                );
            }
            categorys.push(
                <li key={id}>
                    <Link to={target}>{gnbCategory}</Link>
                    <div className={i === 0 ? 'sub_menu active' : 'sub_menu'}>
                        {menusArr}
                    </div>
                </li>,
            );
        }
        return categorys;
    };

    return <>{renderGnb()}</>;
};
