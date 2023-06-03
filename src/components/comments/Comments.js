import { useState, useEffect, useCallback } from "react";
import { useParams } from "react-router";

import classes from "./Comments.module.css";
import NewCommentForm from "./NewCommentForm";
import useHttp from "../../hooks/use-http";
import { getAllComments } from "../../lib/api";
import LoadingSpinner from "../UI/LoadingSpinner";
import CommentsList from "./CommentsList";
const Comments = (props) => {
  const [isAddingComment, setIsAddingComment] = useState(false);
  const params = useParams();

  const storyID = props.storyID ? props.storyID : params.storyID;

  const {
    sendRequest,
    data: loadedData,
    status,
  } = useHttp(getAllComments);

  const startAddCommentHandler = () => {
    setIsAddingComment(true);
  };

  useEffect(() => {
    sendRequest(storyID);
  }, [storyID, sendRequest]);

  let comments;

  if (status === "pending") {
    comments = (
      <div className="centered">
        <LoadingSpinner />
      </div>
    );
  }

  if (status === "completed" && loadedData && loadedData.length > 0) {
    comments = <CommentsList comments={loadedData} />;
  }

  if (status === "completed" && loadedData && loadedData.length === 0) {
    comments = <p className="centered">No comments were add yet!</p>;
  }

  const onAddedCommentHandler = useCallback(()=>{
    sendRequest(storyID)
  },[sendRequest,storyID])

  return (
    <section className={classes.comments}>
      <h3>💬 Comments</h3>
      {comments}
      <NewCommentForm
          onAddedComment={onAddedCommentHandler}
          storyID={storyID}
      />
    </section>
  );
};

export default Comments;
