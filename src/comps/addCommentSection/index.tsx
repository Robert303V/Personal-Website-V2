"use client";

import { useState } from "react";
import Button from "../button";
import Textbox from "../textbox";

import putBlogComment from "../../helpers/putBlogComment";
import putPortfolioComment from "../../helpers/putPortfolioComment";
import CommentType from "../../types/commentType";

import styles from "./index.module.css";

function AddCommentSection({
  params,
}: {
  params: { slug: string; type: string };
}) {
  const [creating, setCreating] = useState(false);
  const [userText, setUserText] = useState("");
  const [commentText, setCommentText] = useState("");
  const [noUser, setNoUser] = useState(false);
  const [noComment, setNoComment] = useState(false);
  const [userTooShort, setUserTooShort] = useState(false);
  const [once, setOnce] = useState(false);

  const cancelCreating = () => {
    setCreating(false);
    setUserText("");
    setCommentText("");
  };

  const addComment = async () => {
    let valid = true;
    if (userText.trim() == "" || noUser) {
      setNoUser(true);
      setUserTooShort(false);
      valid = false;
    }

    if (commentText.trim() == "" || noComment) {
      setNoComment(true);
      setUserTooShort(false);
      valid = false;
    }

    if (valid && userText.trim().length < 2) {
      setUserTooShort(true);
      valid = false;
    }

    if (!valid) {
      return;
    }

    const createdComment: CommentType = {
      user: userText,
      comment: commentText,
      date: new Date(),
    };

    cancelCreating();
    try {
      if (params.type == "blog") {
        const result = await putBlogComment(params.slug, createdComment).then(
          () => {
            window.location.reload();
          }
        );
        console.log("Comment added successfully:", result);
      } else if (params.type == "portfolio") {
        console.log("lkdjfa;lkjf");
        const result = await putPortfolioComment(
          params.slug,
          createdComment
        ).then(() => {
          window.location.reload();
        });
        console.log("Comment added successfully:", result);
      }
    } catch (error) {
      console.error("Error adding comment:", error);
    }
  };

  const userTextSetter = (text: string) => {
    if (text[text.length - 1] != "\n" && text.length < 60) {
      setUserText(text);
      if (text.trim() != "") {
        setNoUser(false);
      }
      if (text.trim().length > 1) {
        setUserTooShort(false);
      }
    }
  };

  const commentTextSetter = (text: string) => {
    if (text[text.length - 1] != "\n") {
      setCommentText(text);
      if (text.trim() != "") {
        setNoComment(false);
      }
    }
    if (text[text.length - 1] == "\n") {
      addComment();
    }
  };

  return (
    <div>
      {creating ? (
        <div className={styles.postingSection}>
          <div className={styles.twoButtons}>
            <Button
              text="Post Comment"
              onPress={addComment}
              download={false}
              homepage={false}
            />
            <Button
              text="Cancel"
              onPress={cancelCreating}
              download={false}
              homepage={false}
            />
          </div>
          <div>
            {noUser && noComment ? (
              <p className={styles.warningText}>
                Please Add Your Name & Write a Comment to Post!
              </p>
            ) : null}
            {noUser && !noComment ? (
              <p className={styles.warningText}>
                Please Add Your Name To Post!
              </p>
            ) : null}
            {noComment && !noUser ? (
              <p className={styles.warningText}>
                Please Write a Comment To Post!
              </p>
            ) : null}
            {userTooShort ? (
              <p className={styles.warningText}>
                Name Must Contain at Least 2 Letters
              </p>
            ) : null}
          </div>
          <p className={styles.textboxTitle}>Your Name</p>
          <Textbox type1={true} text={userText} setText={userTextSetter} />
          <p className={styles.textboxTitle}>Your Comment</p>
          <Textbox
            type1={false}
            text={commentText}
            setText={commentTextSetter}
          />
        </div>
      ) : (
        <>
          <Button
            text="Add Comment"
            onPress={() => setCreating(true)}
            download={false}
            homepage={false}
          />
        </>
      )}
    </div>
  );
}

export default AddCommentSection;
