import { useState } from 'react';
import classnames from 'classnames';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.scss';
import LoginPage from './components/pages/LoginPage/LoginPage.jsx';

export default function App() {
    // const [count, setCount] = useState(0);

    return (
        <>
            <LoginPage />
            {/*<div>*/}
            {/*  <a href="https://vitejs.dev" target="_blank" rel="noreferrer">*/}
            {/*    <img src={viteLogo} className="logo" alt="Vite logo" />*/}
            {/*  </a>*/}
            {/*  <a href="https://react.dev" target="_blank" rel="noreferrer">*/}
            {/*    <img src={reactLogo} className="logo react" alt="React logo" />*/}
            {/*  </a>*/}
            {/*</div>*/}
            {/*<h1>Vite + React 여러분 파이팅ㅁㄴㅇㅁㄴㅇ!</h1>*/}
            {/*<div className={classnames('card')}>*/}
            {/*  <button onClick={() => setCount((count) => count + 1)}>*/}
            {/*    count is {count}*/}
            {/*  </button>*/}
            {/*  <p>*/}
            {/*    Edit <code>src/App.jsx</code> and save to test HMR*/}
            {/*  </p>*/}
            {/*</div>*/}
            {/*<p className="read-the-docs">*/}
            {/*  Click on the Vite and React logos to learn more*/}
            {/*</p>*/}
        </>
    )
}
