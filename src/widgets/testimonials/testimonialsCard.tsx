import React from 'react'

import user from '../../shared/assets/img/user.svg'
import style from './testimonials.module.scss'

const TestimonialsCard = () => {
	return (
		<div className={style.testimonials_cards_card}>
			<div className={style.testimonials_cards_card_text}>
				Курс веб-дизайна дал мне прочную основу. Преподаватели были знающими и
				поддерживающими, а интерактивная среда обучения была увлекательной. Я
				настоятельно рекомендую его!
			</div>
			<div className={style.testimonials_cards_card_info}>
				<div className={style.testimonials_cards_card_user}>
					<img
						src={user}
						alt='user'
						className={style.testimonials_cards_card_avatar}
					/>
					<span className={style.testimonials_cards_card_name}>Сара Л.</span>
				</div>
				<a href='' className={style.testimonials_cards_card_btn}>
					Читать всю историю
				</a>
			</div>
		</div>
	)
}

export default TestimonialsCard
