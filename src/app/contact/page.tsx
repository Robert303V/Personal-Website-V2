import Link from 'next/link'; 

import styles from './page.module.css'
import globals from '../globals.module.css';

import EndFiller from "../../comps/endFiller";

export default function Contact() {
  return (
    <>
      <div className={styles.contact}>
        <div className={styles.contactContainer}>
          <div className={styles.contactText}>
            <h1 className={globals.pageTitle}>Contact Information</h1>
            <p>
              Email:&nbsp;
              <Link href="mailto:Robert303V@gmail.com">
                Robert303V@gmail.com
              </Link>
            </p>
            <p>Phone Number: (+1) 303-717-9927</p>
            <p>LinkedIn:&nbsp;
              <Link href="https://www.linkedin.com/in/robert303v" target="_blank">
                linkedin.com/in/robert303v
              </Link>
            </p>
            <p>Github:&nbsp;
              <Link href="https://www.github.com/R303Vermeulen" target="_blank">
                github.com/R303Vermeulen
              </Link>
            </p>
            <p>Instagram:&nbsp;
              <Link href="https://www.instagram.com/robertvermeulen_/" target="_blank">
                instagram.com/robertvermeulen_
              </Link>
            </p>
            <br />
          </div>
        </div>
        <EndFiller />
      </div>
    </>
  )
}
