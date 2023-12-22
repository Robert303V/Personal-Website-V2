"use client";

import styles from "./index.module.css";

import Linked from "./Linked";
import LinkedImage from "./LinkedImage";

import ImagePicker from "./ImagePicker";

interface PortfolioItemProps {
  title: string;
  image: any;
  link: string;
  linkText: string;
  desc: string;
  newtab: boolean;
  flip: boolean;
  end: boolean;
  date: string;
}

const PortfolioItem = (props: PortfolioItemProps) => {
  const mainClass = props.flip ? styles.pSideBySideReverse : styles.pSideBySide;

  const itemImage = ImagePicker(props.image);

  const handleChildClick = (e: any) => {
    e.stopPropagation();
  };

  return (
    <div
      className={mainClass}
      style={{ borderBottom: props.end ? "none" : "1px solid black" }}
    >
      <LinkedImage link={props.link} image={itemImage} newtab={props.newtab} />
      <div className={styles.projectDetails}>
        <h3 className={styles.projectTitle}>{props.title}</h3>
        <div className={styles.projectLink} onClick={handleChildClick}>
          <Linked
            link={props.link}
            linkText={props.linkText}
            newtab={props.newtab}
          />
        </div>
        <p className={styles.projectDescription}>{props.desc}</p>
        <p>{props.date}</p>
      </div>
    </div>
  );
};

export default PortfolioItem;
