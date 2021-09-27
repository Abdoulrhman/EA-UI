import React,{useState} from 'react'
import styles from './styles.module.scss'

function CardFooter({dir}:any) {
    const[footerItems,setFooterItems] = useState([{Image: "https://cdn.emiratesauction.com/static/AppsAssets/Tags/combinedShape@3x.png?v=1",Text:"test"},{Image: "https://cdn.emiratesauction.com/static/AppsAssets/Tags/combinedShape@3x.png?v=1",Text:"test"}])

    return (
        <div style={{direction:dir}} className={styles.cardFooter}>
            {
                footerItems && footerItems.map((item, indx) =>(
                    <div className={styles.itemContainer} key={indx}>
                        <img className={styles.footerImage} src={item.Image}  />
                        <p style={{marginLeft: dir == "ltr" ? "5px" : "0px", marginRight: dir == "rtl" ? "5px" : "0px"}} className={styles.footerText}>{item.Text}</p>
                    </div>    
                ))
            }
    </div>
    )
}

export default CardFooter
