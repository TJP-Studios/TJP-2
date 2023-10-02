import GetInTouch from "../components/GetInTouch";
import Footer from "../components/Footer";
import { Button } from "../components/Button";
import { Statistics } from "../components/Statistics";
import { Link } from "react-router-dom";
import man from "../assets/svg/known_for.svg";
// import about from "../assets/svg/about_bg.svg";
import check from "../assets/svg/check.svg";

export const AboutUs = () => {
  return (
    <>
      <About />
      <Firm />
      <Services />
      <GetInTouch />
      <Footer />
    </>
  );
};

export const About = () => {
  return (
    <div className="relative h-[40rem] bg-[url('/about_bg.svg')] bg-[#032681]  pt-8 bg-no-repeat bg-cover bg-top w-[100vw]">
      <div className="p-4 overflow-x-hidden sm:p-14 sm:pt-10 flex flex-col sm:flex-row justify-between gap-6 items-center relative h-full">
        <div></div>
        <div className=" flex flex-col gap-3 text-white sm:w-[65%]">
          <h1 className="font-bold text-[3.5rem] leading-[4.105625rem] tracking-wide">
            Protecting your Rights
          </h1>
          <h3 className="font-bold text-[2.5rem] leading-[4.105625rem] tracking-wide">
            Bringing Justice
          </h3>
          <p className="sm:w-[83%] sm:text-[1.2rem]">
            Here at TRPLAW, we protect your rights and defend your future. with
            a team of experienced lawyers. Contact us today for consultation.
          </p>
          <Link to="/contact-us">
            <Button
              text={"Contact us"}
              customClassName="bg-white border text-[#235CEB]"
            />
          </Link>
        </div>
      </div>
      <Statistics />
    </div>
  );
};

export const Firm = () => {
  return (
    <div className="sm:py-20">
      <div className="p-4 sm:py-20 sm:mt-10 sm:p-14 sm:pt-20 flex flex-col sm:flex-row justify-between gap-10 h-full">
        <div className="">
          <h1 className="font-[600] text-[3.5rem] leading-[4.105625rem] tracking-wide">
            Who We Are As A <span className="text-blue-900">Firm</span>
          </h1>
        </div>

        <p className="sm:w-[85%] text-[1.3rem]">
          Founded in 2010, TRPLAW is a law firm with a global network of legal
          practicioners. Our mission is simple yet powerful: to serve our
          clients with dedication, integrity and a touch of whimsy. We believe
          that every legal challenge, no matter how complex, can be met with a
          blend of professionalism and a fresh perspective.
        </p>
      </div>
    </div>
  );
};

export const Services = () => {
  return (
    <div className=" flex flex-col pb-8">
      <div className="bg-blue-50 p-4 sm:py-20 sm:p-14 flex flex-col sm:flex-row justify-between items-center gap-10 h-full">
        <div>
          <img src={man} />
        </div>
        {/* <div className="flex flex-col gap-3">
          <img src={check} />
          <img src={check} />
          <img src={check} />
          <img src={check} />
        </div> */}
        <div className=" flex flex-col gap-10">
          <h1 className="font-[600] text-[3rem] leading-[4.105625rem] tracking-wide pl-6">
            What we are known for
          </h1>
          <div className="text-[1.5rem] flex flex-row items-center gap-4">
            <img src={check} />
            <p>Practicing the rights of our clients.</p>
          </div>
          <div className="text-[1.5rem] flex flex-row items-center gap-4">
            <img src={check} />
            <p>Providing expert legal guidance and representation.</p>
          </div>
          <div className="text-[1.5rem] flex flex-row items-center gap-4">
            <img src={check} />
            <p>Experienced attorneys in various areas of law.</p>
          </div>
          <div className="text-[1.5rem] flex flex-row items-center gap-4">
            <img src={check} />
            <p>Our attorneys committment to every client.</p>
          </div>
        </div>
      </div>
      <div className="self-center py-10">
        <Link to="/services">
          <Button text={"See all our services"} customClassName="text-white" />
        </Link>
      </div>
    </div>
  );
};
