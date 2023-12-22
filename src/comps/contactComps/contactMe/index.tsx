"use client";

import { useState } from "react";
import validator from "validator";

import Button from "../../button";
import Textbox from "../../textbox";

import sendEmail from "../../../helpers/sendEmail";

import styles from "./index.module.css";
import globals from "../../../app/globals.module.css";

type inputType = {
  name: string;
  email: string;
  message: string;
};

type existsType = {
  name: boolean;
  email: boolean;
  message: boolean;
};

function AddCommentSection() {
  const [input, setInput] = useState<inputType>({
    name: "",
    email: "",
    message: "",
  });
  const [exists, setExists] = useState<existsType>({
    name: true,
    email: true,
    message: true,
  });
  const [emailValid, setEmailValid] = useState(true);
  const [sent, setSent] = useState(false);

  const clear = () => {
    setInput({
      name: "",
      email: "",
      message: "",
    });
    setExists(() => ({
      name: true,
      email: true,
      message: true,
    }));
    setEmailValid(true);
    setSent(false);
  };

  const emailSender = async () => {
    sendEmail(input);
    clear();
    setSent(true);
  };

  const trySendEmail = () => {
    setSent(false);
    if (input.name.trim() == "") {
      setExists((prevState) => ({
        ...prevState,
        name: false,
      }));
      return;
    }

    if (input.email.trim() == "") {
      setExists((prevState) => ({
        ...prevState,
        email: false,
      }));
      return;
    }

    if (input.message.trim() == "") {
      setExists((prevState) => ({
        ...prevState,
        message: false,
      }));
      return;
    }

    if (!validator.isEmail(input.email)) {
      setEmailValid(false);
      return;
    }

    emailSender();
  };

  const nameTextSetter = (text: string) => {
    setSent(false);
    if (text[text.length - 1] != "\n") {
      setInput((prevState) => ({
        ...prevState,
        name: text,
      }));
      if (text.trim() != "") {
        setExists((prevState) => ({
          ...prevState,
          name: true,
        }));
      }
    }
  };

  const emailTextSetter = (text: string) => {
    setSent(false);
    if (text[text.length - 1] != "\n") {
      setInput((prevState) => ({
        ...prevState,
        email: text,
      }));
      if (text.trim() != "") {
        setExists((prevState) => ({
          ...prevState,
          email: true,
        }));
        if (validator.isEmail(text)) {
          setEmailValid(true);
        }
      }
    }
  };

  const messageTextSetter = (text: string) => {
    setSent(false);
    if (text[text.length - 1] != "\n") {
      setInput((prevState) => ({
        ...prevState,
        message: text,
      }));
      if (text.trim() != "") {
        setExists((prevState) => ({
          ...prevState,
          message: true,
        }));
      }
    }
  };

  return (
    <div className={styles.postingSection}>
      <h1 className={globals.pageTitle}>Send Me a Message</h1>
      <div className={styles.inputRow} style={{ borderTop: "1px solid black" }}>
        <p className={styles.textboxTitle}>Name</p>
        <Textbox type1={true} text={input.name} setText={nameTextSetter} />
      </div>
      <div className={styles.inputRow}>
        <p className={styles.textboxTitle}>Email</p>
        <div className={styles.textbox}>
          <Textbox type1={true} text={input.email} setText={emailTextSetter} />
        </div>
      </div>
      <div className={styles.inputRow}>
        <p className={styles.textboxTitle}>Message</p>
        <Textbox
          type1={false}
          text={input.message}
          setText={messageTextSetter}
        />
      </div>
      <div className={styles.sending}>
        {!exists.name ? (
          <p className={styles.warningText}>
            Please Add Your Name To Send Email!
          </p>
        ) : !exists.email ? (
          <p className={styles.warningText}>
            Please Add Your Email To Send Email!
          </p>
        ) : !exists.message ? (
          <p className={styles.warningText}>
            Please Write a Message To Send Email!
          </p>
        ) : !emailValid ? (
          <p className={styles.warningText}>Please Enter a Valid Email!</p>
        ) : sent ? (
          <p className={styles.warningText}>Email Sent Successfully!</p>
        ) : (
          <p className={styles.clearWarningText}>super secret message</p>
        )}
        <div className={styles.twoButtons}>
          <Button
            text="Send Email"
            onPress={trySendEmail}
            download={false}
            homepage={false}
          />
          <Button
            text="Clear"
            onPress={clear}
            download={false}
            homepage={false}
          />
        </div>
      </div>
    </div>
  );
}

export default AddCommentSection;
