import React, { useState } from "react";

const FaqCard = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  return (
    <div
      className={`w-full overflow-hidden border-t h-full transition-all duration-500 ${
        isExpanded ? " max-h-[500px]" : "max-h-[100px]"
      } border-white py-10`}
    >
      <div
        onClick={() => setIsExpanded(!isExpanded)}
        className=" h-[100px] font-medium text-2xl flex justify-between"
      >
        <span>Lorem ipsum dolor sit.</span>
        <div className={`w-[28px] h-[28px] transition-all duration-500 ${isExpanded ? "rotate-90" : ""}`}>
          <svg
            width="29"
            height="28"
            viewBox="0 0 29 28"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M13.48 1.67422L25.98 14.1742L13.48 26.6742"
              stroke="#7A7A7A"
              className={`transition-all ${!isExpanded ? "stroke-[#7a7a7a]" : "stroke-[#ff6600]"}`}
              strokeWidth="3"
            />
            <path
              d="M25.9799 14.1741H2.90294"
              stroke="#7A7A7A"
              className={`transition-all ${!isExpanded ? "stroke-[#7a7a7a]" : "stroke-[#ff6600]"}`}
              strokeWidth="3"
            />
          </svg>
        </div>
      </div>
      <p className="text-[#ffffff80] text-xl">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tenetur
        deleniti enim qui fugit harum pariatur saepe, soluta ex corporis fuga.
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tenetur
        deleniti enim qui fugit harum pariatur saepe, soluta ex corporis fuga.
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tenetur
        deleniti enim qui fugit harum pariatur saepe, soluta ex corporis fuga.
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tenetur
        deleniti enim qui fugit harum pariatur saepe, soluta ex corporis fuga.
      </p>
    </div>
  );
};

export default FaqCard;
