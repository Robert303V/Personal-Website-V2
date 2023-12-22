"use client";

import BlogComment from "../blogComment";

import CommentType from "../../types/commentType";

import styles from "./index.module.css";

type BlogCommentProps = {
  comments: CommentType[];
};

function CommentSection(props: BlogCommentProps) {
  return (
    <div className={styles.commentsContainer}>
      {props.comments.length > 0 ? (
        props.comments.map((blogCommentObj: CommentType) => (
          <BlogComment
            user={blogCommentObj.user}
            comment={blogCommentObj.comment}
            date={new Date(blogCommentObj.date)}
            key={blogCommentObj.user + String(blogCommentObj.date)}
          />
        ))
      ) : (
        <p>There Are No Comments Yet, You Should Add One!</p>
      )}
    </div>
  );
}

export default CommentSection;
