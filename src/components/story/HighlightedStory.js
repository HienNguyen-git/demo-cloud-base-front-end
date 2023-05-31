import classes from './HighlightedStory.module.css';

const HighlightedStory = (props) => {
  return (
      <figure className={classes.story}>
          <div className={classes.content}>
              <p className={classes.text}>{props.text}</p>
              <figcaption className={classes.author}>{props.author}</figcaption>
          </div>
      </figure>
  );
};

export default HighlightedStory;
