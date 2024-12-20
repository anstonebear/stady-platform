import React from 'react'

import BenefitsCard from './benefitsCard'

import style from './benefits.module.scss'

const Benefits = () => {
	return (
		<div className={style.benefits}>
			<div className={style.benefits_box}>
				<span className={style.benefits_title}>Преимущества</span>

				<div className={style.benefits_cards}>
					<BenefitsCard />
					<BenefitsCard />
					<BenefitsCard />
					<BenefitsCard />
					<BenefitsCard />
					<BenefitsCard />
				</div>
			</div>
		</div>
	)
}

export default Benefits
