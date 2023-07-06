import { Routes, Route } from 'react-router-dom';
import Style from './components/pages/StylePage/StylePage';
import Home from './components/pages/HomePage/HomePage';
import Layout from './components/atoms/Layout/Layout.jsx';
import Login from './components/pages/LoginPage/LoginPage';
import List from './components/pages/ListPage/ListPage';

const App = () => {
    return (
        <Routes>
            <Route path="/" element={<Layout />}>
                <Route path="/" element={<Home />} />
                <Route path="style" element={<Style />} />
                <Route path="list" element={<List />} />
            </Route>
            <Route path="login" element={<Login />} />
        </Routes>
    );
};
export default App;
