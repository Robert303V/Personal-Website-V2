"use client";

import React, { useRef, ChangeEvent } from "react";
import styles from "./index.module.css";

interface AutoSizeTextboxProps {
  type1: boolean;
  text: string;
  setText: any;
}

function AutoSizeTextbox({ type1, text, setText }: AutoSizeTextboxProps) {
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  const handleChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
    setText(event.target.value);
  };

  return (
    <textarea
      ref={textareaRef}
      value={text}
      onChange={handleChange}
      className={type1 ? styles.textbox1 : styles.textbox2}
    />
  );
}

export default AutoSizeTextbox;
