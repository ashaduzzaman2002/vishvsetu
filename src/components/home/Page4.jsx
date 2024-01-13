"use client";
import { education, examStatus, passport } from "@/data";
import React from "react";
import Button from "../button/Button";
import {
  ButtonNextArrow,
  ButtonPrevArrow,
} from "@/assets/svg/Icon";
import { FormControl, MenuItem, Select } from "@mui/material";

const Page4 = ({ setActive, inputs, setInputs }) => {


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
            value={inputs?.exam_status || "a"}
            onChange={(e) => setInputs({
              ...inputs, exam_status: e.target.value
            })}
            sx={{
              backgroundColor: "#fff",
              borderColor: "transparent",
              fontSize: 20,
              fontWeight: "500",
              boxShadow: "0px 0px 17px 0px rgba(203, 203, 203, 0.45)",
              height: "65px", // Default height
              padding: "20px",
              "@media (min-width: 1024px)": {
                height: "70px", // Responsive height for lg breakpoint
              },
              "@media (min-width: 1280px)": {
                height: "78px", // Responsive height for 2xl breakpoint
              },
            }}
          >
            <MenuItem value="a" disabled>
              Select Exam Status
            </MenuItem>

            {examStatus?.map((item, i) => (
              <MenuItem
                value={item.label}
                style={{ border: "none", fontSize: 20, fontWeight: "500" }}
              >
                {item.label}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </div>

      <div className="mt-10 flex justify-center gap-5">
        <Button
          onClick={() => setActive(2)}
          className="bg-[#eceffa] !text-[#4161C8]"
        >
          <ButtonPrevArrow /> Previous
        </Button>

        <Button
          onClick={handleClick}
          disabled={inputs?.exam_status ? false : true}
          className=""
        >
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
