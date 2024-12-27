import React from 'react'

import AboutBlock from '~/widgets/aboutBlock/aboutBlock'
import Plans from '~/widgets/plans/plans'

import style from '../shared/style/main.module.scss'

const Pricing: React.FC = () => {
	return (
		<div>
			<main className={style.maine}>
				<AboutBlock
					title='Наши цены'
					text='Добро пожаловать на страницу ценового плана SkillBridge, где мы предлагаем два всеобъемлющих варианта для удовлетворения ваших потребностей: Free и Pro. Мы верим в предоставление гибких и доступных вариантов ценообразования для наших услуг. Независимо от того, являетесь ли вы частным лицом, желающим улучшить свои навыки, или компанией, ищущей решения для профессионального развития, у нас есть план, который вам подходит. Изучите наши варианты ценообразования ниже и выберите тот, который лучше всего соответствует вашим требованиям.'
				/>
				<Plans />
			</main>
		</div>
	)
}

export default Pricing
