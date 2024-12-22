import React from 'react'

import { Container } from '~/shared/ui/container'
import style from './aboutCourses.module.scss'

const AboutCourses: React.FC = () => {
	return (
		<div className={style.aboutCourses}>
			<Container>
				<div className={style.aboutCourses_wrapper}>
					<h1 className={style.aboutCourses_title}>
						Онлаин курсы по дизайну и разработке
					</h1>
					<h2 className={style.aboutCourses_text}>
						Добро пожаловать на нашу страницу онлайн-курсов, где вы можете
						улучшить свои навыки в области дизайна и разработки. Выберите из
						тщательно подобранного выбора из 10 курсов, разработанных для
						предоставления вам всесторонних знаний и практического опыта.
						Изучите курсы ниже и найдите идеальный вариант для вашего учебного
						пути.
					</h2>
				</div>
			</Container>
		</div>
	)
}

export default AboutCourses
