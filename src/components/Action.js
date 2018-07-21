import React from 'react';
import CheckIcon from "../assets/icons/CheckIcon";

const Action = (props) => {

  return (
    <div>
      <div onClick={props.handlePick}>{props.data ? <CheckIcon /> : ""}</div>
    </div>
  );
};
export default Action