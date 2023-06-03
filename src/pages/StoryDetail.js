import { Fragment, useEffect } from "react";
import { useParams, Route, Link, useRouteMatch } from "react-router-dom";

import Comments from "../components/comments/Comments";
import HighlightedStory from "../components/story/HighlightedStory";
import NoStoriesFound from "../components/story/NoStoriesFound";
import useHttp from "../hooks/use-http";
import { getSingleStory } from "../lib/api";
import LoadingSpinner from "../components/UI/LoadingSpinner";



const StoryDetail = () => {
  const match = useRouteMatch();
  const params = useParams();

  const { storyID } = params;

  const {
    sendRequest,
    status,
    data: loadedStories,
    error,
  } = useHttp(getSingleStory, true);

  useEffect(() => {
    sendRequest(storyID);
  }, [sendRequest, storyID]);

  if (status === "pending")
    return (
      <div className="centered">
        <LoadingSpinner />
      </div>
    );

  if (error) {
    return <p className="centered">{error}</p>;
  }
  if (!loadedStories.text) {
    return <NoStoriesFound />;
  }
  return (
    <Fragment>
      <h1>Story Detail</h1>
      <HighlightedStory
        text={loadedStories.text}
        author={loadedStories.author}
        id={loadedStories.id}
      />
        <Comments
            storyID ={storyID}
        />
      {/*<Route path={match.path} exact>*/}
      {/*  <div className="centered">*/}

      {/*    <Link className="btn--flat" to={`${match.url}/comments`}>*/}
      {/*      Load Comments*/}
      {/*    </Link>*/}
      {/*  </div>*/}
      {/*</Route>*/}
      {/*<Route path={`${match.path}/comments`}>*/}
      {/*  <Comments />*/}
      {/*</Route>*/}
    </Fragment>
  );
};

export default StoryDetail;
