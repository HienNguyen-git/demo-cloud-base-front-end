import { useHistory } from "react-router";
import { useEffect } from "react";

import StoryForm from "../components/story/StoryForm";
import { addStory } from "../lib/api";
import useHttp from "../hooks/use-http";
const NewStory = () => {
  const { sendRequest, status } = useHttp(addStory);
  const history = useHistory();

  useEffect(() => {
    if (status === "completed") {
      history.push("/stories");
    }
  }, [status, history]);

  const addStoryHandler = (storyData) => {
    sendRequest(storyData);
  };
  return (
    <StoryForm isLoading={status === "pending"} onAddStory={addStoryHandler} />
  );
};

export default NewStory;
