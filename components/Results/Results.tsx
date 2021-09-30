import React from "react";
import type { NextPage, NextComponentType } from "next";
import styles from "./styles.module.scss";

const Results: NextComponentType = () => {
  return (
    <div>
      <div className={styles.wrapper}>
        <div className={styles.results}>
          <h3>No Results Found</h3>
          <p>We can't find any item matching your search</p>
          <a href="#" className={styles.clear}>
            Clear the search & show all the vehicles
          </a>
        </div>
      </div>
    </div>
  );
};

export default Results;
