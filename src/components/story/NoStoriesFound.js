import { Link } from "react-router-dom";

import classes from "./NoStoriesFound.module.css";

const NoStoriesFound = () => {
  return (
    <div className={classes.nostories}>
      <p>No stories found!</p>
      <Link to="/new-story" className="btn">
        Add a Story
      </Link>
    </div>
  );
};

export default NoStoriesFound;
