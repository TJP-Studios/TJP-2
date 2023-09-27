import { Button } from "./Button";
import { Statistics } from "./Statistics";
import { team, clients, blogs, practices } from "../utils/data";
import value from "../assets/svg/value.svg";
import heroImg from "../assets/svg/illustration.svg";
import { Link } from "react-router-dom";

// HERO COMPONENT
export const Hero = () => {
  return (
    <div className="relative h-[40rem]">
      <div className="p-4 sm:p-14 sm:pt-10 flex flex-col sm:flex-row justify-between gap-6 items-center relative h-full">
        <div className=" flex flex-col gap-8 sm:w-[50%]">
          <h1 className="font-bold text-[3.5rem] leading-[4.105625rem] tracking-wide">
            <span className="text-gray-200">We</span> Listen,
            <span className="text-gray-200">{"   "}We</span> Advice,
            <span className="text-gray-200">{"   "}We</span>
            {"  "}
            Defend.
          </h1>
          <p className="sm:w-[85%]">
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
        <div className="sm:w-[40%] absolute right-12 top-[10%]">
          <img src={heroImg} className="" />
        </div>
      </div>
      <Statistics />
    </div>
  );
};

// DEFEND COMPONENT
export const Defend = () => {
  return (
    <div className="defend bg-[]">
      <div className="bg-[#235CEB] px-4 py-8 sm:px-16 sm:py-16 text-white">
        <div className="sm:py-16 flex flex-col gap-4 text-center items-center">
          <h2 className="font-bold text-[2.5rem] leading-[4.105625rem]">
            Defending clients since 2010
          </h2>
          <p className="sm:w-3/5">
            Founded in 2010, TRPLAW is a law firm with a global network of legal
            practicioners. Our mission is simple yet powerful: to serve our
            clients with dedication, integrity and a touch of whimsy. We believe
            that every legal challenge, no matter how complex, can be met with a
            blend of professionalism and a fresh perspective
          </p>
          <Button
            text={"Learn more about us"}
            customClassName="bg-white text-[#235CEB] mt-2"
          />
        </div>
      </div>
    </div>
  );
};

// VALUE COMPONENT
export const Value = () => {
  return (
    <div className="bg-[#EFF4FF] pb-0 p-4 sm:p-14 sm:pb-0 flex flex-col sm:flex-row justify-between items-center sm:gap-x-12">
      <div className=" flex flex-col gap-5 sm:w-[42%]">
        <h2 className="font-bold text-[3rem] leading-[4.105625rem]">
          Our Key Values
        </h2>
        <p>
          At TRPLAW, our commitment to you goes beyond just practicing law; it's
          about bulding lasting relationships based on trust and understanding.
          Thus, our key values are as follows
        </p>
      </div>
      <div className="w-[45%]">
        <img src={value} />
      </div>
    </div>
  );
};

// PRACTICE COMPONENT
export const Practice = () => {
  return (
    <div className="p-4 sm:p-14 sm:py-16 flex flex-col gap-6 justify-between">
      <div className=" flex flex-col gap-3 sm:w-[50%]">
        <h2 className="font-bold text-[3.5rem] leading-[4.105625rem] sm:pt-10">
          Our practice areas
        </h2>
        <p className="w-[90%]">
          Our diverse range of practice areas reflects our commitment to
          addressing a wide spectrum of legal needs
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-7 py-4 pt-8">
        {practices.map((practice) => {
          return (
            <div className="border rounded" key={practice.id}>
              <img src={practice.src} className="px-5 py-3" />
              <hr></hr>
              <h3 className="font-bold p-5 text-[2rem]">{practice.title}</h3>
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
    <div className="p-4 sm:p-14 flex flex-col gap-6 justify-between sm:pb-20">
        <h2 className="font-bold text-[3.5rem] leading-[4.105625rem] py-3 pb-5">
          Meet the team of experts
      </h2>
      <div className="flex py-8 pb-12 pt-6 md:h-[30rem] lg:h-[35rem] flex-row justify-between items-center gap-8">
        {team.map((team, index) => {
          return (
            <div className="relative justify-between  py-6 ">
              <div className="h-[80%]">
                <img src={team.src} className="h-full" />
              </div>
              <div className=" mx-auto w-[90%] h-[6rem]">
                <div className="h-[30%] px-6 py-4 w-[90%] absolute bg-white  border bottom-4  ">
                  <h3 className="font-bold sm:text-[1rem] lg:text-[1.7rem]">
                    {team.name}
                  </h3>
                  <p className="">{team.role}</p>
                  <div className="py-3">
                    <hr></hr>
                  </div>
                  <p className="font-[600]">Practice area</p>
                  <p className="text-sm">{team.practice}</p>
                </div>
              </div>
              {/* <div className="h-[15rem]"></div> */}
            </div>
          );
        })}
      </div>
      <Button
        text={"Go to Attorneys profile"}
        customClassName="bg-white border text-[#235CEB]"
      />
    </div>
  );
};

// CLIENTS COMPONENT

export const Clients = () => {
  return (
    <div className=" flex flex-col justify-between overflow-x-hidden">
      <div className="flex flex-col justify-center items-center text-white gap-3 bg-[url('/client_img.svg')] bg-no-repeat bg-cover bg-center h-[100vh]">
        <h2 className="font-bold text-[3.5rem] leading-[4.105625rem]">
          We take care of our Clients
        </h2>
        <Button text={"Let's get in touch"} customClassName="text-white" />
      </div>
      <div className="min-h-[15rem] ">
        <div className="bg-gray-700 p-6 rounded sm:px-10 sm:py-7 z-20 left-[3rem] relative bottom-[3rem] w-full -x-hidden">
          <h2 className="font-bold text-[3rem] w-[45%] leading-[4.105625rem] text-white">
            Here's what our clients say about us.
          </h2>
          <div className="flex flex-row py-3 pt-6 justify gap-3">
            {clients.map((client, index) => {
              return (
                <div className="border rounded bg-white w-[45%] px-7 py-5 flex flex-col justify-between">
                  <p className="text-[2.5rem] font-bold text-gray-600 m-0">"</p>
                  <p className="py-3">{client.comment}</p>
                  <div className="py-2">
                    <hr></hr>
                  </div>
                  <div className="flex flex-row gap-6 py-2">
                    <img src={client.src} />
                    <div>
                      <h3 className="font-bold ">{client.name}</h3>
                      <p className="">{client.role}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

// BLOG POSTS
export const BlogPost = () => {
  return (
    <div className="p-4 sm:p-14 flex flex-col gap-6 justify-between ">
      {/* <div className=" flex flex-col gap-3"> */}
      <h2 className="font-bold text-[3rem] leading-[4.105625rem]">
        Our Latest blog posts
      </h2>
      {/* </div> */}
      <div className="flex py-8 flex-row justify-between items-center gap-8 ">
        {blogs.map((blog, index) => {
          return (
            <div className="justify-between h-[100%] flex flex-col items-stretch w-[40%]">
              <div className="">
                <img src={blog.image} className="" />
              </div>

              <div className="px-4 py-4 bg-white border flex flex-col pb-3">
                <h3 className="font-bold sm:text-[1.5rem] ">{blog.content}</h3>
                <p className="border my-2 p-2 text-sm self-start rounded-[6px]">
                  {blog.title}
                </p>
                <div className="py-3">
                  <hr></hr>
                </div>
                <Link to="/blog" className="underline">
                  Read article
                </Link>
              </div>
            </div>
          );
        })}
      </div>
      <Link to="/blog">
        <Button
          text={"See all blog posts"}
          customClassName="bg-white border text-[#235CEB]"
        />
      </Link>
    </div>
  );
};
