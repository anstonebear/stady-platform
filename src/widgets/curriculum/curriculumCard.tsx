import React from 'react'

import CurriculumLesson from './curriculumLesson'

import style from './curriculum.module.scss'

interface ICurriculumCardProps {
	number: string
	title: string
}

const CurriculumCard: React.FC<ICurriculumCardProps> = ({ number, title }) => {
	return (
		<div className={style.curriculumCard}>
			<div className={style.curriculumCard_wrapper}>
				<h1 className={style.curriculumCard_number}>{number}</h1>
				<h2 className={style.curriculumCard_title}>{title}</h2>
				<div className={style.curriculumCard_lessons}>
					{Array(3)
						.fill(null)
						.map((course, id) => (
							<CurriculumLesson
								key={id}
								title='Понимание принципов проектирования UI/UX'
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
