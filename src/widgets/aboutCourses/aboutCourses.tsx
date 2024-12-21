import React from 'react'

import style from './aboutCourses.module.scss'

const AboutCourses = () => {
	return (
		<div className={style.aboutCourses}>
			<div className={style.aboutCourses_box}>
				<span className={style.aboutCourses_title}>
					Онлаин курсы по дизайну и разработке
				</span>
				<span className={style.aboutCourses_text}>
					Добро пожаловать на нашу страницу онлайн-курсов, где вы можете
					улучшить свои навыки в области дизайна и разработки. Выберите из
					тщательно подобранного выбора из 10 курсов, разработанных для
					предоставления вам всесторонних знаний и практического опыта. Изучите
					курсы ниже и найдите идеальный вариант для вашего учебного пути.
				</span>
			</div>
		</div>
	)
}

export default AboutCourses
