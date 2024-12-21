import React from 'react'

import AboutCourses from '~/widgets/aboutCourses/aboutCourses'
import CoursesCards from '~/widgets/coursesCards/coursesCards'

import style from '../shared/style/main.module.scss'

const Courses = () => {
	return (
		<div>
			<main className={style.main}>
				<AboutCourses />
				<CoursesCards />
			</main>
		</div>
	)
}

export default Courses
