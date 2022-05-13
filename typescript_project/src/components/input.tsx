import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";

export interface IInputProps {
  name: string;
  type: string;
  validate?: RegExp;
  errorMessage?: string;
  checkInput: (e: string, v: string, n: string) => void;
}
export function Input(props: IInputProps) {
  const [error, setError] = useState("");

  const [value, setValue] = useState("");
  useEffect(() => {
    props.checkInput(error, value, props.name.toLowerCase());
  }, [error, value]);
  function handleOnChange(e: React.ChangeEvent<HTMLInputElement>) {
    let input = e.target.value;
    setValue(input);
    if (!props.validate?.test(input)) {
      setError(props.errorMessage ?? "");
    } else {
      setError("");
    }
  }
  return (
    <div className="form-group">
      <label>{props.name}</label>
      <input
        onChange={handleOnChange}
        type={props.type}
        className="form-control"
        placeholder={`Enter ${props.name.toLowerCase()}`}
        min="0"
      />
      <span className="text text-danger">{error}</span>
    </div>
  );
}
