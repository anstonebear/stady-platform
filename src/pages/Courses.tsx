import React from 'react'

import AboutBlock from '~/widgets/aboutBlock/aboutBlock'
import CoursesCards from '~/widgets/coursesCards/coursesCards'

import style from '../shared/style/main.module.scss'

const Courses = () => {
	return (
		<div>
			<main className={style.main}>
				<AboutBlock
					title='Онлаин курсы по дизайну и разработке'
					text=' Добро пожаловать на нашу страницу онлайн-курсов, где вы можете
						улучшить свои навыки в области дизайна и разработки. Выберите из
						тщательно подобранного выбора из 10 курсов, разработанных для
						предоставления вам всесторонних знаний и практического опыта.
						Изучите курсы ниже и найдите идеальный вариант для вашего учебного
						пути.'
				/>
				<CoursesCards />
			</main>
		</div>
	)
}

export default Courses
