import React from "react";

import {
  UilPhone,
  UilEnvelope,
  UilGithub,
  UilLinkedin,
  UilInstagram,
} from "@iconscout/react-unicons";

import Button from "../contactButton";
import styles from "./index.module.css";

interface RowProps {
  type: string;
}

const Row = ({ type }: RowProps) => {
  let icon = null;
  let button = null;
  let copy = null;
  let text = null;
  if (type == "email") {
    icon = <UilEnvelope size="30" color="#000000" />;
    button = (
      <Button
        text="Robert303V@gmail.com"
        onPress={() => window.open("mailto:Robert303V@gmail.com")}
        type1={true}
      />
    );
    copy = (
      <Button
        text="Copy Email"
        onPress={() => navigator.clipboard.writeText("Robert303V@gmail.com")}
        type1={false}
      />
    );
    text = "Email";
  } else if (type == "phone") {
    icon = <UilPhone size="30" color="#000000" />;
    button = <Button text="(+1) 303-717-9927" type1={true} />;
    copy = (
      <Button
        text="Copy Number"
        onPress={() => navigator.clipboard.writeText("+13037179927")}
        type1={false}
      />
    );
    text = "Phone Number";
  } else if (type == "linkedin") {
    icon = <UilLinkedin size="30" color="#000000" />;
    button = (
      <Button
        text="Robert303V"
        onPress={() =>
          window.open("https://www.linkedin.com/in/Robert303V", "_blank")
        }
        type1={true}
      />
    );
    copy = (
      <Button
        text="Copy Link"
        onPress={() =>
          navigator.clipboard.writeText(
            "https://www.linkedin.com/in/Robert303V"
          )
        }
        type1={false}
      />
    );
    text = "LinkedIn";
  } else if (type == "github") {
    icon = <UilGithub size="30" color="#000000" />;
    button = (
      <Button
        text="R303Vermeulen"
        onPress={() =>
          window.open("https://www.github.com/R303Vermeulen", "_blank")
        }
        type1={true}
      />
    );
    copy = (
      <Button
        text="Copy Link"
        onPress={() =>
          navigator.clipboard.writeText("https://www.github.com/R303Vermeulen")
        }
        type1={false}
      />
    );
    text = "Github";
  } else if (type == "insta") {
    icon = <UilInstagram size="30" color="#000000" />;
    button = (
      <Button
        text="RobertVermeulen_"
        onPress={() =>
          window.open("https://www.instagram.com/RobertVermeulen_/", "_blank")
        }
        type1={true}
      />
    );
    copy = (
      <Button
        text="Copy Link"
        onPress={() =>
          navigator.clipboard.writeText(
            "https://www.instagram.com/RobertVermeulen_/"
          )
        }
        type1={false}
      />
    );
    text = "Instagram";
  }
  return (
    <div className={styles.contactCol}>
      <div className={styles.contactTitleRow}>
        {icon}
        <div className={styles.rowTitle}>{text}</div>
      </div>
      <div className={styles.contactInfoRow}>
        {button}
        {copy}
      </div>
    </div>
  );
};

export default Row;
