import { Fragment, useState, useEffect } from "react";

import Items from "./Items";
import classes from "./Finder.module.css";

const ARRAY = [
  { id: "u1", name: "Max" },
  { id: "u2", name: "Manuel" },
  { id: "u3", name: "Julie" },
];

const Finder = () => {
  const [filteredList, setFilteredList] = useState(ARRAY);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    setFilteredList(ARRAY.filter((item) => item.name.includes(searchTerm)));
  }, [searchTerm]);

  const searchChangeHandler = (event) => {
    setSearchTerm(event.target.value);
  };

  return (
    <Fragment>
      <div className={classes.finder}>
        <input type='search' onChange={searchChangeHandler} />
      </div>
      <Items items={filteredList} />
    </Fragment>
  );
};

export default Finder;
