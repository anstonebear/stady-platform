import React from 'react'

import style from './benefits.module.scss'

type BenefitsCardProps = {
	number: string
	name: string
	description: string
}

const BenefitsCard: React.FC<BenefitsCardProps> = ({
	number,
	name,
	description
}) => {
	return (
		<div className={style.benefits_cards_card}>
			<div className={style.benefits_cards_number}>
				<span className={style.number}>{number}</span>
			</div>
			<div className={style.benefits_cards_text}>
				<h2 className={style.benefits_cards_name}>{name}</h2>
				<span className={style.benefits_cards_descr}>{description}</span>
			</div>
		</div>
	)
}

// const BenefitsCard = () => {
// 	return (
// 		<div className={style.benefits_cards_card}>
// 			<div className={style.benefits_cards_number}>
// 				<span className={style.number}>01</span>
// 			</div>
// 			<div className={style.benefits_cards_text}>
// 				<span className={style.benefits_cards_name}>
// 					Гибкий график обучения
// 				</span>
// 				<span className={style.benefits_cards_descr}>
// 					Составте свою курсовую работу с учетом ваших текущих обязательств
// 				</span>
// 			</div>
// 		</div>
// 	)
// }

export default BenefitsCard
