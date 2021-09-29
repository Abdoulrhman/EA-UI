import React from 'react'
import styles from './styles.module.scss'

function Lot({containerStyle}:any) {
    return (
        <div style={containerStyle} className={styles.container}>
            <p>Lot #589280</p>
        </div>
    )
}

export default Lot
