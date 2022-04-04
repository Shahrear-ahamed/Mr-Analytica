import { Route, Routes } from "react-router-dom";
import "./App.css";
import About from "./Components/About/About";
import Blogs from "./Components/Blogs/Blogs"
import DashBoard from "./Components/DashBoard/DashBoard"
import Header from "./Components/Header/Header";
import Home from "./Components/Home/Home";
import PageNotFound from "./Components/PageNotFound/PageNotFound";
import Reviews from "./Components/Reviews/Reviews";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="" element={<Home />} />
        <Route path="/review" element={<Reviews />} />
        <Route path="/dashboard" element={<DashBoard />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </div>
  );
}

export default App;
