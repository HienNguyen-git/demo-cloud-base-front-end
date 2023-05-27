import { Link } from 'react-router-dom';

import classes from './StoryItem.module.css';

const StoryItem = (props) => {
  return (
    <li className={classes.item}>
      <figure>
        <blockstory>
          <p>{props.text}</p>
        </blockstory>
        <figcaption>{props.author}</figcaption>
      </figure>
      <Link to={`/stories/${props.id}`} className='btn'>
        View Fullscreen
      </Link>
    </li>
  );
};

export default StoryItem;
