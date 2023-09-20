import { Button } from "./Button";
function Hero() {
  return (
    <div className="p-4 sm:p-10 flex flex-col sm:flex-row">
      <div className=" flex flex-col gap-3">
        <h1 className="font-bold text-[3.5rem] leading-[4.105625rem]">
          <span>We</span> Listen, <span>We</span> Advice, <span>We</span>
          Defend.
        </h1>
        <p>
          With a proven track record of success, we're ready to stand by your
          side, fighting tirelessly to protect your rights.
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <Button text={"Let's get in touch"} />
          <Button
            text={"Get free consultation"}
            customClassName="bg-white border text-[#235CEB]"
          />
        </div>
      </div>
      <div></div>
    </div>
  );
}

export default Hero;
