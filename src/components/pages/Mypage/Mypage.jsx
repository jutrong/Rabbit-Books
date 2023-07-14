import './MyPage.scss';
import { useEffect, useState } from 'react';
import MypageUser from './MypageUser';
import MypageEmpty from './MypageEmpty';
import MypageOrder from './MypageOrder';
import { useNavigate, useParams } from 'react-router-dom';
import { getSaveToken } from '../../../utils';

const Mypage = () => {
    const navigate = useNavigate();
    const getToken = getSaveToken();
    const { tab } = useParams();
    const [selectTab, setSelectTab] = useState(0);
    const onTabSelect = (num) => {
        setSelectTab(num);
    };
    useEffect(() => {
        if (!getToken) navigate('/');
    }, [navigate, getToken]);
    useEffect(() => {
        setSelectTab(Number(tab));
    }, [tab]);
    const [tabMenu] = useState([
        { id: 0, text: '회원 정보' },
        { id: 1, text: '주문·배송 조회' },
        { id: 2, text: '내 문의 조회' },
        { id: 3, text: '포인트 조회' },
        { id: 4, text: '배송지 관리' },
    ]);

    if (!getToken) {
        return null;
    }

    return (
        <div className="mypage_container con_wrap">
            <div className="mypage_status">
                <ul>
                    <li>
                        <em className="rank">회원 등급</em>
                        <strong>일반</strong>
                    </li>
                    <li>
                        <em className="order">주문·배송 건수</em>
                        <strong>30</strong>
                    </li>
                    <li>
                        <em className="qa">내 문의 건수</em>
                        <strong>3</strong>
                    </li>
                    <li>
                        <em className="payment">총 주문 금액 (월)</em>
                        <strong>
                            3,500,000 <span>원</span>
                        </strong>
                    </li>
                    <li>
                        <em className="point">적립 포인트</em>
                        <strong>
                            10,500 <span>P</span>
                        </strong>
                    </li>
                </ul>
            </div>

            <ul className="tab_menu_type3 clear">
                {tabMenu.map((menu) => (
                    <li
                        key={menu.id}
                        onClick={() => onTabSelect(menu.id)}
                        className={selectTab === menu.id ? 'active' : ''}
                    >
                        <a>{menu.text}</a>
                    </li>
                ))}
            </ul>

            <div className="main_container">
                {selectTab === 0 ? (
                    <MypageUser />
                ) : selectTab === 1 ? (
                    <MypageOrder />
                ) : (
                    <MypageEmpty />
                )}
            </div>
        </div>
    );
};

export default Mypage;
