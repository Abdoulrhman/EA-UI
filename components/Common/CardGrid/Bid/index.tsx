import React from 'react'
import styles from './styles.module.scss'
import classnames from 'classnames';

function Bid({status}:any) {

    const container = classnames(styles.container,{
        [styles.positionStyle]: status === "card-default"
    })

    return (
        <div  className={container}>
            <img src="/assets/icons/Bid.svg" alt="bid icon" />
        </div>
    )
}

export default Bid
