import { useState } from "react";

import Item from "./Item";
import classes from "./Items.module.css";

const Items = (props) => {
  const [showItems, setShowItems] = useState(true);

  const toggleItemsHandler = () => {
    setShowItems((curState) => !curState);
  };

  const ItemsList = (
    <ul>
      {props.items.map((item) => (
        <Item key={item.id} name={item.name} />
      ))}
    </ul>
  );

  return (
    <div className={classes.items}>
      <button onClick={toggleItemsHandler}>{showItems ? "Hide" : "Show"} Items</button>
      {showItems && ItemsList}
    </div>
  );
};

export default Items;
