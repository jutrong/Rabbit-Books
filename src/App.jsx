import { Routes, Route } from 'react-router-dom';
import Style from './components/pages/StylePage/StylePage';
import Home from './components/pages/HomePage/HomePage';
import Layout from './components/atoms/Layout/Layout.jsx';
import Login from './components/pages/LoginPage/LoginPage';
import List from './components/pages/ListPage/ListPage';
import Mypage from './components/pages/Mypage/Mypage';
import Join from './components/pages/JoinPage/JoinPage';
import JoinComplete from './components/pages/JoinCompletePage/JoinCompletePage';
import Order from './components/pages/OrderPage/OrderPage';
import Search from './components/pages/SearchPage/SearchPage';

const App = () => {
    return (
        <Routes>
            <Route path="/" element={<Layout />}>
                <Route path="/" element={<Home />} />
                <Route path="style" element={<Style />} />
                <Route path="list" element={<List />} />
                <Route path="search" element={<Search />} />
                <Route path="mypage" element={<Mypage />} />
                <Route path="order" element={<Order />} />
            </Route>
            <Route path="/login" element={<Login />} />
            <Route path="/join" element={<Join />} />
            <Route path="/joinComplete" element={<JoinComplete />} />
        </Routes>
    );
};
export default App;
