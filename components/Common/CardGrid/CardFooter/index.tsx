import React,{useState} from 'react'
import styles from './styles.module.scss'

function CardFooter({dir}:any) {

    return (
        <div style={{direction:dir}} className={styles.cardFooter}>
            <div className={styles.itemContainer}>
                <img className={styles.footerImage} src="/assets/icons/bid-grey.svg"  />
                <p style={{marginLeft: dir == "ltr" ? "5px" : "0px", marginRight: dir == "rtl" ? "5px" : "0px"}} className={styles.footerText}>367</p>
            </div>  
            <div className={styles.itemContainer}>
                <img className={styles.footerImage} src="/assets/icons/clock.svg"  />
                <p style={{marginLeft: dir == "ltr" ? "5px" : "0px", marginRight: dir == "rtl" ? "5px" : "0px"}} className={styles.footerText}>14d:11h:11m</p>
            </div>    
    </div>
    )
}

export default CardFooter
