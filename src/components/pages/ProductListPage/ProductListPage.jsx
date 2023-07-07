import './ProductListPage.scss';
import cart from '../../../assets/images/icons/icon_gnb_basket.png';
import wish from '../../../assets/images/icons/icon_wish.png';
import wishActive from '../../../assets/images/icons/icon_wish_active.png';
import book1 from '../../../assets/images/book1.jpg';
import book2 from '../../../assets/images/book2.jpeg';
import book3 from '../../../assets/images/book3.jpeg';
import book4 from '../../../assets/images/book4.jpeg';
import book5 from '../../../assets/images/book5.jpeg';
import book6 from '../../../assets/images/book6.jpeg';
import book7 from '../../../assets/images/book7.jpg';
import book8 from '../../../assets/images/book8.jpeg';
import book9 from '../../../assets/images/book9.jpeg';
import book10 from '../../../assets/images/book10.jpeg';
import book11 from '../../../assets/images/book11.jpeg';
import book12 from '../../../assets/images/book12.jpeg';

const ProductList = () => {
    return (
        <div className="productlist">
            <div className="list_content">
                <div className="list_left">
                    <h3>
                        <a href="#">국내도서</a>
                    </h3>
                    <div>
                        <h4>
                            <a href="#">컴퓨터공학</a>
                        </h4>
                        <ul>
                            <li>
                                <a href="#">컴퓨터공학/과학개론</a>
                            </li>
                            <li>
                                <a href="#">소프트웨어공학</a>
                            </li>
                            <li>
                                <a href="#">정보통신공학</a>
                            </li>
                            <li>
                                <a href="#">컴퓨터구조</a>
                            </li>
                            <li>
                                <a href="#">마이크로프로세서</a>
                            </li>
                            <li>
                                <a href="#">운영체제론</a>
                            </li>
                            <li>
                                <a href="#">자료구조/알고리즘</a>
                            </li>
                            <li>
                                <a href="#">인공지능</a>
                            </li>
                            <li>
                                <a href="#">블록체인</a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="list_right">
                    <header>
                        <p>컴퓨터 공학</p>
                        <select name="select w_156" id="bookFilter">
                            <option>최신순</option>
                            <option>판매량순</option>
                            <option>높은가격순</option>
                            <option>낮은가격순</option>
                        </select>
                    </header>
                    <div className="boundary">
                        <div>
                            <input
                                type="checkbox"
                                className="ch_check hide"
                                id="ipChk1"
                            />
                            <label htmlFor="ipChk1" className="label">
                                전체 선택
                            </label>
                        </div>
                        <div>
                            <a href="#">
                                <img src={cart} alt="장바구니" />
                                <p>장바구니</p>
                            </a>
                        </div>
                    </div>
                    <div className="book_list">
                        <div className="items">
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
                            <a href="#">
                                <img src={book2} alt="책이미지1" id="book1" />
                            </a>
                            <div className="book_content">
                                <p className="book_title">
                                    자바스크립트 완벽 가이드
                                </p>
                                <p className="author">
                                    데이비드 플래너건 · 인사이트
                                </p>
                                <div>
                                    <p className="price">37,800원</p>
                                    <button className="active">
                                        <img src={wish} alt="찜하기" />
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className="items">
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
                            <a href="#">
                                <img src={book1} alt="책이미지1" id="book1" />
                            </a>
                            <div className="book_content">
                                <p className="book_title">
                                    자바스크립트 완벽 가이드
                                </p>
                                <p className="author">
                                    데이비드 플래너건 · 인사이트
                                </p>
                                <div>
                                    <p className="price">37,800원</p>
                                    <button>
                                        <img src={wish} alt="찜하기" />
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className="items">
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
                            <a href="#">
                                <img src={book3} alt="책이미지1" id="book1" />
                            </a>
                            <div className="book_content">
                                <p className="book_title">
                                    자바스크립트 완벽 가이드
                                </p>
                                <p className="author">
                                    데이비드 플래너건 · 인사이트
                                </p>
                                <div>
                                    <p className="price">37,800원</p>
                                    <button>
                                        <img src={wish} alt="찜하기" />
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className="items">
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
                            <a href="#">
                                <img src={book4} alt="책이미지1" id="book1" />
                            </a>
                            <div className="book_content">
                                <p className="book_title">
                                    자바스크립트 완벽 가이드
                                </p>
                                <p className="author">
                                    데이비드 플래너건 · 인사이트
                                </p>
                                <div>
                                    <p className="price">37,800원</p>
                                    <button>
                                        <img src={wish} alt="찜하기" />
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className="items">
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
                            <a href="#">
                                <img src={book5} alt="책이미지1" id="book1" />
                            </a>
                            <div className="book_content">
                                <p className="book_title">
                                    자바스크립트 완벽 가이드
                                </p>
                                <p className="author">
                                    데이비드 플래너건 · 인사이트
                                </p>
                                <div>
                                    <p className="price">37,800원</p>
                                    <button>
                                        <img src={wish} alt="찜하기" />
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className="items">
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
                            <a href="#">
                                <img src={book6} alt="책이미지1" id="book1" />
                            </a>
                            <div className="book_content">
                                <p className="book_title">
                                    자바스크립트 완벽 가이드
                                </p>
                                <p className="author">
                                    데이비드 플래너건 · 인사이트
                                </p>
                                <div>
                                    <p className="price">37,800원</p>
                                    <button>
                                        <img src={wish} alt="찜하기" />
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className="items">
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
                            <a href="#">
                                <img src={book7} alt="책이미지1" id="book1" />
                            </a>
                            <div className="book_content">
                                <p className="book_title">
                                    자바스크립트 완벽 가이드
                                </p>
                                <p className="author">
                                    데이비드 플래너건 · 인사이트
                                </p>
                                <div>
                                    <p className="price">37,800원</p>
                                    <button>
                                        <img src={wish} alt="찜하기" />
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className="items">
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
                            <a href="#">
                                <img src={book8} alt="책이미지1" id="book1" />
                            </a>
                            <div className="book_content">
                                <p className="book_title">
                                    자바스크립트 완벽 가이드
                                </p>
                                <p className="author">
                                    데이비드 플래너건 · 인사이트
                                </p>
                                <div>
                                    <p className="price">37,800원</p>
                                    <button>
                                        <img src={wish} alt="찜하기" />
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className="items">
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
                            <a href="#">
                                <img src={book9} alt="책이미지1" id="book1" />
                            </a>
                            <div className="book_content">
                                <p className="book_title">
                                    자바스크립트 완벽 가이드
                                </p>
                                <p className="author">
                                    데이비드 플래너건 · 인사이트
                                </p>
                                <div>
                                    <p className="price">37,800원</p>
                                    <button>
                                        <img src={wish} alt="찜하기" />
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className="items">
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
                            <a href="#">
                                <img src={book10} alt="책이미지1" id="book1" />
                            </a>
                            <div className="book_content">
                                <p className="book_title">
                                    자바스크립트 완벽 가이드
                                </p>
                                <p className="author">
                                    데이비드 플래너건 · 인사이트
                                </p>
                                <div>
                                    <p className="price">37,800원</p>
                                    <button>
                                        <img src={wish} alt="찜하기" />
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className="items">
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
                            <a href="#">
                                <img src={book11} alt="책이미지1" id="book1" />
                            </a>
                            <div className="book_content">
                                <p className="book_title">
                                    자바스크립트 완벽 가이드
                                </p>
                                <p className="author">
                                    데이비드 플래너건 · 인사이트
                                </p>
                                <div>
                                    <p className="price">37,800원</p>
                                    <button>
                                        <img src={wish} alt="찜하기" />
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className="items">
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
                            <a href="#">
                                <img src={book12} alt="책이미지1" id="book1" />
                            </a>
                            <div className="book_content">
                                <p className="book_title">
                                    자바스크립트 완벽 가이드
                                </p>
                                <p className="author">
                                    데이비드 플래너건 · 인사이트
                                </p>
                                <div>
                                    <p className="price">37,800원</p>
                                    <button>
                                        <img src={wish} alt="찜하기" />
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="paging txt_center clear martop_20 pagenation">
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
                </div>
            </div>
        </div>
    );
};

export default ProductList;
