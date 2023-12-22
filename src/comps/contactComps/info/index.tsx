import Row from "../row";

import styles from "./index.module.css";
import globals from "../../../app/globals.module.css";

export default function Info() {
  return (
    <div className={styles.contactInfo}>
      <h1 className={globals.pageTitle}>Contact Information</h1>
      <Row type="email" />
      <Row type="phone" />
      <Row type="linkedin" />
      <Row type="github" />
      <Row type="insta" />
    </div>
  );
}
