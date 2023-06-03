import classes from './HighlightedStory.module.css';

const HighlightedStory = (props) => {
  return (
      <figure className={classes.story}>
          <div className={classes.space}></div>
          <figcaption className={classes.author}>{props.author}</figcaption>
          <div className={classes.content}>
              <p className={classes.text}>{props.text}</p>
          </div>
      </figure>
  );
};

export default HighlightedStory;
