import styles from "./index.module.css";
import Image from "next/image";

interface UrbanUnrestQProps {
  title?: string;
  image1?: any;
  description1?: any;
  description2?: any;
  image2?: any;
  end?: boolean;
}

const UrbanUnrestQ = (props: UrbanUnrestQProps) => {
  if (props.end) {
    return (
      <div className={styles.urbanUnrestQEnd}>
        <div className={styles.urbanUnrestQTitle}>
          <h4>{props.title}</h4>
        </div>
        <div className={styles.urbanUnrestQDescription}>
          {props.description1}
        </div>
        <div className={styles.urbanUnrestQImg}>
          <Image
            src={props.image1}
            alt="Output Graph"
            width={1}
            height={1}
            layout="responsive"
            align-self="center"
          />
        </div>
        <div className={styles.urbanUnrestQDescription}>
          {props.description2}
        </div>
      </div>
    );
  }

  return (
    <div className={styles.urbanUnrestQ}>
      <div className={styles.urbanUnrestQTitle}>
        <h4>{props.title}</h4>
      </div>
      <div className={styles.urbanUnrestQDescription}>{props.description1}</div>
      <div className={styles.urbanUnrestQImg}>
        <Image
          src={props.image1}
          alt="Output Graph"
          width={1}
          height={1}
          layout="responsive"
          align-self="center"
        />
      </div>
      <div className={styles.urbanUnrestQDescription}>{props.description2}</div>
      {props.image2 ? (
        <div className={styles.urbanUnrestQImg2}>
          <Image
            src={props.image2}
            alt="Output Graph"
            width={1}
            height={1}
            layout="responsive"
            align-self="center"
          />
        </div>
      ) : null}
    </div>
  );
};

export default UrbanUnrestQ;
