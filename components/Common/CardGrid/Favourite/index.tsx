import React from 'react'
import styles from './styles.module.scss'

function Favourite({top,right,bottom,left}:any) {
    return (
        <div style={{top:top,right:right,bottom:bottom,left:left}} className={styles.container}>
            <img src="/assets/icons/fav-border.svg" alt="favourite icon" />
        </div>
    )
}

export default Favourite
