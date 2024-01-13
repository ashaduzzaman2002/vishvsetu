"use client";
import { cover } from "@/assets";
import Country from "@/components/home/Country";
import Heading from "@/components/home/Heading";
import Page2 from "@/components/home/Page2";
import Page3 from "@/components/home/Page3";
import Page4 from "@/components/home/Page4";
import Page5 from "@/components/home/Page5";
import SuccessModal from "@/components/home/SuccessModal";
import { Button, Step, StepLabel, Stepper } from "@mui/material";
import Image from "next/image";
import React, { useState } from "react";
const steps = ["1", "2", "3", "4", "5"];

const Home = () => {
  const [active, setActive] = useState(0);
  const [inputs, setInputs] = useState({});

  const [modalOpen, setModalOpen] = useState(false);

  const handleModalOpen = () => {
    setModalOpen(true);
  };

  const handleModalClose = () => {
    setModalOpen(false);
  };
  return (
    <div>
      {/* Success Modal */}
      <SuccessModal open={modalOpen} handleClose={handleModalClose} />
      <div className="container pb-[50px] pt-[100px] grid lg:grid-cols-2 grid-cols-1 relative">
        <div className="h-full relative z-10">
          <Heading
            title={
              active === 0
                ? "Book Your Time Slot Now And Save Your Time"
                : active === 1
                ? "Book Your Time Slot Now And Save Your Time"
                : active === 2
                ? "What's your highest level of education?"
                : active === 3
                ? "Just one last step! Provide your details to start your study abroad journey"
                : "Just one last step! Provide your details to start your study abroad journey"
            }
          />

          <Stepper activeStep={active} alternativeLabel>
            {steps.map((label) => (
              <Step key={label}>
                <StepLabel></StepLabel>
              </Step>
            ))}
          </Stepper>
          {active === 0 ? (
            <Country
              inputs={inputs}
              setInputs={setInputs}
              setActive={setActive}
            />
          ) : active === 1 ? (
            <Page2
              inputs={inputs}
              setInputs={setInputs}
              setActive={setActive}
            />
          ) : active === 2 ? (
            <Page3
              inputs={inputs}
              setInputs={setInputs}
              setActive={setActive}
            />
          ) : active === 3 ? (
            <Page4
              inputs={inputs}
              setInputs={setInputs}
              setActive={setActive}
            />
          ) : (
            <Page5
              inputs={inputs}
              setInputs={setInputs}
              setActive={setActive}
              handleModalOpen={handleModalOpen}
            />
          )}
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
