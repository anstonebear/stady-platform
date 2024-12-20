import React from 'react'

import OurCursesCard from './ourCursesCard'

import style from './OurCurses.module.scss'

const OurCurses = () => {
	return (
		<div className={style.ourCurses}>
			<div className={style.ourCurses_box}>
				<div className={style.ourCurses_title}>
					<span className={style.ourCurses_title_txt}>Наши курсы</span>
				</div>
				<div className={style.ourCurses_info}>
					<span className={style.ourCurses_info_txt}>
						У нас вы найдете курсы по различным направлениям, которые помогут
						вам расширить свои горизонты. Наши преподаватели - эксперты,
						преподающие в доступной форме.
					</span>

					<a href=''>
						<button className={style.ourCurses_info_btn}>Показать все</button>
					</a>
				</div>
				<div className={style.ourCurses_items}>
					<OurCursesCard />
					<OurCursesCard />
					<OurCursesCard />
					<OurCursesCard />
				</div>
			</div>
		</div>
	)
}

export default OurCurses
