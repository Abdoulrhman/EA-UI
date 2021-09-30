import React,{useState} from 'react'
import Divider from '../../Common/Atoms/Divider'
import styles from './styles.module.scss'

function Highlights() {
    const [info,setInfo] = useState({
        ViewTypeId: 1,
        Collapsed: false,
        EnableCollapse: true,
        OptionGroups: [
            {
                Id: 12,
                Title: "Condition",
                ImageUrl: "",
                Order: 0,
                Options: [
                    {
                        Id: 0,
                        Title: "GCC Specifications"
                    }
                ]
            },
            {
                Id: 13,
                Title: "General",
                ImageUrl: "",
                Order: 0,
                Options: []
            },
            {
                Id: 14,
                Title: "Region",
                ImageUrl: "",
                Order: 0,
                Options: []
            }
        ],
        Id: 1,
        Title: "HIGHLIGHTS"
    })

    return (
        <div className={styles.container}>
            {info.OptionGroups.map(
                (o) =>
                    o.Options.length > 0 && (
                        <>
                            <h4 className={styles.optionTitle}>{o.Title}</h4>
                            <ul className={styles.optionsContainer}>
                                {o.Options.map((option) => (
                                    <li className={styles.optionItem}>
                                        {option.Title}
                                    </li>
                                ))}
                            </ul>
                            <Divider width="100%" height="1px" bgColor="#EDEDED" margin="20px 0px" />
                        </>
                    )
            )}      
        </div>
    )
}

export default Highlights
