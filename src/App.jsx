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
import Cart from './components/pages/CartPage/CartPage';
import MypagePw from './components/pages/MypagePwPage/MypagePwPage';
import ProductList from './components/pages/ProductListPage/ProductListPage';
import ProductInfo from './components/pages/ProductInfo/ProductInfo';
import OrderCheck from './components/pages/OrderCheck/OrderCheck';

const App = () => {
    return (
        <Routes>
            <Route path="/" element={<Layout />}>
                <Route path="/" element={<Home />} />
                <Route path="style" element={<Style />} />
                <Route path="list" element={<List />} />
                <Route path="search" element={<Search />} />
                <Route path="cart" element={<Cart />} />
                <Route path="mypagePw" element={<MypagePw />} />
                <Route path="mypage" element={<Mypage />} />
                <Route path="order" element={<Order />} />
                <Route path="productlist" element={<ProductList />} />
                <Route path="productlist/:id" element={<ProductInfo />} />
                <Route path="ordercheck" element={<OrderCheck />} />
            </Route>
            <Route path="/login" element={<Login />} />
            <Route path="/join" element={<Join />} />
            <Route path="/joinComplete" element={<JoinComplete />} />
        </Routes>
    );
};
export default App;
