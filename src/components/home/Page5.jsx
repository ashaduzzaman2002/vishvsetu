"use client";
import React, { useState } from "react";
import Button from "../button/Button";
import { ButtonPrevArrow } from "@/assets/svg/Icon";
import axios from "axios";

const Page5 = ({ setActive, inputs, setInputs, handleModalOpen }) => {
  const [isLoading, setIsLoading] = useState(false);
  const handleSubmit = async () => {
    try {
      setIsLoading(true);
      const { data } = await axios.post(
        "http://vishvsetu.dinnre.com/submit-form",
        inputs
      );

      setIsLoading(false);
      setActive(0);
      setInputs({});
      handleModalOpen();
    } catch (error) {
      console.log(error);
      setIsLoading(false);
    }
  };
  return (
    <div className="mt-[30px]">
      <div className="xl:mt-[30px] mt-[20px]">
        <input
          onChange={(e) =>
            setInputs({
              ...inputs,
              name: e.target.value,
            })
          }
          type="text"
          placeholder="Name"
          className="h-[65px] lg:h-[70px]  2xl:h-[78px] bg-[#fff] placeholder:text-[#696969] lg:text-xl text-base font-medium d w-full xl:px-[34px] px-[20px] focus:outline-none"
          style={{ boxShadow: "0px 0px 17px 0px rgba(203, 203, 203, 0.45)" }}
        />
      </div>
      <div className="xl:mt-[30px] mt-[20px]">
        <input
          onChange={(e) =>
            setInputs({
              ...inputs,
              email: e.target.value,
            })
          }
          type="text"
          placeholder="Email Address"
          className="h-[65px] lg:h-[70px]  2xl:h-[78px] bg-[#fff] placeholder:text-[#696969] lg:text-xl text-base font-medium d w-full xl:px-[34px] px-[20px] focus:outline-none"
          style={{ boxShadow: "0px 0px 17px 0px rgba(203, 203, 203, 0.45)" }}
        />
      </div>
      <div className="xl:mt-[30px] mt-[20px]">
        <input
          onChange={(e) =>
            setInputs({
              ...inputs,
              phone: e.target.value,
            })
          }
          type="text"
          placeholder="Mobile"
          className="h-[65px] lg:h-[70px]  2xl:h-[78px] bg-[#fff] placeholder:text-[#696969] lg:text-xl text-base font-medium d w-full xl:px-[34px] px-[20px] focus:outline-none"
          style={{ boxShadow: "0px 0px 17px 0px rgba(203, 203, 203, 0.45)" }}
        />
      </div>
      <div className="xl:mt-[30px] mt-[20px]">
        <input
          onChange={(e) =>
            setInputs({
              ...inputs,
              address: e.target.value,
            })
          }
          type="text"
          placeholder="Address"
          className="h-[65px] lg:h-[70px]  2xl:h-[78px] bg-[#fff] placeholder:text-[#696969] lg:text-xl text-base font-medium d w-full xl:px-[34px] px-[20px] focus:outline-none"
          style={{ boxShadow: "0px 0px 17px 0px rgba(203, 203, 203, 0.45)" }}
        />
      </div>
      <div className="xl:mt-[30px] mt-[20px]">
        <input
          onChange={(e) =>
            setInputs({
              ...inputs,
              date: e.target.value,
            })
          }
          type="date"
          placeholder="Select Date"
          className="h-[65px] lg:h-[70px]  2xl:h-[78px] bg-[#fff] placeholder:text-[#696969] lg:text-xl text-base font-medium d w-full xl:px-[34px] px-[20px] focus:outline-none"
          style={{ boxShadow: "0px 0px 17px 0px rgba(203, 203, 203, 0.45)" }}
        />
      </div>
      <div className="xl:mt-[30px] mt-[20px]">
        <textarea
          onChange={(e) =>
            setInputs({
              ...inputs,
              message: e.target.value,
            })
          }
          placeholder="Message"
          className="xl:py-[25px] py-[15px] h-[216px] resize-none bg-[#fff] placeholder:text-[#696969] lg:text-xl text-base font-medium d w-full xl:px-[34px] px-[20px] focus:outline-none"
          style={{ boxShadow: "0px 0px 17px 0px rgba(203, 203, 203, 0.45)" }}
        ></textarea>
      </div>

      <div className="mt-10 flex justify-center gap-5">
        <Button
          onClick={() => setActive(3)}
          className="bg-[#eceffa] !text-[#4161C8]"
        >
          <ButtonPrevArrow /> Previous
        </Button>

        <Button
          disabled={
            inputs?.name &&
            inputs?.email &&
            inputs?.phone &&
            inputs?.address &&
            inputs?.date &&
            inputs?.message
              ? false
              : true
          }
          className=""
          onClick={handleSubmit}
          isLoading={isLoading}
        >
          Submit
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
