import React from 'react'

import AboutBlock from '~/widgets/aboutBlock/aboutBlock'

import AboutUsInfo from '~/widgets/aboutUsInfo/aboutUsInfo'

import style from '../shared/style/main.module.scss'

const AboutUs = () => {
	return (
		<div>
			<main className={style.main}>
				<AboutBlock
					title='O Skillbridge'
					text='Добро пожаловать на нашу платформу, где мы увлечены идеей дать людям возможность освоить мир дизайна и разработки. Мы предлагаем широкий спектр онлайн-курсов, разработанных для оснащения учащихся навыками и знаниями, необходимыми для успеха в постоянно меняющемся цифровом ландшафте.'
				/>
				{Array(2)
					.fill(null)
					.map(id => (
						<AboutUsInfo
							key={id}
							title='Достижения'
							text='Наша преданность делу позволила нам достичь значительных вех на нашем пути. Вот некоторые из наших примечательных достижений'
						/>
					))}
			</main>
		</div>
	)
}

export default AboutUs
