import React from "react";
import type { NextPage, NextComponentType } from "next";
import styles from "./styles.module.scss";
import NoAuctionImg from "../../public/assets/images/noauction.svg";

const NoAuction: NextComponentType = () => {
  return (
    <div>
      <div className={styles.warpper}>
        <div className={styles.auction}>
          <div className={styles.auctionBody}>
            <img src="assets/images/noauction.svg" />
          </div>
          <div className={styles.auctionHeader}>
            <h3>Error 401</h3>
            <p>you are not authorized to access this page</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NoAuction;
