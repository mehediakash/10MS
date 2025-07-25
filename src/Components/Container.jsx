import React from "react";

const Containar = ({ children, className }) => {
  return (
    <div className={`max-w-[1200px] mx-auto md:px-0 px-5 ${className}`}>
      {children}
    </div>
  );
};

export default Containar;
