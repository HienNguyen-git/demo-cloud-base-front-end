import { Link } from 'react-router-dom';

import classes from './StoryItem.module.css';

const StoryItem = (props) => {
  return (
      <li className={classes.item}>
          <figure>
              <div className={classes.blockstory}>
                  <p>{props.text}</p>
              </div>
              <figcaption>{props.author}</figcaption>
          </figure>
          <Link to={`/stories/${props.id}`} className="btn">
              View Fullscreen
          </Link>
      </li>

  );
};

export default StoryItem;
