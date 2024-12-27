import React from 'react'

import style from './plans.module.scss'

interface IAvailableItemProps {
	img: string
	text: string
}
const AvailableItem: React.FC<IAvailableItemProps> = ({ img, text }) => {
	return (
		<div className={style.availableItem}>
			<img src={img} alt='' className={style.availableItem_img} />
			<span className={style.availableItem_text}>{text}</span>
		</div>
	)
}

export default AvailableItem
