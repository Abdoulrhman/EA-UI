import React from "react";
import type { NextPage, NextComponentType } from "next";
import styles from "./styles.module.scss";
import NoAuctionImg from "../../public/assets/images/noauction.svg";

const NoAuction: NextComponentType = () => {
  return (
    <div>
      <div className={styles.warpper}>
        <div className={styles.auction}>
          <div className={styles.auctionHeader}>
            <h3>More items are on their way!</h3>
            <p>Seems like we are left with no more items to auction at the</p>
            <p> moment! But next auction is around the corner.</p>
          </div>
          <div className={styles.auctionBody}>
            <img src="assets/images/noauction.svg" />
          </div>
          <div className={styles.auctionBtn}>
            <button>Edit Auction Alerts</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NoAuction;
