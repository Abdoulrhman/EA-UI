import React from "react";
import type { NextPage, NextComponentType } from "next";
import styles from "./styles.module.scss";
import Close from "../../public/assets/icons/close.svg";

const AuctionAlerts: NextComponentType = () => {
  return (
    <div>
      <div className={styles.auctionAlerts}>
        <div className={styles.modal_content}>
          <div className={styles.modal_header}>
            <img className={styles.modal_header_img} src="assets/icons/close.svg" />
          </div>
          <div className={styles.modal_body}>
            <h3>Enable Auction Alerts</h3>
            <p>How would you like to be notified of new auctions</p>
            <div className={styles.check}>
              <label className={styles.container}>
                <input type="checkbox" />
                <span className={styles.checkmark}></span>
              </label>
              <div className={styles.info}>
                <p>Email Address</p>
                <label>johnson.85@gmail.com</label>
              </div>
            </div>
            {/* Check Div */}
            <div className={styles.check}>
              <label className={styles.container}>
                <input type="checkbox" />
                <span className={styles.checkmark}></span>
              </label>
              <div className={styles.info}>
                <p>Email Address</p>
                <label>johnson.85@gmail.com</label>
              </div>
            </div>
            {/* Check Div  */}
            <div className={styles.check}>
              <label className={styles.container}>
                <input type="checkbox" />
                <span className={styles.checkmark}></span>
              </label>
              <div className={styles.info}>
                <p>Email Address</p>
                <ul className={styles.checkList}>
                  <li>
                    <label className={styles.container}>
                      <input type="checkbox" />
                      <span className={styles.checkmark}></span>
                    </label>
                    <span>+971 55 8634958</span>
                  </li>
                </ul>
              </div>
            </div>
            {/* Check Div  */}
          </div>

          <div className="styles.modal-footer">
            <div className={styles.auctionBtn}>
              <button>Edit Auction Alerts</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuctionAlerts;
