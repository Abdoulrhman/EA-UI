import React,{useState} from 'react'
import styles from './styles.module.scss'

function Favourite() {
    const[iconToggle, setIconToggle] = useState(false)
    const handleClick = () =>{
        setIconToggle(!iconToggle)
    }

    return (
        <>
            {
                iconToggle ?
                <div className={styles.iconFillContainer}>
                    <img onClick={handleClick} src="/assets/icons/fav-fill.svg" alt="favourite icon" />
                </div> :
                 <div className={styles.iconContainer}>
                    <img onClick={handleClick} src="/assets/icons/fav-border-white.svg" alt="favourite icon" />
                </div>
            }
        </>
    )
}

export default Favourite
