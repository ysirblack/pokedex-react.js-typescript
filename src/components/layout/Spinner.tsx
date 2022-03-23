import React from "react";
import spinner from "./assets/spinner.gif";

const Spinner: React.FC = () => {
  return (
    <div className="w-100 mt-20">
      <img width={180} src={spinner} className="text-center mx-auto" alt="Loading..." />
    </div>
  );
};

export default Spinner;
