import Navbar from "./components/Navbar";
import GetInTouch from "./components/GetInTouch";
import Footer from "./components/Footer";
import { Routes, Route } from "react-router-dom";
import Blog from "./pages/Blog/Blog";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import {AboutUs} from "./pages/About";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path='/contact-us' element={<Contact />} />
      </Routes>
      {/* <GetInTouch /> */}
      {/* <Footer /> */}
    </>
  );
}

export default App;
