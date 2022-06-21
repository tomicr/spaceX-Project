import React from "react";
import { InputComponentProps } from "../../types/PropTypes";

function InputComponent(props: InputComponentProps) {
  return (
    <div>
      <input
        type="text"
        className="mt-3 bg-transparent input-group-text"
        {...props}
      />
    </div>
  );
}
export default InputComponent;
