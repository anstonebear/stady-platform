import { useEffect, useState } from 'react'

import { Container } from '~/shared/ui/container'
import OurCursesCard from './ourCursesCard'
import Button from '~/shared/ui/button'
import { tryThrow } from '~/shared/lib/utils'
import { courseService } from '~/shared/services/courses'

import style from './OurCurses.module.scss'

interface ICoursesProps {
	id: number
	title: string
	description: string
	images: string
}

console.log(courseService.dataCourses(), 'courseService')

const OurCurses: React.FC = () => {
	const [courses, setCourses] = useState<ICoursesProps[]>([])

	const getCourses = async () => {
		const data = await tryThrow({ fn: () => courseService.dataCourses() })

		setCourses(data)
	}

	console.log(courses, 'RI_coursesSS')

	useEffect(() => {
		getCourses()
	}, [])

	return (
		<div className={style.ourCurses}>
			<Container>
				<div className={style.ourCurses_wrapper}>
					<h1 className={style.ourCurses_title}>Наши курсы</h1>

					<div className={style.ourCurses_info}>
						<span className={style.ourCurses_info_txt}>
							У нас вы найдете курсы по различным направлениям, которые помогут
							вам расширить свои горизонты. Наши преподаватели - эксперты,
							преподающие в доступной форме.
						</span>

						<Button to='/courses' className={style.ourCurses_info_btn}>
							Показать все
						</Button>
					</div>
					<div className={style.ourCurses_items}>
						{courses.map(course => (
							<OurCursesCard
								key={course.id}
								img={course.images}
								title={course.title}
								descr={course.description}
								experience={`начинающий`}
								level={`4 недели`}
								teacher={`by Jhon Smith`}
							/>
						))}
					</div>
				</div>{' '}
			</Container>
		</div>
	)
}

export default OurCurses
