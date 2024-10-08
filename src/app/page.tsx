"use client";

import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";

import styles from "./page.module.css";
import globals from "./globals.module.css";

import Headshot from "../../public/headshots/HeadshotSquare.jpg";
import Skishot from "../../public/headshots/HeadshotSki.jpg";

import Button from "../comps/button";
import EndFiller from "../comps/endFiller";

export default function Home() {
  const router = useRouter();

  return (
    <>
      <div className={styles.about}>
        <div className={styles.aboutContainer}>
          <div className={styles.sideBySide}>
            <div className={styles.innerSBS}>
              <h1 className={globals.pageTitle}>Meet Robert Vermeulen</h1>
            </div>
            <div className={styles.innerSBS}>
              <Button
                text="Download Resume"
                onPress={() => {}}
                download={true}
                homepage={true}
              />
              <Button
                text="Portfolio"
                onPress={() => router.push("/portfolio")}
                download={false}
                homepage={true}
              />
              <Button
                text="Contact Me"
                onPress={() => router.push("/contact")}
                download={false}
                homepage={true}
              />
            </div>
          </div>
          <div className={styles.sideBySide}>
            <div className={styles.innerSBS}>
              <p className={styles.aboutText}>
                My Name is Robert, I'm a Computer Science major with a minor in
                Mathematics at Cal Poly San Luis Obispo, and Computer Science
                Intern for the California ISO. I graduate this December, and
                will be looking for full time roles in software engineering. I
                love technology because of it's ability to improve people's
                lives at an easily scalable level, and have a strong desire to
                use my career in software to assist those who need it most.
                <br />
                <br />
                This fall and the past summer, I've been working with the
                California ISO to develop an internal library of dynamic
                components w/ 100% test coverage. I've also utilized this
                library to reconstruct and modernize a data portal for the
                company, and developed a robust API using Spring Boot to deliver
                the results to the data portal. To learn more about my work
                experience, please check out my resume!
              </p>
            </div>
            <div className={styles.innerSBS}>
              <Image
                className={styles.aboutImage}
                src={Headshot}
                alt="My Headshot"
                width={300}
                height={300}
              />
            </div>
          </div>
          <div className={styles.sideBySide2} id="containerToFlip">
            <div className={styles.innerSBS}>
              <Image
                className={styles.aboutImage}
                src={Skishot}
                alt="A picture of me with my skis"
                width={300}
                height={300}
              />
            </div>
            <div className={styles.innerSBS}>
              <p className={styles.aboutText2}>
                I have a strong passion for community service, especially mental
                health awareness & suicide prevention. Checkout the nonprofit I
                helped found,&nbsp;
                <Link href="https://robbies-hope.com/" target="_blank">
                  Robbies&nbsp;Hope!
                </Link>
                <br />
                <br />
                My other hobbies include skiing, surfing, photography, camping,
                and live music.
                <br />
                Some of the most fun facts about me are:
                <br />
                <ul>
                  <li>One time I built an igloo and slept in it that night.</li>
                  <li>When I was a kid, I shook Barack Obama's hand.</li>
                  <li>
                    I've been pulled up on stage at two seperate concerts.
                  </li>
                </ul>
                Thank you for visiting my Personal Site!
              </p>
            </div>
          </div>
        </div>
        <EndFiller />
      </div>
    </>
  );
}
