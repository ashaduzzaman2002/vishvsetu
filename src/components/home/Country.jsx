import { countries } from "@/data";
import React from "react";
import Button from "../button/Button";
import { ButtonNextArrow, ButtonPrevArrow } from "@/assets/svg/Icon";

const Country = ({ setActive, inputs, setInputs }) => {
  const handleClick = () => {
    setActive(1);
    console.log("object");
  };

  const hanleCardClick = (name) => {
    setInputs({
      ...inputs,
      choosen_country: name,
    });

    setActive(1);
  };

  return (
    <div className="mt-[30px]">
      <h3 className="text-center lg:text-[26px] text-[22px] font-semibold">
        Choose your country
      </h3>

      <div className="grid md:grid-cols-3 lg:grid-cols-2  xl:grid-cols-3 grid-cols-2 lg:gap-5 md:gap-4 gap-3 mt-[30px]">
        {countries?.map((item, i) => (
          <Card
            hanleCardClick={hanleCardClick}
            isActive={item?.name === inputs?.choosen_country}
            data={item}
            key={i}
          />
        ))}
      </div>

      <div className="mt-10 flex justify-center">
        <Button
          onClick={handleClick}
          disabled={inputs?.choosen_country ? false : true}
          className=""
        >
          Next <ButtonNextArrow />
        </Button>
      </div>
    </div>
  );
};

export default Country;

const Card = ({ data, isActive, hanleCardClick }) => (
  <div
    onClick={() => hanleCardClick(data.name)}
    className={`${
      isActive ? "bg-[#4161C8]" : "bg-[#fff]"
    } flex h-[65px] lg:h-[70px]  2xl:h-[78px] rounded-[10px] justify-start cursor-pointer p-[10px] items-center gap-[15px]`}
    style={{ boxShadow: "0px 0px 13px 0px rgba(203, 203, 203, 0.25)" }}
  >
    <div
      className={`${
        isActive ? "bg-white" : "bg-[#f5f5fe]"
      } h-full aspect-square rounded-[10px] flex items-center justify-center`}
      style={{ boxShadow: "0px 0px 13px 0px rgba(203, 203, 203, 0.25)" }}
    >
      {data?.icon}
    </div>

    <p
      className={`${
        isActive ? "text-white" : "text-[#696969]"
      } lg:text-xl text-base font-medium`}
    >
      {data?.name}
    </p>
  </div>
);
