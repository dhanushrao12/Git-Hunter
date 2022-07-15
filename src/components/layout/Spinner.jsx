import React from "react";
import spinner from "./assets/spinner5.gif";

const Spinner = () => {
  return (
    <div className="w-100 mt-20 ">
      <img
        width={300}
        className="text-center mx-auto rounded"
        src={spinner}
        alt="Loading..."
      />
    </div>
  );
};

export default Spinner;
