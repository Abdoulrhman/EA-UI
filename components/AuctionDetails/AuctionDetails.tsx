import React from "react";
import type { NextPage, NextComponentType } from "next";
import styles from "./styles.module.scss";
import NoAuctionImg from "../../public/assets/images/noauction.svg";

const NoAuction: NextComponentType = () => {
  return (
    <div>
      <div className={styles.warpper}>
        <div className={styles.auctionDetails}>auctionDetails</div>
      </div>
    </div>
  );
};

export default NoAuction;
