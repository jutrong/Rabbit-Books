export const SERVER_URL =
    import.meta.env.VITE_SERVER_URL || 'http://kdt-sw-5-team05.elicecoding.com';
const LOGIN_ID = 'loginId';
const JOIN_NAME = 'joinName';
const LOGIN_TOKEN = 'token';
const BASKET_KEY = 'cart';

// 장바구니 아이템 넣기
export const setCartItems = (items, quantity = 1) => {
    items.quantity = quantity; // 기본적으로 1개씩 담긴다.
    const { name } = items;
    const cartArr = getCartItems(); // 기존에 담긴 장바구니 호출
    const isData = cartArr.find((book) => book.name === name);
    if (isData) {
        // 기존에 담아둔 책이 있으면 수량만 추가
        const newCart = cartArr.map((book) =>
            book.name === name
                ? { ...book, quantity: book.quantity + quantity }
                : book,
        );
        localStorage.setItem(BASKET_KEY, JSON.stringify(newCart)); // 저장
    } else {
        // 기존에 담아둔 책이 없으면 새로 추가
        cartArr.push(items); // 기존에 담긴 장바구니에 아이템 추가
        localStorage.setItem(BASKET_KEY, JSON.stringify(cartArr)); // 저장
    }
};

// 장바구니 아이템 가져오기
export const getCartItems = () => {
    const json = localStorage.getItem(BASKET_KEY); // 장바구니 아이템 localstorage 호출
    return json ? JSON.parse(json) : []; // 장바구니가 비었으면 빈 배열 return
};

// 장바구니 아이템 지우기
export const removeCartItems = () => localStorage.removeItem(BASKET_KEY);

// 로그인 시 아이디 저장을 체크했을 경우 이메일(아이디) 저장
export const setSaveId = (value) => localStorage.setItem(LOGIN_ID, value);

// 로그인 페이지 접근 시 저장된 이메일(아이디) 호출
export const getSaveId = () => localStorage.getItem(LOGIN_ID);

// 로그인 시 아이디 저장을 체크 해제 한 경우 이메일(아이디) 삭제
export const removeSaveId = () => localStorage.removeItem(LOGIN_ID);

// 로그인 시 jwt 토큰을 로컬스토리지에 저장
export const setSaveToken = (jwt) => {
    const EXPIRE_TIME = 1000 * 60 * 60; // 만료시간 1시간
    const obj = {
        token: jwt,
        expire: Date.now() + EXPIRE_TIME,
    };
    localStorage.setItem(LOGIN_TOKEN, JSON.stringify(obj));
};

// 토큰 가져오기(ex.로그인/로그아웃 체크 용)
export const getSaveToken = () => {
    const json = localStorage.getItem(LOGIN_TOKEN);
    if (json) {
        const obj = JSON.parse(json);
        if (Date.now() > obj.expire) {
            return '';
        } else {
            return obj.token;
        }
    } else {
        return '';
    }
};

// 로그아웃 시 jwt 토큰을 로컬스토리지에 삭제
export const removeToken = () => localStorage.removeItem(LOGIN_TOKEN);

// 회원가입 시 입력한 이름 저장
export const setSaveJoinName = (value) =>
    localStorage.setItem(JOIN_NAME, value);

// 회원가입 완료 후 이름 호출
export const getSaveJoinName = () => localStorage.getItem(JOIN_NAME);

// 회원가입 완료 후 일회성 사용을 위해 이름 삭제
export const removeSaveJoinName = () => localStorage.removeItem(JOIN_NAME);

// 공통으로 사용 하는 fetch함수(PUT요청)
export const putFetch = async (url, body) => {
    const response = await fetch(url, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json; charset=UTF-8',
            authorization: `token ${getSaveToken()}`,
        },
        body: JSON.stringify(body),
    });
    return await response.json();
};

// 공통으로 사용 하는 fetch함수(GET요청)
export const getFetch = async (url) => {
    const response = await fetch(url, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json; charset=UTF-8',
            authorization: `token ${getSaveToken()}`,
        },
    });
    return await response.json();
};

// 공통으로 사용 하는 fetch함수(POST요청)
export const postFetch = async (url, body) => {
    const response = await fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json; charset=UTF-8',
        },
        body: JSON.stringify(body), // body의 데이터 유형은 반드시 "Content-Type" 헤더와 일치해야 함
    });
    return await response.json();
};

// 공통으로 사용 하는 fetch함수(DELETE요청)
export const deleteFetch = async (url) => {
    const response = await fetch(url, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json; charset=UTF-8',
            authorization: `token ${getSaveToken()}`,
        },
    });
    return await response.json();
};

// 한글 정규식
export const korChk = (str) => /[ㄱ-ㅎ|ㅏ-ㅣ|가-힣]/.test(str);

// 이메일 정규식
export const emailChk = (email) => {
    // eslint가 정규식을 제대로 확인을 못하는 것 같음... 더 쉽고 간편한 정규식 찾으면 변경 예정...
    const emailRegex =
        /^(([^<>()\[\].,;:\s@"]+(\.[^<>()\[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/i;
    return emailRegex.test(email);
};

/**
 * 가격과 할인률을 입력하면 계산되어 return
 * @param {number} price
 * @param {number} per
 * @returns
 */
export const disCount = (price, per = 10) => {
    return Number.isInteger(Number(price))
        ? Math.floor(price - price / per)
        : price;
};

/**
 * 한국 화폐 표기법(세자리마다 콤마)으로 return
 * 1000000 -> 1,000,000
 * @param {number} price
 * @returns
 */
export const priceFormat = (price) => {
    return Number.isInteger(Number(price))
        ? price.toLocaleString('ko-KR')
        : price;
};
