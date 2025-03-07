import { useEffect, useState } from 'react'

import { Container } from '~/shared/ui/container'
import CurriculumCard from './curriculumCard'
import { tryThrow } from '~/shared/lib/utils'
import { courseService } from '~/shared/services/courses'

import style from './curriculum.module.scss'

interface ISubCoursesProps {
	number: number
	title: string
	id: number
}

interface ILessonsProps {
	id: number
	title: string
	description: string
	number: number
	subCourseId: number
	key: number
}

const Curriculum: React.FC = () => {
	const [subCourse, setSubCourse] = useState<ISubCoursesProps[]>([])
	const [lessons, setLessons] = useState<ILessonsProps[]>([])

	const getSubCourse = async () => {
		const data = await tryThrow({ fn: () => courseService.dataSubCourses() })
		setSubCourse(data)
	}

	const getLessons = async () => {
		const data = await tryThrow({
			fn: () => courseService.dataLessons()
		})
		setLessons(data)
	}

	useEffect(() => {
		getSubCourse()
	}, [])

	useEffect(() => {
		if (subCourse.length > 0) {
			subCourse.forEach(() => {
				getLessons()
			})
		}
	}, [subCourse])

	return (
		<div className={style.curriculum}>
			<Container>
				<div className={style.curriculum_wrapper}>
					{subCourse.map((subCourse, i) => (
						<CurriculumCard
							key={subCourse.id}
							number={'0' + ++i}
							title={subCourse.title}
							lessons={lessons.filter(
								lesson => lesson.subCourseId === subCourse.id
							)}
						/>
					))}
				</div>
			</Container>
		</div>
	)
}

export default Curriculum
