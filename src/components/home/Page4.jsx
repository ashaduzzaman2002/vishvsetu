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

const Page4 = ({setActive}) => {
  const [age, setAge] = React.useState(10);

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  const handleClick = () => {
    setActive(4);
    console.log("object");
  };

  return (
    <div className="mt-[30px]">
      <h3 className="text-center lg:text-[26px] text-[22px] font-semibold mt-10">
        IELTS/TOEFL/PTE/Duolingo status
      </h3>

      <div className="mt-[30px]">
        

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
              padding: '20px'
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

      <div className="mt-10 flex justify-center gap-5">
        <Button onClick={() => setActive(2)} className="bg-[#eceffa] !text-[#4161C8]">
          <ButtonPrevArrow /> Previous
        </Button>

        <Button onClick={handleClick} disabled={false} className="">
          Next <ButtonNextArrow />
        </Button>
      </div>
    </div>
  );
};

export default Page4;

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
