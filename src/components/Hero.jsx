import { Button } from "./Button";
import heroImg from "/public/client_img.svg";
import value from "../assets/svg/value.svg";
// import "../App.css";

const practices = [
  {
    id: 0,
    src: "../public/family.svg",
    title: "Family law",
    details: "Family law",
  },
  {
    id: 1,
    src: "../public/business.svg",
    title: "Business law",
    details: "Family law",
  },
  {
    id: 2,
    src: "../public/international.svg",
    title: "International law",
    details: "Family law",
  },
  {
    id: 3,
    src: "../public/property.svg",
    title: "Property law",
    details: "Family law",
  },
];

// HERO COMPONENT
export const Hero = () => {
  return (
    <div className="p-4 sm:p-10 flex flex-col sm:flex-row">
      <div className=" flex flex-col gap-3">
        <h1 className="font-bold text-[3.5rem] leading-[4.105625rem]">
          <span className="text-gray-200">We</span> Listen,
          <span className="text-gray-200">We</span> Advice,
          <span className="text-gray-200">We</span>
          Defend.
        </h1>
        <p>
          With a proven track record of success, we're ready to stand by your
          side, fighting tirelessly to protect your rights.
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <Button text={"Let's get in touch"} customClassName="text-white" />
          <Button
            text={"Get free consultation"}
            customClassName="bg-white border text-[#235CEB]"
          />
        </div>
      </div>
      <div>
        <img src={heroImg} />
      </div>
    </div>
  );
};

// DEFEND COMPONENT
export const Defend = () => {
  return (
    <div className="defend bg-[]">
      <div className="bg-[#235CEB] px-4 py-8 sm:px-10 sm:py-16 flex flex-col gap-4 items-center text-white">
        <h2 className="font-bold text-[2.5rem] leading-[4.105625rem]">
          Defending clients since 2010
        </h2>
        <p>
          With a proven track record of success, we're ready to stand by your
          side, fighting tirelessly to protect your rights.
        </p>
        <Button
          text={"Learn more about us"}
          customClassName="bg-white text-[#235CEB]"
        />
      </div>
    </div>
  );
};

// VALUE COMPONENT
export const Value = () => {
  return (
    <div className="bg-[#EFF4FF] pb-0 p-4 sm:p-14 sm:pb-0 flex flex-col sm:flex-row justify-between items-center sm:gap-x-6">
      <div className=" flex flex-col gap-3">
        <h2 className="font-bold text-[3rem] leading-[4.105625rem]">
          Our Key Values
        </h2>
        <p>
          With a proven track record of success, we're ready to stand by your
          side, fighting tirelessly to protect your rights.
        </p>
      </div>
      <div>
        <img src={value} />
      </div>
    </div>
  );
};

// PRACTICE COMPONENT

export const Practice = () => {
  return (
    <div className="p-4 sm:p-14 flex flex-col gap-6 justify-between">
      <div className=" flex flex-col gap-3">
        <h2 className="font-bold text-[3rem] leading-[4.105625rem]">
          Our practice areas
        </h2>
        <p>
          With a proven track record of success, we're ready to stand by your
          side, fighting tirelessly to protect your rights.
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-7 py-3 pt-6">
        {practices.map((practice, index) => {
          return (
            <div className="border rounded">
              <img src={practice.src} className="px-5 py-3" />
              <hr></hr>
              <h3 className="font-bold p-5 t">{practice.title}</h3>
              <p className="px-5 pb-12">{practice.details}</p>
            </div>
          );
        })}
      </div>
      <Button
        text={"More about our services"}
        customClassName="bg-white border text-[#235CEB]"
      />
    </div>
  );
};

// TEAM COMPONENT

export const Team = () => {
  return (
    <div className="p-4 sm:p-14 flex flex-col gap-6 justify-between">
      <div className=" flex flex-col gap-3">
        <h2 className="font-bold text-[3rem] leading-[4.105625rem]">
          Meet the team of experts
        </h2>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-7 py-3 pt-6">
        {practices.map((practice, index) => {
          return (
            <div className="border rounded">
              <img src={practice.src} className="px-5 py-3" />
              <hr></hr>
              <h3 className="font-bold p-5 t">{practice.title}</h3>
              <p className="px-5 pb-12">{practice.details}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

// TEAM COMPONENT

export const Clients = () => {
  return (
    <div className=" flex flex-col justify-between relative">
      <div className="flex flex-col justify-center items-center text-white w-full gap-3 bg-[url('/public/client_img.svg')] bg-no-repeat bg-cover bg-top h-[120vh]">
        <h2 className="font-bold text-[3rem] leading-[4.105625rem]">
          We take care of our Clients
        </h2>
      </div>
      <div className="min-h-[30rem]">
        <div className="bg-gray-700 p-6 rounded sm:px-10 sm:py-7 ml-8 absolute top-[55%] w-full">
          <h2 className="font-bold text-[2.8rem] w-[45%] leading-[4.105625rem] text-white">
            Here's what our clients say about us.
          </h2>
          <div className="flex flex-row gap-7 py-3 pt-6">
            {practices.map((practice, index) => {
              return (
                <div className="border rounded">
                  <img src={practice.src} className="px-5 py-3" />
                  <h3 className="font-bold p-5 t">{practice.title}</h3>
                  <p className="px-5 pb-12">{practice.details}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};