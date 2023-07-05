import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/pages/HeaderPage/Header";
import Style from "./components/pages/StylePage/StylePage";
import Footer from "./components/pages/FooterPage/Footer";
import Home from "./components/pages/HomePage/HomePage";

function App() {
    return (
        <>
            <Header />
            <div id="wrap">
                <main>
                    <Router>
                        <Routes>
                            <Route path="/" element={<Home />}></Route>
                            <Route path="/style" element={<Style />}></Route>
                        </Routes>
                    </Router>
                </main>
                <Footer />
            </div>
        </>
    );
}

export default App;
