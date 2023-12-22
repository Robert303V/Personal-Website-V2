"use client";

import styles from "./page.module.css";

import EndFiller from "../../comps/endFiller";
import ContactMe from "../../comps/contactComps/contactMe";
import ContactInfo from "../../comps/contactComps/info";

export default function Contact() {
  return (
    <>
      <div className={styles.contact}>
        <div className={styles.contactContainer}>
          <ContactInfo />
          <ContactMe /> 
        </div>
        <EndFiller />
      </div>
    </>
  );
}
