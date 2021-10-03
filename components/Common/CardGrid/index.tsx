import React,{useState} from 'react'
import styles from './styles.module.scss'
import CardTags from './CardTags'
import CardFooter from './CardFooter'
import Bid from './Bid'
import Favourite from '../Atoms/Favourite'
import Lot from '../Atoms/Lot'
import Menu from './Menu'
import Divider from './../Atoms/Divider/index';

function GridCard() {
 
    return (
        <div className={styles.container}>
            <div className={styles.cardMedia}> 
                <Favourite status="card-default" />
                <img className={styles.cardImage} src="/assets/images/car.png" alt="car" />
                <Lot status="card-default"  />
                <Bid status="card-default" />
            </div>
            <div className={styles.cardContentContainer}>
                <div className={styles.cardContent}>
                    <h3 className={styles.cardTitle}>2021 Porsche Cayen</h3>
                    <CardTags />
                    <p className={styles.cardPrice}><sup>AED</sup>243.000</p>
                </div>
                <Divider width="100%" height="1px" bgColor="#e4e8f0" margin="8px 0" />
                <div className={styles.cardFooterContainer}>
                    <CardFooter   />
                    <Menu  />
                </div>
            </div>
        </div>
    )
}

export default GridCard
