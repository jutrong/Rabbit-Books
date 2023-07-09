const setLocalStorage = (key, value) => {
    localStorage.setItem(key, value);
};

const getLocalStorage = (key) => {
    return localStorage.getItem(key);
};

const removeLocalStorage = (key) => {
    localStorage.removeItem(key);
};

// 로그인 시 아이디 저장을 체크했을 경우 이메일(아이디) 저장
export const setSaveId = (value) => setLocalStorage('loginId', value);

// 로그인 페이지 접근 시 저장된 이메일(아이디) 호출
export const getSaveId = () => getLocalStorage('loginId');

// 회원가입 시 입력한 이름 저장
export const setSaveJoinName = (value) => setLocalStorage('joinName', value);

// 회원가입 완료 후 이름 호출
export const getSaveJoinName = () => getLocalStorage('joinName');

// 회원가입 완료 후 일회성 사용을 위해 이름 삭제
export const removeSaveJoinName = () => removeLocalStorage('joinName');
