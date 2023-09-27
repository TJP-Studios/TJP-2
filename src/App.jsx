import Navbar from "./components/Navbar";
import GetInTouch from "./components/GetInTouch";
import Footer from "./components/Footer";
import { Routes, Route } from "react-router-dom";
import Blog from "./pages/Blog/Blog";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import {AboutUs} from "./pages/About";
import Service from "./pages/Service";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blog" element={<Blog />} />
        <Route path='/contact-us' element={<Contact />} />
        <Route path='/services' element={<Service />} />
      </Routes>
      {/* <GetInTouch /> */}
      {/* <Footer /> */}
    </>
  );
}

export default App;
