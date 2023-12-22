//import styles from './index.module.tsx';
import styles from "./index.module.css";

type CommentType = {
  user: string;
  comment: string;
  date: Date;
};

function BlogComment(props: CommentType) {
  const day = props.date.toLocaleString("en-US", {
    year: "numeric",
    month: "2-digit",
    day: "numeric",
  });
  const time = props.date.toLocaleString("en-US", {
    hour: "numeric",
    minute: "numeric",
    hour12: true,
  });

  return (
    <div className={styles.commentOuterContainer}>
      <div className={styles.commentInnerContainer}>
        <p>"{props.comment}"</p>
        <div className={styles.line} />
        <p>
          Written by <br />
          {props.user}
          <br /> on {day} at {time}
        </p>
      </div>
    </div>
  );
}

export default BlogComment;
