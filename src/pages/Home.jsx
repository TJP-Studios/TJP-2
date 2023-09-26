import Navbar from "../components/Navbar";
import {
  Hero,
  Defend,
  Value,
  Practice,
  Team,
  Clients, BlogPost
} from "../components/Hero";
import GetInTouch from "../components/GetInTouch";
import Footer from "../components/Footer";

function Home() {
  return (
    <>
      {/* <Navbar /> */}
      <Hero />
      <Defend />
      <Value />
      <Practice />
      <Team />
      <Clients />
      <BlogPost />
      <GetInTouch />
      <Footer />
    </>
  );
}

export default Home;
