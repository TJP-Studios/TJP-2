import { Button } from "./Button";
import { statistics } from "../utils/data";

export const Statistics = () => {
  return (
    <div className="flex flex-row rounded mx-auto divide-x-2 bg-white absolute inset-x-2 w-[60%] py-8 justify-center items-center  bottom-[-15%] border">
      {statistics.map((stats) => {
        return (

            <div className="flex flex-col items-center justify-center gap-2 w-[11.5rem] last:pr-4 last:pl-2 last:w-[13rem]">
              <img src={stats.src} />
              <h5 className="font-[600] text-[1.5rem]">{stats.data}</h5>
              <p>{stats.about}</p>
            </div>
        );
      })}
    </div>
  );
};
