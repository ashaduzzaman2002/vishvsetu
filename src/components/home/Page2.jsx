import { countries, intake, pursue } from "@/data";
import React from "react";
import Button from "../button/Button";
import { ActiveDot, ButtonNextArrow, ButtonPrevArrow } from "@/assets/svg/Icon";

const Page2 = ({ setActive, inputs, setInputs }) => {
  const handleClick = () => {
    setActive(2);
    console.log("object");
  };

  const hanldeClickIntakeCard = (date) => {
    setInputs({
      ...inputs,
      intake: date,
    });
  };

  const hanldeClickPursueCard = (pursue) => {
    setInputs({
      ...inputs,
      pursue,
    });
  };
  return (
    <div className="mt-[30px]">
      <h3 className="text-center lg:text-[26px] text-[22px] font-semibold">
        What&apos;s your preferred intake?
      </h3>

      <div className="grid lg:grid-cols-2 grid-cols-1 gap-5 mt-[30px]">
        {intake?.map((item, i) => (
          <Card
            onClick={hanldeClickIntakeCard}
            isActive={item.date === inputs?.intake}
            data={item}
            key={i}
          />
        ))}
      </div>

      <h3 className="text-center lg:text-[26px] text-[22px] font-semibold mt-10">
        What&apos;s do your wish to pursue?
      </h3>

      <div className="grid lg:grid-cols-2 grid-cols-1 gap-5 mt-[30px]">
        {pursue?.map((item, i) => (
          <Card1 isActive={item.label === inputs?.pursue} onClick={hanldeClickPursueCard} data={item} key={i} />
        ))}
      </div>

      <div className="mt-10 flex justify-center gap-5">
        <Button
          onClick={() => setActive(0)}
          className="bg-[#eceffa] !text-[#4161C8]"
        >
          <ButtonPrevArrow /> Previous
        </Button>

        <Button
          onClick={handleClick}
          disabled={inputs?.intake && inputs.pursue ? false : true}
          className=""
        >
          Next <ButtonNextArrow />
        </Button>
      </div>
    </div>
  );
};

export default Page2;

const Card = ({ data, isActive, onClick }) => (
  <div
    onClick={() => onClick(data?.date)}
    className={`${
      isActive ? "bg-[#4161C8]" : "bg-[#fff]"
    } flex h-[78px] rounded-[10px] justify-between cursor-pointer p-[20px] items-center gap-[15px]`}
    style={{ boxShadow: "0px 0px 17px 0px rgba(203, 203, 203, 0.45)" }}
  >
    <p
      className={`${
        isActive ? "text-white" : "text-[#696969]"
      } text-xl font-medium`}
    >
      {data?.date}
    </p>

    {data?.recommended && (
      <div
        className={`${
          isActive ? "bg-white" : "bg-[#f5f5fe]"
        } rounded-[20px] flex items-center justify-center px-3 gap-2 py-[10px] font-medium text-[12px]`}
        style={{ boxShadow: "0px 0px 13px 0px rgba(203, 203, 203, 0.25)" }}
      >
        <ActiveDot /> Recommended
      </div>
    )}
  </div>
);

const Card1 = ({ data, onClick, isActive }) => (
  <div
    onClick={() => onClick(data?.label)}
    className={`${
      isActive ? "bg-[#4161C8]" : "bg-[#fff]"
    } flex h-[78px] rounded-[10px] justify-between cursor-pointer p-[20px] items-center gap-[15px]`}
    style={{ boxShadow: "0px 0px 17px 0px rgba(203, 203, 203, 0.45)" }}
  >
    <p className={`${
        isActive ? "text-white" : "text-[#696969]"
      } text-xl font-medium`}>{data?.label}</p>
  </div>
);
