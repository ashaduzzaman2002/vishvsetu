"use client";
import { education, passport } from "@/data";
import React from "react";
import Button from "../button/Button";
import {
  ButtonNextArrow,
  ButtonPrevArrow,
  DropdownArrow,
} from "@/assets/svg/Icon";
import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";

const Page5 = ({setActive}) => {
  const [age, setAge] = React.useState(10);

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  

  return (
    <div className="mt-[30px]">
      <div className="mt-[30px]">
        <input
          type="text"
          placeholder="Name"
          className="h-[78px] bg-[#fff] placeholder:text-[#696969] text-xl font-medium d w-full px-[34px] focus:outline-none"
          style={{ boxShadow: "0px 0px 17px 0px rgba(203, 203, 203, 0.45)" }}
        />
      </div>
      <div className="mt-[30px]">
        <input
          type="text"
          placeholder="Email Address"
          className="h-[78px] bg-[#fff] placeholder:text-[#696969] text-xl font-medium d w-full px-[34px] focus:outline-none"
          style={{ boxShadow: "0px 0px 17px 0px rgba(203, 203, 203, 0.45)" }}
        />
      </div>
      <div className="mt-[30px]">
        <input
          type="number"
          placeholder="Mobile"
          className="h-[78px] bg-[#fff] placeholder:text-[#696969] text-xl font-medium d w-full px-[34px] focus:outline-none"
          style={{ boxShadow: "0px 0px 17px 0px rgba(203, 203, 203, 0.45)" }}
        />
      </div>
      <div className="mt-[30px]">
        <input
          type="text"
          placeholder="Address"
          className="h-[78px] bg-[#fff] placeholder:text-[#696969] text-xl font-medium d w-full px-[34px] focus:outline-none"
          style={{ boxShadow: "0px 0px 17px 0px rgba(203, 203, 203, 0.45)" }}
        />
      </div>
      <div className="mt-[30px]">
        <input
          type="date"
          placeholder="Select Date"
          className="h-[78px] bg-[#fff] placeholder:text-[#696969] text-xl font-medium d w-full px-[34px] focus:outline-none"
          style={{ boxShadow: "0px 0px 17px 0px rgba(203, 203, 203, 0.45)" }}
        />
      </div>
      <div className="mt-[30px]">
        <textarea
          placeholder="Message"
          className="py-[25px] h-[216px] resize-none bg-[#fff] placeholder:text-[#696969] text-xl font-medium d w-full px-[34px] focus:outline-none"
          style={{ boxShadow: "0px 0px 17px 0px rgba(203, 203, 203, 0.45)" }}
        ></textarea>
      </div>

      <div className="mt-10 flex justify-center gap-5">
        <Button onClick={() => setActive(3)} className="bg-[#eceffa] !text-[#4161C8]">
          <ButtonPrevArrow /> Previous
        </Button>

        <Button disabled={false} className="">
          Next <ButtonNextArrow />
        </Button>
      </div>
    </div>
  );
};

export default Page5;

const Card = ({ data }) => (
  <div
    className="bg-[#fff] flex h-[78px] rounded-[10px] justify-center cursor-pointer p-[20px] items-center gap-[15px]"
    style={{ boxShadow: "0px 0px 17px 0px rgba(203, 203, 203, 0.45)" }}
  >
    <p className={`text-[#696969] text-xl font-medium`}>{data?.label}</p>
  </div>
);

const Card1 = ({ data }) => (
  <div
    className="bg-[#fff] flex h-[78px] rounded-[10px] justify-center cursor-pointer p-[20px] items-center gap-[15px]"
    style={{ boxShadow: "0px 0px 17px 0px rgba(203, 203, 203, 0.45)" }}
  >
    <p className={`text-[#696969] text-xl font-medium`}>{data?.label}</p>
  </div>
);
