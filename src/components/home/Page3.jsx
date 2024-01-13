"use client";
import { education, passport, yearOfExpectation } from "@/data";
import React from "react";
import Button from "../button/Button";
import {
  ButtonNextArrow,
  ButtonPrevArrow,
  DropdownArrow,
} from "@/assets/svg/Icon";
import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";

const Page3 = ({ setActive, inputs, setInputs }) => {

  const handleClick = () => {
    setActive(3);
    console.log("object");
  };

  const hanldeClickEducation = (value) => {
    setInputs({
      ...inputs,
      education: value,
    });
  };

  const hanldeClickPassport = (value) => {
    setInputs({
      ...inputs,
      passport: value,
    });
  };

  return (
    <div className="mt-[30px]">
      <h3 className="text-center lg:text-[26px] text-[22px] font-semibold">
        What&apos;s your highest level of education?
      </h3>

      <div className="grid lg:grid-cols-2 grid-cols-1 gap-5 mt-[30px]">
        {education?.map((item, i) => (
          <Card
          key={i}
            onClick={hanldeClickEducation}
            isActive={item?.label === inputs?.education}
            data={item}
          />
        ))}
      </div>

      {inputs?.education ? (
        <>
          <h3 className="text-center lg:text-[26px] text-[22px] font-semibold mt-10">
            Expected or Gained Percentage
          </h3>

          <div className="mt-[30px]">
            <input
              onChange={(e) =>
                setInputs({
                  ...inputs,
                  grade: e.target.value,
                })
              }
              type="text"
              placeholder="Grades"
              className="h-[65px] lg:h-[70px]  2xl:h-[78px] bg-[#fff] placeholder:text-[#696969] lg:text-xl text-base font-medium d w-full px-[34px] focus:outline-none"
              style={{
                boxShadow: "0px 0px 17px 0px rgba(203, 203, 203, 0.45)",
              }}
            />
          </div>
        </>
      ) : null}

      <h3 className="text-center lg:text-[26px] text-[22px] font-semibold mt-10">
        Year of graduation?
      </h3>

      <div className="mt-[30px]">
        <FormControl fullWidth>
          <Select
            value={inputs?.graduation_year || "a"}
            onChange={(e) =>
              setInputs({
                ...inputs,
                graduation_year: e.target.value,
              })
            }
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
            placeholder="Select Year"
          >
            <MenuItem value="a" disabled>
              Select Year
            </MenuItem>

            {yearOfExpectation?.map((item, i) => (
              <MenuItem
              key={i}
                value={item.label}
                style={{ border: "none", fontSize: 20, fontWeight: "500" }}
              >
                {item.label}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </div>

      <h3 className="text-center lg:text-[26px] text-[22px] font-semibold mt-10">
        Do you have a valid Passport?
      </h3>

      <div className="grid lg:grid-cols-3 grid-cols-2 gap-5 mt-[30px]">
        {passport?.map((item, i) => (
          <Card1
          key={i}
            onClick={hanldeClickPassport}
            isActive={item?.label === inputs?.passport}
            data={item}
          />
        ))}
      </div>

      <div className="mt-10 flex justify-center gap-5">
        <Button
          onClick={() => setActive(1)}
          className="bg-[#eceffa] !text-[#4161C8]"
        >
          <ButtonPrevArrow /> Previous
        </Button>

        <Button
          onClick={handleClick}
          disabled={
            inputs?.education &&
            inputs.grade &&
            inputs?.graduation_year &&
            inputs?.passport
              ? false
              : true
          }
          className=""
        >
          Next <ButtonNextArrow />
        </Button>
      </div>
    </div>
  );
};

export default Page3;

const Card = ({ data, isActive, onClick }) => (
  <div
    onClick={() => onClick(data?.label)}
    className={`${
      isActive ? "bg-[#4161C8]" : "bg-[#fff]"
    } flex h-[65px] lg:h-[70px]  2xl:h-[78px] rounded-[10px] justify-center cursor-pointer p-[20px] items-center gap-[15px]`}
    style={{ boxShadow: "0px 0px 17px 0px rgba(203, 203, 203, 0.45)" }}
  >
    <p
      className={`${
        isActive ? "text-white" : "text-[#696969]"
      } lg:text-xl text-base font-medium`}
    >
      {data?.label}
    </p>
  </div>
);

const Card1 = ({ data, isActive, onClick }) => (
  <div
    onClick={() => onClick(data?.label)}
    className={`${
      isActive ? "bg-[#4161C8]" : "bg-[#fff]"
    } flex h-[65px] lg:h-[70px]  2xl:h-[78px]
     rounded-[10px] justify-center cursor-pointer p-[20px] items-center gap-[15px]`}
    style={{ boxShadow: "0px 0px 17px 0px rgba(203, 203, 203, 0.45)" }}
  >
    <p
      className={`${
        isActive ? "text-white" : "text-[#696969]"
      } lg:text-xl text-base font-medium`}
    >
      {data?.label}
    </p>
  </div>
);
