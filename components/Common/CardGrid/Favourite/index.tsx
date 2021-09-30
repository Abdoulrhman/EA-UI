import React,{useState} from 'react'
import styles from './styles.module.scss'

function Favourite({containerStyle}:any) {
    const[iconToggle, setIconToggle] = useState(false)
    const handleClick = () =>{
        setIconToggle(!iconToggle)
    }

    return (
        <>
            {
                iconToggle ?
                <div style={containerStyle} className={styles.textContainer}>
                    <img onClick={handleClick} src="/assets/icons/fav-fill.svg" alt="favourite icon" />
                    <p className={styles.iconText}>Added to watchlist</p>
                </div> :
                 <div style={containerStyle} className={styles.iconContainer}>
                    <img onClick={handleClick} src="/assets/icons/fav-border.svg" alt="favourite icon" />
                </div>
            }
        </>
    )
}

export default Favourite