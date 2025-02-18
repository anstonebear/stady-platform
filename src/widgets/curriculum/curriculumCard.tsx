import { useEffect, useState } from 'react'

import CurriculumLesson from './curriculumLesson'
import { tryThrow } from '~/shared/lib/utils'
import { courseService } from '~/shared/services/courses'

import style from './curriculum.module.scss'

interface ICurriculumCardProps {
	number: string
	title: string
}

interface ILessonsProps {
	id: number
	title: string
	description: string
}

const CurriculumCard: React.FC<ICurriculumCardProps> = ({ number, title }) => {
	const [lessons, setLessons] = useState<ILessonsProps[]>([])

	const getLessons = async () => {
		const data = await tryThrow({ fn: () => courseService.dataLessons() })

		setLessons(data)
	}

	useEffect(() => {
		getLessons()
	}, [])
	return (
		<div className={style.curriculumCard}>
			<div className={style.curriculumCard_wrapper}>
				<h1 className={style.curriculumCard_number}>{number}</h1>
				<h2 className={style.curriculumCard_title}>{title}</h2>
				<div className={style.curriculumCard_lessons}>
					{lessons.map(lesson => (
						<CurriculumLesson
							key={lesson.id}
							title={lesson.title}
							lesson='Урок 1'
							time='45 минут'
						/>
					))}
				</div>
			</div>
		</div>
	)
}

export default CurriculumCard
