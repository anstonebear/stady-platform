import React from 'react'

import { clock } from '~/shared/assets'

import style from './curriculum.module.scss'

interface ICurriculumLessonProps {
	title: string
	lesson: string
	time: string
}

const CurriculumLesson: React.FC<ICurriculumLessonProps> = ({
	title,
	lesson,
	time
}) => {
	return (
		<div className={style.curriculumLesson}>
			<div className={style.curriculumLesson_wrapper}>
				<div className={style.curriculumLesson_info}>
					<span className={style.curriculumLesson_info_title}>{title}</span>
					<span className={style.curriculumLesson_info_lessonNum}>
						{lesson}
					</span>
				</div>
				<div className={style.curriculumLesson_duration}>
					<img src={clock} className={style.curriculumLesson_duration_clock} />
					<span className={style.curriculumLesson_duration_time}>{time}</span>
				</div>
			</div>
		</div>
	)
}

export default CurriculumLesson
