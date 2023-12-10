//import styles from './index.module.tsx';
import CommentType from "../../types/commentType";

function BlogComment(props: CommentType) {
  return (
    <div>
      <p>User: {props.user}</p>
      <p>Comment: {props.comment}</p>
      <p>
        Date:{" "}
        {props.date.toLocaleString("en-US", {
          year: "numeric",
          month: "2-digit",
          day: "numeric",
          hour: "numeric",
          minute: "numeric",
          hour12: true
        })}
      </p>
    </div>
  );
}

export default BlogComment;
