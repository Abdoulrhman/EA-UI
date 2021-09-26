import React from 'react'
import type { NextPage , NextComponentType } from 'next'

import styles from './styles.module.scss'

const  Home : NextComponentType =()=> {
    return (
        <div className={styles.test}>
            Hello
        </div>
    )
}

export default Home
