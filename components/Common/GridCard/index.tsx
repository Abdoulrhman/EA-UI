import React from 'react'
import styles from './styles.module.scss'
import Image from 'next/image'

function GridCard() {
    return (
        <div className={styles.container}>
            <div className={styles.cardMedia}>
                <Image src="/assets/images/car.png" alt="car" />
             </div>
            <div className={styles.cardContent}>
                <h3>2021 Porsche Cayen</h3>
                {/* <ul>
                    <li>
                        <img src={Icon} alt="" />
                        <p>Luxury</p>
                    </li>
                    <li>
                        <img src={Icon} alt="" />
                        <p>Clean</p>
                    </li>
                </ul> */}
                <p><span>AED</span>243.000</p>
            </div>
            <div className={styles.cardFooter}>
                <div>
                    <img src="" alt="" />
                    <p></p>
                </div>    
            </div>
        </div>
    )
}

export default GridCard
