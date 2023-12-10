"use client";

import { useState, useEffect } from "react";
import Button from "../button";
import Textbox from "../textbox";

import putComment from "../../helpers/putComment";
import CommentType from "../../types/commentType";

import styles from "./index.module.css";

function AddCommentSection({
  params,
}: {
  params: { slug: string };
}) {
  const [creating, setCreating] = useState(false);
  const [userText, setUserText] = useState("");
  const [commentText, setCommentText] = useState("");
  const [noUser, setNoUser] = useState(false);
  const [noComment, setNoComment] = useState(false);
  const [userTooShort, setUserTooShort] = useState(false);

  const cancelCreating = () => {
    setCreating(false);
    setUserText("");
    setCommentText("");
  };

  const userTextSetter = (text: string) => {
    if (text[text.length - 1] != '\n' && text.length < 60) {
      setUserText(text)
      if (text.trim() != "") {
        setNoUser(false);
      }
      if (text.trim().length > 1) {
        setUserTooShort(false);
      }
    }
  }

  const commentTextSetter = (text: string) => {
    if (text[text.length - 1] != '\n') {
      setCommentText(text);
      if (text.trim() != "") {
        setNoComment(false);
      }
    }
  }

  const addComment = async () => {
    let valid = true;
    if (userText.trim() == "" || noUser) {
      setNoUser(true)
      setUserTooShort(false);
      valid = false;
    }

    if (commentText.trim() == "" || noComment) {
      setNoComment(true)
      setUserTooShort(false);
      valid = false;
    }

    if (valid && userText.trim().length < 2) {
      setUserTooShort(true)
      valid = false
    }

    if (!valid) {
      return
    }

    const createdComment: CommentType = {
      user: userText,
      comment: commentText,
      date: new Date(),
    };

    cancelCreating();
    try {
      const result = await putComment(params.slug, createdComment).then(() => {
        window.location.reload();
      });

      console.log("Comment added successfully:", result);
    } catch (error) {
      console.error("Error adding comment:", error);
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
          {noUser && noComment ? <p>Please Add Your Name & Write a Comment to Post!</p> : null}
          {noUser && !noComment ? <p>Please Add Your Name To Post!</p> : null}
          {noComment && !noUser ? <p>Please Write a Comment To Post!</p> : null}
          {userTooShort ? <p>Name Must Contain at Least 2 Letters</p> : null}
          <p>Your Name</p>
          <Textbox type1={true} text={userText} setText={userTextSetter} />
          <p>Your Comment</p>
          <Textbox type1={false} text={commentText} setText={commentTextSetter} />
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
