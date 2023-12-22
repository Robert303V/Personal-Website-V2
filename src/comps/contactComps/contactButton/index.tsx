"use client";

import React from "react";
import styles from "./index.module.css";

interface ButtonProps {
  text: string;
  onPress?: () => void;
  type1: boolean;
}

const Button = ({ text, onPress, type1 }: ButtonProps) => {
  let mainclass = styles.button;
  if (onPress == null) {
    mainclass = styles.buttnh;
  }
  return (
    <button
      className={mainclass}
      onClick={onPress}
      type="button"
      style={{
        width: type1 ? "200px" : "120px",
        marginLeft: type1 ? "10px" : "",
        marginRight: type1 ? "0px" : "10",
      }}
    >
      {text}
    </button>
  );
};

export default Button;
