import {
  Hero,
  Defend,
  Value,
  Practice,
  Team,
  Clients,
} from "../components/Hero";
import GetInTouch from "../components/GetInTouch";
import Footer from "../components/Footer";
import { Button } from "../components/Button";
import { Statistics } from "../components/Statistics";

export const AboutUs = () => {
  return (
    <>
      <About />
      <Team />
      <GetInTouch />
      <Footer />
    </>
  );
};

export const About = () => {
  return (
    <div className="relative h-[40rem]">
      <div className="p-4 bg-blue-800 sm:p-14 sm:pt-10 flex flex-col sm:flex-row justify-between gap-6 items-center relative h-full">
        <div className="flex flex-col sm:flex-row gap-4">
          <img />
        </div>
        <div className=" flex flex-col gap-8 sm:w-[50%]">
          <h1 className="font-bold text-[3.5rem] leading-[4.105625rem] tracking-wide">
            {" "}
            Protecting your Rights{" "}
          </h1>
          <h3 className="font-bold text-[3rem] leading-[4.105625rem] tracking-wide">
            {" "}
            Bringing Justice
          </h3>
          <p className="sm:w-[85%]">
            Here at TRPLAW, we protect your rights and defend your future. with
            a team of experienced lawyers. Contact us today for consultation.
          </p>
        </div>
        <div></div>
      </div>
      <Statistics />
    </div>
  );
};
