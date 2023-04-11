import React, { FC } from "react";
import style from "./style.module.scss";

interface IInputField {
  placeholder: string;
  value?: string;
  name: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const InputField: FC<IInputField> = ({ placeholder, onChange, name }) => {
  return (
    <div className={style.container}>
      <input
        name={name}
        type="text"
        className={style.inputField}
        placeholder={placeholder}
        // value={value}
        onChange={onChange}
      />
    </div>
  );
};

export default InputField;
