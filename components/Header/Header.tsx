import React from 'react'
import type { NextPage , NextComponentType } from 'next'

import styles from './styles.module.scss'

const  Header : NextComponentType =()=> {
    return (
        <div className={styles.header}>
            Header
        </div>
    )
}

export default Header
