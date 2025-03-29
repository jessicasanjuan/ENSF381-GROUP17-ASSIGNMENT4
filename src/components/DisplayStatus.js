import React from "react";

const DisplayStatus = ({ type, message }) => {
  return (
    <div className={`status ${type}`}>
      <p>{message}</p>
    </div>
  );
};

export default DisplayStatus;
