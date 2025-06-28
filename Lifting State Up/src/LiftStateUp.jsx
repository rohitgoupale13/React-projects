import { useState } from "react";

const LiftStateUp = () => {
      const [InputValue, SetInputValue] = useState("");

  return (
    <>
      <InputComponent InputValue={InputValue} SetInputValue={SetInputValue}/>
      <DisplayComponent InputValue={InputValue} />
    </>
  );
};

const InputComponent = ({InputValue,SetInputValue}) => {
  return (
    <input
      type="text"
      placeholder="Enter text here"
      value={InputValue}
      onChange={(e) => {
        SetInputValue(e.target.value);
      }}
    ></input>
  );
};
const DisplayComponent = ({InputValue}) => {
  return <h3>Your current value is:- {InputValue}</h3>;
};

export default LiftStateUp;
