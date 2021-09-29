import React, { useEffect, useState } from 'react'
import styles from './styles.module.scss'

function CardTags() {
    const [tags,setTags] = useState([{
        Image: "https://cdn.emiratesauction.com/static/AppsAssets/Tags/combinedShape@3x.png?v=1",
        TextColor: "#3f3f3f",
        BGColor: "#eeeeee",
        Id: 0,
        Title: "3,878 Km"
    }])
    const tagImageDimensions = {
		width: '15px',
		height: '15px',
	};

    return (
        <div className={styles.productStatus}>
			{tags &&
				tags.map((tag,indx) => (
					<label
						key={indx}
						style={{
							backgroundColor: tag?.BGColor,
							color: tag?.TextColor,
						}}
						// className={`${
						// 	locale == 'en' ? styles.labelStatus : styles.labelStatusAr
						// }`}
                        className={styles.labelStatus}
					>
						<img
							style={{
								width: tagImageDimensions.width,
								height: tagImageDimensions.height,
							}}
							// className={locale == 'en' ? styles.tagImg : styles.tagImgAr}
							className={styles.tagImg}
							src={tag?.Image}
						></img>
						<span>{tag?.Title}</span>
					</label>
				))}
		</div>
    )
}

export default CardTags
