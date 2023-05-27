import { Fragment } from "react";
import { useHistory, useLocation } from "react-router";

import StoryItem from "./StoryItem";
import classes from "./StoryList.module.css";

const sortStories = (stories, ascening) => {
  return stories.sort((storyA, storyB) => {
    if (ascening) {
      return storyA.id > storyB.id ? 1 : -1;
    } else {
      return storyA.id > storyB.id ? -1 : 1;
    }
  });
};

const StoryList = (props) => {
  const history = useHistory();
  const location = useLocation();

  const queryParams = new URLSearchParams(location.search);

  const isSortingAscending = queryParams.get("sort") === "asc";

  const sortedStories = sortStories(props.stories, isSortingAscending)

  const changeSortingHandler = () => {
    history.push({
      pathname:location.pathname,
      search: `?sort=${(!isSortingAscending ? "asc" : "desc")}`
    })
  };
  return (
    <Fragment>
      <div className={classes.sorting}>
        <button onClick={changeSortingHandler}>
          Sort {!isSortingAscending ? "Ascending" : "Descending"}
        </button>
      </div>
      <ul className={classes.list}>
        {sortedStories.map((story) => (
          <StoryItem
            key={story.id}
            id={story.id}
            author={story.author}
            text={story.text}
          />
        ))}
      </ul>
    </Fragment>
  );
};

export default StoryList;
