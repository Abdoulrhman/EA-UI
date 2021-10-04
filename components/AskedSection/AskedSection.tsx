import React from "react";
import type { NextPage, NextComponentType } from "next";
import styles from "./styles.module.scss";
import plus from "../../public/assets/icons/plus.svg";

const NoAuction: NextComponentType = () => {
  return (
    <div>
      <div className={styles.wrapper}>
        {/* Auction Grid */}
        <div className={styles.auctionGrid}>
          {/* Terms Section */}
          <div className={styles.auctionDetails}>
            <div className={styles.auctionDetailsHeader}>
              <h4>FREQUENTLY ASKED QUESTIONS</h4>
              <img src="assets/icons/arrow-up.svg" />
            </div>
            <div className={styles.auctionDetailsBody}>
              {/* start Accordion */}
              <div className={styles.auctionAccordion}>
                <div className={styles.auctionAccordionHeader}>
                  <h4>Understanding your bidding limit</h4>
                  <img src="assets/icons/plus.svg" />
                </div>
              </div>
              {/* start Accordion */}
              {/* start Accordion */}
              <div className={styles.auctionAccordion}>
                <div className={styles.auctionAccordionHeader}>
                  <h4>Understanding your bidding limit</h4>
                  <img src="assets/icons/plus.svg" />
                </div>
              </div>
              {/* start Accordion */}
              {/* start Accordion */}
              <div className={styles.auctionAccordion}>
                <div className={styles.auctionAccordionHeader}>
                  <h4>Understanding your bidding limit</h4>
                  <img src="assets/icons/arrow-up.svg" />
                </div>
                <div className={styles.auctionAccordionBody}>
                  <p>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesevtting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type and scrambled it to make a
                    type specimen book.
                  </p>
                </div>
              </div>
              {/* start Accordion */}
            </div>
          </div>
          {/* Terms Section */}
          {/* Terms Section */}
          <div className={styles.auctionDetails}>
            <div className={styles.auctionDetailsHeader}>
              <h4>TERMS AND CONDITIONS</h4>
            </div>
            <div className={styles.auctionDetailsBody}></div>
          </div>
          {/* Terms Section */}
        </div>
        {/* Auction Grid */}
      </div>
    </div>
  );
};

export default NoAuction;
