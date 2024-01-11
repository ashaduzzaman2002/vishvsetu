import React from "react";

const Heading = ({title}) => {
  return (
    <div>
      <h1 className="text-center font-bold text-[#4161C8] lg:text-[35px] text-[28px] max-w-[510px] mx-auto mb-[30px]">
        {title}
      </h1>
    </div>
  );
};

export default Heading;
