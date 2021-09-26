import React from 'react'
import type { NextPage , NextComponentType } from 'next'

import styles from './styles.module.scss'

const  Header : NextComponentType =()=> {
    return (
        <div className={styles.warpper}>
            <div className={styles.list}>
                <div className={styles.list_img}>
                    <div className={ styles.image_Wrapper } >
                    <img src="https://images.pexels.com/photos/1149137/pexels-photo-1149137.jpeg?cs=srgb&dl=pexels-kelson-downes-1149137.jpg&fm=jpg"/>
                        <div className={styles.cartBadge}>
                            
                      Lot # 589280
                </div>
                    </div>
                </div>
                <div className={styles.list_details}>
                    <div className={styles.list_title}>
                        <h3>2021 Porsche Cayen</h3>
                        <div >
                            <ul className={styles.cartSocail}>
                                <li>
1
                                </li>
                                                               <li>
1
                                </li>
                            </ul>
                        </div>
                        
                    </div>
              
              <div className={styles.proudectStatus}>
								<label
									className={styles.labelStatus} 
								
								>
									
									<span>Luxury</span>
                        </label>
                        
                    </div>

                    <div className={styles.stats}>
                        <ul className={styles.statsList}>
                            <li>
ss
                            </li>
                                                      <li>
ss
                            </li>                          <li>
ss
                            </li>                          <li>
ss
                            </li>
</ul>
                    </div>
               
                  </div>
                <div className={styles.list_btn}>
                    <span className={styles.price_amount}>
                     <sup className={styles.uppercase_text}>AED</sup>
                     <label className={styles.amount_label}>121,000</label>
                    </span>
                    <div className={styles.priceStyle}>
                        <span>Min Increment :</span><span className={styles.secoundSpan}>
 100
                        </span>
                      
                    </div>
                      <button className={styles.bidBtn}>
                            Bid Now
                        </button>
                </div>
            </div>
            </div>
    )
}

export default Header
