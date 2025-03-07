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

interface ISubCoursesProps {
	number: number
	title: string
	id: number
	courseId: number
}

const CoursesCards: React.FC = () => {
	const [courses, setCourses] = useState<ICoursesProps[]>([])
	const [subCourses, setSubCourses] = useState<ISubCoursesProps[]>([])

	const getCourses = async () => {
		const data = await tryThrow({ fn: () => courseService.dataCourses() })

		setCourses(data)
	}

	const getSubCourses = async () => {
		const data = await tryThrow({ fn: () => courseService.dataSubCourses() })

		setSubCourses(data)
	}

	useEffect(() => {
		getCourses()
	}, [])

	useEffect(() => {
		if (courses.length > 0) {
			getSubCourses()
		}
	}, [courses])

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
							subCourses={subCourses
								.filter(subCourse => subCourse.courseId === course.id)
								.map(subCourse => ({
									title: subCourse.title,
									number: subCourse.number
								}))}
						/>
					))}
				</div>
			</Container>
		</div>
	)
}

export default CoursesCards
