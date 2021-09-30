import React,{useState} from 'react'
import styles from './styles.module.scss'
import CardTags from './CardTags'
import CardFooter from './CardFooter'
import Bid from './Bid'
import Favourite from './Favourite'
import Lot from '../Atoms/Lot'
import Menu from './Menu'

function GridCard() {
 
    return (
        <div className={styles.container}>
            <div className={styles.cardMedia}> 
                <Favourite containerStyle={{position:"absolute", top: "10px" , left:"10px" , // right:"10px" if rtl dir
                }} />
                <img className={styles.cardImage} src="/assets/images/car.png" alt="car" />
                <Lot containerStyle={{position:"absolute" , bottom:"12px", left:"0px" , //right:"0px" if rtl dir
            }}   />
                <Bid containerStyle={{position:"absolute" , bottom:"-20px" , right:"10px" ,  //left:"10px" if rtl dir
                }}  />
            </div>
            <div className={styles.cardContent}>
                <h3 className={styles.cardTitle}>2021 Porsche Cayen</h3>
                <CardTags />
                <p className={styles.cardPrice}><span>AED</span>243.000</p>
                <div className={styles.cardFooterContainer}>
                    <CardFooter   />
                    <Menu  />
                </div>
            </div>
        </div>
    )
}

export default GridCard
