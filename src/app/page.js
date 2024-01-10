import { cover } from "@/assets";
import Country from "@/components/home/Country";
import Heading from "@/components/home/Heading";
import { Step, StepLabel, Stepper } from "@mui/material";
import Image from "next/image";
import React from "react";
const steps = ["1", "2", "3", "4", "5"];

const Home = () => {
  return (
    <div>
      <div className="container pb-[50px] pt-[100px] grid lg:grid-cols-2 grid-cols-1 relative">
        <div className="h-full relative z-10">
          <Heading />
          <Stepper activeStep={0} alternativeLabel>
            {steps.map((label) => (
              <Step key={label}>
                <StepLabel></StepLabel>
              </Step>
            ))}
          </Stepper>
          <Country />
        </div>

        <div className="hidden lg:block fixed right-0 top-32 w-full ">
          <div className="container grid grid-cols-2">
          <div></div>
          <Image src={cover} className="w-[88%] ml-auto" />
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default Home;
