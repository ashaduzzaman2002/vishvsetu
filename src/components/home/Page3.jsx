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

const Page3 = ({ setActive }) => {
  const [age, setAge] = React.useState("");

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  const handleClick = () => {
    setActive(3);
    console.log("object");
  };

  return (
    <div className="mt-[30px]">
      <h3 className="text-center lg:text-[26px] text-[22px] font-semibold">
        What's your highest level of education?
      </h3>

      <div className="grid lg:grid-cols-2 grid-cols-1 gap-5 mt-[30px]">
        {education?.map((item, i) => (
          <Card data={item} key={i} />
        ))}
      </div>

      <h3 className="text-center lg:text-[26px] text-[22px] font-semibold mt-10">
        Expected or Gained Percentage
      </h3>

      <div className="mt-[30px]">
        <input
          type="number"
          placeholder="Grades"
          className="h-[78px] bg-[#fff] placeholder:text-[#696969] text-xl font-medium d w-full px-[34px] focus:outline-none"
          style={{ boxShadow: "0px 0px 17px 0px rgba(203, 203, 203, 0.45)" }}
        />
      </div>

      <h3 className="text-center lg:text-[26px] text-[22px] font-semibold mt-10">
        Year of graduation?
      </h3>

      <div className="mt-[30px]">
        {/* <input
          type="number"
          placeholder="Grades"
          className="h-[78px] bg-[#fff] placeholder:text-[#696969] text-xl font-medium d w-full px-[34px] focus:outline-none"
          style={{ boxShadow: "0px 0px 17px 0px rgba(203, 203, 203, 0.45)" }}
        /> */}
        {/* 
        <div class="relative">
          <select
            placeholder="Select Year"
            defaultValue={""}
            class="placeholder:text-[#696969] text-xl font-medium appearance-none h-[78px] w-full bg-white rounded-md px-[34px] py-2 leading-tight focus:outline-none"
            style={{ boxShadow: "0px 0px 17px 0px rgba(203, 203, 203, 0.45)" }}
          >
            <option value="" disabled>
              Select Year
            </option>
            <option value="option1">Option 1</option>
            <option value="option2">Option 2</option>
            <option value="option3">Option 3</option>
          </select>
          <div class="absolute inset-y-0 right-3 flex items-center px-2 pointer-events-none">
            <DropdownArrow />
          </div>
        </div> */}

        <FormControl fullWidth>
          <Select
            value={age}
            onChange={handleChange}
            sx={{
              backgroundColor: "#fff",
              borderColor: "transparent",
              fontSize: 20,
              fontWeight: "500",
              boxShadow: "0px 0px 17px 0px rgba(203, 203, 203, 0.45)",
              height: 78,
              padding: "20px",
            }}
          >
            <MenuItem
              value={10}
              style={{ border: "none", fontSize: 20, fontWeight: "500" }}
            >
              Ten
            </MenuItem>
            <MenuItem
              style={{ border: "none", fontSize: 20, fontWeight: "500" }}
              value={20}
            >
              Twenty
            </MenuItem>
            <MenuItem
              style={{ border: "none", fontSize: 20, fontWeight: "500" }}
              value={30}
            >
              Thirty
            </MenuItem>
          </Select>
        </FormControl>
      </div>

      <h3 className="text-center lg:text-[26px] text-[22px] font-semibold mt-10">
        Do you have a valid Passport?
      </h3>

      <div className="grid lg:grid-cols-3 grid-cols-2 gap-5 mt-[30px]">
        {passport?.map((item, i) => (
          <Card1 data={item} key={i} />
        ))}
      </div>

      <div className="mt-10 flex justify-center gap-5">
        <Button
          onClick={() => setActive(1)}
          className="bg-[#eceffa] !text-[#4161C8]"
        >
          <ButtonPrevArrow /> Previous
        </Button>

        <Button onClick={handleClick} disabled={false} className="">
          Next <ButtonNextArrow />
        </Button>
      </div>
    </div>
  );
};

export default Page3;

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
