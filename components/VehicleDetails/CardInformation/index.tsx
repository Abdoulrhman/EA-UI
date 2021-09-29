import React from 'react'
import Divider from '../../Common/Atoms/Divider'
import CardTags from '../../Common/CardGrid/CardTags'
import Calendar from './Calendar'
import Favourite from './Favourite'
import Lot from './Lot'
import MoreInfo from './MoreInfo'
import PriceDetails from './PriceDetails'
import styles from './styles.module.scss'

function CardInformation() {
    return (
        <div className={styles.container}>
            <div className={styles.spaces}>
                <div className={styles.head}>
                    <Lot />
                    <div className={styles.iconsContainer}>
                    <Favourite />
                    <Favourite />
                    <Favourite />
                    <Favourite />
                    </div>
                </div>
                <h3 className={styles.cardTitle}>2020 Lexus LX 570 9867</h3>
                <CardTags />
                <Divider width="100%" height="1px" bgColor="#e4e8f0" margin="20px 0" />
                <MoreInfo />
            </div>
            <Calendar />    
            <PriceDetails />  
        </div>
    )
}

export default CardInformation
