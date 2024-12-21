import React from 'react'

import { Container } from '~/shared/ui/container'
import BenefitsCard from './benefitsCard'

import style from './benefits.module.scss'

const Benefits: React.FC = () => {
	return (
		<div className={style.benefits}>
			<Container>
				<div className={style.benefits_wrapper}>
					<h1 className={style.benefits_title}>Преимущества</h1>

					<div className={style.benefits_cards}>
						{Array(6)
							.fill(null)
							.map((_, index) => (
								<BenefitsCard
									key={index}
									number={`0${index + 1}`}
									name={`Гибкий график обучения`}
									description={`Составте свою курсовую работу с учетом ваших текущих обязательств`}
								/>
							))}
					</div>
				</div>
			</Container>
		</div>
	)
}

export default Benefits
