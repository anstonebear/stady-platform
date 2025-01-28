import { useEffect, useState } from 'react'
// import axios from 'axios'
import { Container } from '~/shared/ui/container'
import CoursesCard from './coursesCard'
import { image1, image2, image3 } from '~/shared/public/index'
import { dataCourses } from '~/api/request'

import style from './coursesCards.module.scss'

interface ICoursesProps {
	id: number
	title: string
	description: string
}

const CoursesCards: React.FC = () => {
	const [courses, setCourses] = useState<ICoursesProps[]>([])

	useEffect(() => {
		dataCourses().then(response => {
			setCourses(response)
		})
	}, [])

	// useEffect(() => {
	// 	fetch('https://platform-courses.emgushovs.ru/api/course')
	// 		.then(res => {
	// 			return res.json()
	// 		})
	// 		.then(arr => {
	// 			setCourses(arr)
	// 		})
	// }, [])

	// useEffect(() => {
	// 	axios.get('https://platform-courses.emgushovs.ru/api/course')
	// 	  .then(response => {
	// 		setCourses(response.data);
	// 	  })
	//   }, [])

	// console.log(dataCourses(), 'RI_dataCourses')
	return (
		<div className={style.coursesCards}>
			<Container>
				<div className={style.coursesCards_wrapper}>
					{courses.map(course => (
						<CoursesCard
							key={course.id}
							img1={image1}
							img2={image2}
							img3={image3}
							title={course.title}
							descr={course.description}
							experience={`начинающий`}
							level={`4 недели`}
							teacher={`by Jhon Smith`}
							lesson1={`Введение в HTML`}
							lesson2={`CSS стилизация`}
							lesson3={`Введение в адаптивный дизаин`}
							lesson4={`Принципы веб-дизайна`}
							lesson5={`Создание веб-сайта`}
						/>
					))}
				</div>
			</Container>
		</div>
	)
}

export default CoursesCards
