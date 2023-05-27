import classes from './HighlightedStory.module.css';

const HighlightedStory = (props) => {
  return (
    <figure className={classes.story}>
      <p>{props.text}</p>
      <figcaption>{props.author}</figcaption>
    </figure>
  );
};

export default HighlightedStory;
