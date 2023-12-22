import styles from "./page.module.css";

import Link from "next/link";

import EndFiller from "../../comps/endFiller";

export default function ContainTheStrain() {
  return (
    <>
      <div className={styles.covidGameContainer}>
        <div className={styles.covidGameInnerContainer}>
          <h1>Contain The Strain Demonstration Video</h1>
          <h4>
            <Link href="/portfolio">Click To Go Back To My Portfolio</Link>
          </h4>
          <video width="90%" height="auto" controls>
            <source src="/Demo1.mp4" type="video/mp4" />
          </video>
        </div>
        <EndFiller />
      </div>
    </>
  );
}
