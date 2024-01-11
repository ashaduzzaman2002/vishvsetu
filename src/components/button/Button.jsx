import React from "react";

const Button = ({ children, className, disabled, onClick }) => {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`bg-[#4161C8] flex items-center gap-[9px] py-3 px-[30px] rounded-3xl text-lg font-bold text-white ${className} disabled:opacity-55 disabled:cursor-not-allowed`}
    >
      {children}
    </button>
  );
};

export default Button;
