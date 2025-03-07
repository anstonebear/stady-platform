import CurriculumLesson from './curriculumLesson'

import style from './curriculum.module.scss'

interface ICurriculumCardProps {
	number: string
	title: string
	lessons: { title: string; number: number }[]
	key: number
}

//

const CurriculumCard: React.FC<ICurriculumCardProps> = ({
	number,
	title,
	lessons
}) => {
	return (
		<div className={style.curriculumCard}>
			<div className={style.curriculumCard_wrapper}>
				<h1 className={style.curriculumCard_number}>{number}</h1>
				<h2 className={style.curriculumCard_title}>{title}</h2>
				<div className={style.curriculumCard_lessons}>
					{lessons.map((lesson, i) => (
						<CurriculumLesson
							key={i}
							title={lesson.title}
							lesson={'урок ' + ++i}
							time='45 минут'
						/>
					))}
				</div>
			</div>
		</div>
	)
}

export default CurriculumCard
