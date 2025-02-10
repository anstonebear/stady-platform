import { useEffect, useState } from 'react'
// import axios from 'axios'
import { Container } from '~/shared/ui/container'
import CoursesCard from './coursesCard'
// import { image1, image2, image3 } from '~/shared/public/index'
import { courseService } from '~/shared/services/courses'
import { tryThrow } from '~/shared/lib/utils'
import style from './coursesCards.module.scss'

interface ICoursesProps {
	id: number
	title: string
	description: string
	images: string[]
}

// interface ILessonsProps {
// 	id: number
// 	title: string
// 	description: string

// }

const CoursesCards: React.FC = () => {
	const [courses, setCourses] = useState<ICoursesProps[]>([])
	//const [lessons, setLessons] = useState<ILessonsProps[]>([])

	const getCourses = async () => {
		const data = await tryThrow({ fn: () => courseService.dataCourses() })

		setCourses(data)
	}

	// const getLessons = async () => {
	// 	const data = await tryThrow({ fn: () => courseService.dataLessons() })

	// 	setLessons(data)
	// }

	useEffect(() => {
		getCourses()
		//getLessons()
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

	console.log(courseService, 'RI_dataCourses')
	return (
		<div className={style.coursesCards}>
			<Container>
				<div className={style.coursesCards_wrapper}>
					{courses.map(course => (
						<CoursesCard
							key={course.id}
							img={course.images}
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
