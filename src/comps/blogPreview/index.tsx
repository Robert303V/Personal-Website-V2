import Image from "next/image";

import styles from "./index.module.css";

import ImagePicker from "./imagePicker";

interface BlogPreviewProps {
  title: string;
  date: string;
  image: string;
  flip: boolean;
  end: boolean;
}

const BlogPreview = (props: BlogPreviewProps) => {
  const mainClass = props.flip
    ? styles.bpSideBySideReverse
    : styles.bpSideBySide;

  const itemImage = ImagePicker(props.image);

  return (
    <div className={mainClass}>
      <Image src={itemImage} alt="Blog Image" height={300} />
      <div className={styles.details}>
        <div className={styles.textContainer}>
          <div className={styles.text}>
            <h2>{props.title}</h2>
          </div>
        </div>
        <div className={styles.textContainer}>
          <div className={styles.text}>
            <p>{props.date}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogPreview;
