import React from 'react'

import { Container } from '~/shared/ui/container'
import OurCursesCard from './ourCursesCard'
import Button from '~/shared/ui/button'
import img from '../../shared/public/Image.png'

import style from './OurCurses.module.scss'

const OurCurses = () => {
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

						<Button to='' className={style.ourCurses_info_btn}>
							Показать все
						</Button>
					</div>
					<div className={style.ourCurses_items}>
						{Array(6)
							.fill(null)
							.map((_, index) => (
								<OurCursesCard
									key={index}
									img={img}
									title={`Фундаментальный веб-дизаин`}
									descr={`Изучите основы веб-дизайна, включая HTML, CSS и принципы адаптивного
					дизайна. Развивайте навыки создания визуально привлекательных и
					удобных для пользователя веб-сайтов`}
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
