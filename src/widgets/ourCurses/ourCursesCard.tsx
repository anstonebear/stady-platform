import React from 'react'
import img from '../../shared/assets/img/Image.png'

import style from './OurCurses.module.scss'

const OurCursesCard = () => {
	return (
		<div className={style.ourCurses_items_card}>
			<img src={img} alt='' className={style.ourCurses_items_img} />
			<div className={style.ourCurses_items_beginning}>
				<div className={style.ourCurses_items_experience}>
					<span className={style.ourCurses_items_level}>4 недели</span>
					<span className={style.ourCurses_items_level}>начинающий</span>
				</div>
				<span className={style.ourCurses_items_teacher}>by Jhon Smith</span>
			</div>
			<div className={style.ourCurses_items_info}>
				<span className={style.ourCurses_items_title}>
					Фундаментальный веб-дизаин
				</span>
				<span className={style.ourCurses_items_descr}>
					Изучите основы веб-дизайна, включая HTML, CSS и принципы адаптивного
					дизайна. Развивайте навыки создания визуально привлекательных и
					удобных для пользователя веб-сайтов
				</span>
			</div>
			<a href='' className={style.ourCurses_items_btn}>
				Начать обучение
			</a>
		</div>
	)
}

export default OurCursesCard
