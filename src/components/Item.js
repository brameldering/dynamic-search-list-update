import classes from "./Item.module.css";

const Item = (props) => {
  return <li className={classes.item}>{props.name}</li>;
};

export default Item;
