import React from 'react'
import styles from './styles.module.scss'

function Bid({containerStyle}:any) {
    return (
        <div style={containerStyle} className={styles.container}>
            <img src="/assets/icons/Bid.svg" alt="bid icon" />
        </div>
    )
}

export default Bid
