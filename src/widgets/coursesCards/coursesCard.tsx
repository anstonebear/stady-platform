import React from 'react'

import Button from '~/shared/ui/button'

import style from './coursesCards.module.scss'

interface CoursesCardProps {
	title: string
	descr: string
	experience: string
	level: string
	teacher: string
	img1: string
	img2: string
	img3: string
	lesson1: string
	lesson2: string
	lesson3: string
	lesson4: string
	lesson5: string
}

const CoursesCard: React.FC<CoursesCardProps> = ({
	img1,
	img2,
	img3,
	title,
	descr,
	experience,
	level,
	teacher,
	lesson1,
	lesson2,
	lesson3,
	lesson4,
	lesson5
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
						<Button to='' className={style.coursesCard_info_view}>
							Подробнее
						</Button>
					</div>
				</div>
				<div className={style.coursesCard_image}>
					<img src={img1} alt='' className={style.coursesCard_image_img} />
					<img src={img2} alt='' className={style.coursesCard_image_img} />
					<img src={img3} alt='' className={style.coursesCard_image_img} />
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
						<li className={style.coursesCard_curriculum_list_column}>
							<h1 className={style.coursesCard_curriculum_list_num}>01</h1>
							<span className={style.coursesCard_curriculum_list_lesson}>
								{lesson1}
							</span>
						</li>
						<li className={style.coursesCard_curriculum_list_column}>
							<h1 className={style.coursesCard_curriculum_list_num}>02</h1>
							<span className={style.coursesCard_curriculum_list_lesson}>
								{lesson2}
							</span>
						</li>
						<li className={style.coursesCard_curriculum_list_column}>
							<h1 className={style.coursesCard_curriculum_list_num}>03</h1>
							<span className={style.coursesCard_curriculum_list_lesson}>
								{lesson3}
							</span>
						</li>
						<li className={style.coursesCard_curriculum_list_column}>
							<h1 className={style.coursesCard_curriculum_list_num}>04</h1>
							<span className={style.coursesCard_curriculum_list_lesson}>
								{lesson4}
							</span>
						</li>
						<li className={style.coursesCard_curriculum_list_column}>
							<h1 className={style.coursesCard_curriculum_list_num}>05</h1>
							<span className={style.coursesCard_curriculum_list_lesson}>
								{lesson5}
							</span>
						</li>
					</ul>
				</div>
			</div>
		</div>
	)
}

export default CoursesCard
