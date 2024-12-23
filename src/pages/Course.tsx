import React from 'react'

import AboutBlock from '~/widgets/aboutBlock/aboutBlock'
import CourseVideo from '~/widgets/courseVideo/courseVideo'

import style from '../shared/style/main.module.scss'
import pic from '~/shared/public/pic.png'
import Curriculum from '~/widgets/curriculum/curriculum'

const Course: React.FC = () => {
	return (
		<div>
			<main className={style.main}>
				<AboutBlock
					title='Курсы по UI/UX дизайну'
					text='Добро пожаловать на наш курс UI/UX Design! Эта комплексная программа снабдит вас знаниями и навыками для создания исключительных пользовательских интерфейсов (Ul) и улучшения пользовательского опыта (UX). Погрузитесь в мир дизайн-мышления, каркасного проектирования, прототипирования и тестирования удобства использования. Ниже представлен обзор учебной программы'
				/>
				<CourseVideo image={pic} />
				<Curriculum />
			</main>
		</div>
	)
}

export default Course
