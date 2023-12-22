import styles from "./page.module.css";

import Link from "next/link";

import EndFiller from "../../comps/endFiller";

export default function EatAndGreet() {
  return (
    <>
      <div className={styles.eatAndGreetContainer}>
        <div className={styles.eatAndGreetInnerContainer}>
          <h1>Eat & Greet App Demonstration Video</h1>
          <h4 className={styles.h4}>
            <Link href="/portfolio">Click To Go Back To My Portfolio</Link>
          </h4>
          <video width="90%" height="auto" controls>
            <source src="/Demo2.mp4" type="video/mp4" />
          </video>
        </div>
        <EndFiller />
      </div>
    </>
  );
}
