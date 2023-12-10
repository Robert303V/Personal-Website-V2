import React from "react";
import styles from "./index.module.css";
import Link from "next/link";
import Image from "next/image";

import Headshot from "../../../public/headshots/HeadshotCircle.png";

export default function Navbar() {
  return (
    // replace everything in between the <header> & <header /> tags
    // with your navbar code from your earlier milestones
    <header>
      <nav className={styles.navbar}>
        <Link href="/">
          <Image
            className={styles.navbarImg}
            src={Headshot}
            alt="My Headshot"
            width={70}
            height={70}
          />
        </Link>
        <ul className={styles.navList}>
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/contact">Contact</Link>
          </li>
          <li>
            <Link href="/portfolio">Portfolio</Link>
          </li>
          <li>
            <Link href="/blog">Blog</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
