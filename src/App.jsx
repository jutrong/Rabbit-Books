import { Routes, Route } from "react-router-dom";
import Style from "./components/pages/StylePage/StylePage";
import Home from "./components/pages/HomePage/HomePage";
import Mypage from "./components/pages/Mypage/Mypage";
import Layout from "./components/atoms/Layout/Layout.jsx";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="style" element={<Style />} />
        <Route path="mypage" element={<Mypage />} />
      </Route>
    </Routes>
  );
};
export default App;
