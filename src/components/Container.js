import React from "react";

const Container = ({ children, width }) => {
  return (
    <div
      className={`bg-coolors-gradient p-4 rounded-xl shadow-md${
        width ? width : ""
      }`}
    >
      {children}
    </div>
  );
};

export default Container;
