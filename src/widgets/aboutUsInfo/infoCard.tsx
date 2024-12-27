import React from 'react'

import style from './aboutUsInfo.module.scss'
interface IInfoCardProps {
	title: string
	text: string
	img: string
}

const InfoCard: React.FC<IInfoCardProps> = ({ title, text, img }) => {
	return (
		<div className={style.infoCard}>
			<div className={style.infoCard_wrapper}>
				<img className={style.infoCard_img} src={img} alt='' />
				<div className={style.infoCard_descr}>
					<h3 className={style.infoCard_descr_title}>{title}</h3>
					<p className={style.infoCard_descr_text}>{text}</p>
				</div>
			</div>
		</div>
	)
}

export default InfoCard
