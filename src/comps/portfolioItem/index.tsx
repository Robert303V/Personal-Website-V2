"use client";

import { useEffect } from "react";

import styles from "./index.module.css";

import Linked from "./Linked";
import LinkedImage from "./LinkedImage";

import ReviewsImg from "../../../public/portfolio/ReviewsPage.png";
import GamesImg from "../../../public/portfolio/GamesAndDesigns.png";
import UrbanUnrestImg from "../../../public/portfolio/UrbanUnrest.png";
import ContainTheStrainImg from "../../../public/portfolio/ContainTheStrain.png";
import PersonalSiteImg from "../../../public/portfolio/PersonalWebsite.png";

const ImagePicker = (image: any) => {
  if (image == "Reviews") {
    return ReviewsImg;
  }
  if (image == "Games") {
    return GamesImg;
  }
  if (image == "Urban") {
    return UrbanUnrestImg;
  }
  if (image == "Contain") {
    return ContainTheStrainImg;
  }
  if (image == "Personal") {
    return PersonalSiteImg;
  }
  return "";
};

interface PortfolioItemProps {
  title: string;
  image: any;
  link: string;
  linkText: string;
  desc: string;
  newtab: boolean;
  flip: boolean;
  end: boolean;
  double: boolean;
  t2: string;
  d2: string;
}

const PortfolioItem = (props: PortfolioItemProps) => {
  let itemID = "";
  props.flip ? (itemID += "containerToFlip") : null;
  itemID += props.title;
  
  const mainClass = (props.end ? styles.pSideBySideEnd : styles.pSideBySide);

  const updateLayout = () => {
    const screenWidth = window.innerWidth;
    const sideBySideContainer = document.getElementById(itemID);
    const lineElement = document.getElementById("line");

    if (sideBySideContainer && props.flip) {
      if (screenWidth < 1000) {
        sideBySideContainer.style.flexDirection = "column";
      } else {
        sideBySideContainer.style.flexDirection = "row-reverse";
      }
    }

    if (lineElement) {
      if (screenWidth < 1000) {
        lineElement.style.width = "100%";
        lineElement.style.height = "1px";
        lineElement.style.backgroundColor = "black";
      } else {
        lineElement.style.width = "1px";
        lineElement.style.height = "200px";
        lineElement.style.backgroundColor = "black";
      }
    }
  };

  useEffect(() => {
    updateLayout();
    window.addEventListener("resize", updateLayout);

    return () => {
      window.removeEventListener("resize", updateLayout);
    };
  }, []);

  const itemImage = ImagePicker(props.image);

  if (props.double == false) {
    return (
      <div className={mainClass} id={itemID}>
        <LinkedImage
          link={props.link}
          image={itemImage}
          newtab={props.newtab}
        />
        <div className={styles.projectDetails}>
          <div className={styles.projectTitle}>
            <h3>{props.title}</h3>
          </div>
          <div className={styles.projectLink}>
            <Linked
              link={props.link}
              linkText={props.linkText}
              newtab={props.newtab}
            />
          </div>
          <div className={styles.projectDescription}>
            <p>{props.desc}</p>
            <br />
          </div>
        </div>
      </div>
    );
  }
  return (
    <div className={mainClass} id={itemID}>
      <div className={styles.projectDetails2}>
        <div className={styles.projectTitle}>
          <h3>{props.title}</h3>
        </div>
        <div className={styles.projectDescription}>
          <p>{props.desc}</p>
          <br />
        </div>
      </div>
      <div id="line"></div>
      <div className={styles.projectDetails2}>
        <div className={styles.projectTitle}>
          <h3>{props.t2}</h3>
        </div>
        <div className={styles.projectDescription}>
          <p>{props.d2}</p>
          <br />
        </div>
      </div>
    </div>
  );
};

export default PortfolioItem;
