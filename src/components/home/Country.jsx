import { countries } from "@/data";
import React from "react";
import Button from "../button/Button";
import { ButtonNextArrow, ButtonPrevArrow } from "@/assets/svg/Icon";

const Country = () => {
  return (
    <div className="mt-[30px]">
      <h3 className="text-center lg:text-[26px] text-[22px] font-semibold">
        Choose your country
      </h3>

      <div className="grid lg:grid-cols-3 grid-cols-1 gap-5 mt-[30px]">
        {countries?.map((item, i) => (
          <Card data={item} key={i} />
        ))}
      </div>

      <div className="mt-10 flex justify-center">
        <Button disabled={false} className="">
          Next <ButtonNextArrow />
        </Button>

        {/* <Button className="bg-[#eceffa] !text-[#4161C8]">
          <ButtonPrevArrow /> Previous
        </Button> */}
      </div>
    </div>
  );
};

export default Country;

const Card = ({ data }) => (
  <div
    className="bg-[#fff] flex h-[78px] rounded-[10px] justify-start cursor-pointer p-[10px] items-center gap-[15px]"
    style={{ boxShadow: "0px 0px 13px 0px rgba(203, 203, 203, 0.25)" }}
  >
    <div
      className="bg-[#f5f5fe] h-full aspect-square rounded-[10px] flex items-center justify-center"
      style={{ boxShadow: "0px 0px 13px 0px rgba(203, 203, 203, 0.25)" }}
    >
      {data?.icon}
    </div>

    <p className={`text-[#696969] text-xl font-medium`}>{data?.name}</p>
  </div>
);
