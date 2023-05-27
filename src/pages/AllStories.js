import { useEffect } from "react";

import StoryList from "../components/story/StoryList";
import useHttp from "../hooks/use-http";
import { getAllStories } from "../lib/api";
import LoadingSpinner from "../components/UI/LoadingSpinner";
import NoStoriesFound from "../components/story/NoStoriesFound";


const AllStories = () => {
  const {
    sendRequest,
    status,
    data: loadedStories,
    error,
  } = useHttp(getAllStories, true);

  useEffect(() => {
    sendRequest();
  }, [sendRequest]);

  if (status === "pending") {
    return (
      <div className="centered">
        <LoadingSpinner />
      </div>
    );
  }

  if (error) {
    return <p className="centered focused">{error}</p>;
  }

  if (status === "completed" && (loadedStories.length === 0 || !loadedStories))
    return <NoStoriesFound />;
  return <StoryList stories={loadedStories} />;
};

export default AllStories;
