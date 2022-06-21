import React from "react";
import { ButtonProps } from "../../../src/types/PropTypes";

function ButtonComponent({ title, type }: ButtonProps) {
  return (
    <>
      <div className="mb-2">
        <button type={type} className="btn btn-primary btn-lg mt-3">
          {title}
        </button>
      </div>
    </>
  );
}
export default ButtonComponent;
