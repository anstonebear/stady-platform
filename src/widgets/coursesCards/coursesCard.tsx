import React from 'react'

import Button from '~/shared/ui/button'

import style from './coursesCards.module.scss'

interface CoursesCardProps {
	title: string
	descr: string
	experience: string
	level: string
	teacher: string
	img: string[]

	subCourses: { title: string; number: number }[]
}

const CoursesCard: React.FC<CoursesCardProps> = ({
	img,
	title,
	descr,
	experience,
	level,
	teacher,
	subCourses
}) => {
	return (
		<div className={style.coursesCard}>
			<div className={style.coursesCard_wrapper}>
				<div className={style.coursesCard_info}>
					<div className={style.coursesCard_info_desc}>
						<h1 className={style.coursesCard_info_desc_title}>{title}</h1>
						<span className={style.coursesCard_info_desc_text}>{descr}</span>
					</div>
					<div>
						<Button to='/course' className={style.coursesCard_info_view}>
							Подробнее
						</Button>
					</div>
				</div>
				<div className={style.coursesCard_image}>
					{img.map((image, index) => (
						<img
							src={image}
							alt=''
							key={index}
							className={style.coursesCard_image_img}
						/>
					))}
				</div>
				<div className={style.coursesCard_beginning}>
					<div className={style.coursesCard_experience}>
						<span className={style.coursesCard_level}>{level}</span>
						<span className={style.coursesCard_level}>{experience}</span>
					</div>
					<span className={style.coursesCard_teacher}>{teacher}</span>
				</div>

				<div className={style.coursesCard_curriculum}>
					<h2 className={style.coursesCard_curriculum_title}>
						Программа курса
					</h2>
					<ul className={style.coursesCard_curriculum_list}>
						{subCourses.map((subCourse, index) => (
							<li
								key={index}
								className={style.coursesCard_curriculum_list_column}
							>
								<h1 className={style.coursesCard_curriculum_list_num}>
									{subCourse.number}
								</h1>
								<span className={style.coursesCard_curriculum_list_lesson}>
									{subCourse.title}
								</span>
							</li>
						))}
					</ul>
				</div>
			</div>
		</div>
	)
}

export default CoursesCard
