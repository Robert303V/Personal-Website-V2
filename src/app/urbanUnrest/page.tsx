import styles from "./page.module.css";

import Link from "next/link";

import EndFiller from "../../comps/endFiller";

import q1 from "../../../public/urbanUnrest/Q1.png";
import q2_2 from "../../../public/urbanUnrest/Q2-2.png";
import q2 from "../../../public/urbanUnrest/Q2.png";
import q3 from "../../../public/urbanUnrest/Q3.png";
import q4 from "../../../public/urbanUnrest/Q4.png";
import q5 from "../../../public/urbanUnrest/Q5.png";

import d1_1 from "../../comps/urbanUnrestQ/descriptions/1-1";
import d1_2 from "../../comps/urbanUnrestQ/descriptions/1-2";
import d2_1 from "../../comps/urbanUnrestQ/descriptions/2-1";
import d2_2 from "../../comps/urbanUnrestQ/descriptions/2-2";
import d3_1 from "../../comps/urbanUnrestQ/descriptions/3-1";
import d3_2 from "../../comps/urbanUnrestQ/descriptions/3-2";
import d4_1 from "../../comps/urbanUnrestQ/descriptions/4-1";
import d4_2 from "../../comps/urbanUnrestQ/descriptions/4-2";
import d5_1 from "../../comps/urbanUnrestQ/descriptions/5-1";
import d5_2 from "../../comps/urbanUnrestQ/descriptions/5-2";

import UrbanUnrestQ from "../../comps/urbanUnrestQ";

const titles = ["Question 1: Distribution of Total Deaths Per Problem Type", 
                "Question 2: Distribution of Total Deaths Per Problem Type Excluding Armed Battle Events in Rwanda",
                "Question 3: Deaths Per Event of Each Problem Type (Excluding the Rwanda Genocide of 1994) vs Deaths Per Event of the Rwanda Genocide of 1994",
                "Question 4: Total Deaths From All Events in Rwanda vs Total Deaths From Events in All Other Countries Combined",
                "Question 5: For Each Country, Whether or Not A Majority of Urban Unrest Deaths Occured Within the Capitol"];


export default function UrbanUnrest() {
  return (
    <>
      <div className={styles.urbanUnrestContainer}>
        <div className={styles.urbanUnrestInnerContainer}>
          <h1>Urban Unrest Database Analysis</h1>
          <h4>
            <Link href="/portfolio">Click To Go Back To My Portfolio</Link>
          </h4>
          <UrbanUnrestQ title={titles[0]} image1={q1} description1={d1_1()} description2={d1_2()}/>
          <UrbanUnrestQ title={titles[1]} image1={q2} description1={d2_1()} description2={d2_2()} image2={q2_2}/>
          <UrbanUnrestQ title={titles[2]} image1={q3} description1={d3_1()} description2={d3_2()}/>
          <UrbanUnrestQ title={titles[3]} image1={q4} description1={d4_1()} description2={d4_2()}/>
          <UrbanUnrestQ title={titles[4]} image1={q5} description1={d5_1()} description2={d5_2()} end={true}/>
        </div>
        <EndFiller />
      </div>
    </>
  );
}
