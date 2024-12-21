import React from 'react'

import User from './user'
//import user from '../../shared/assets/img/user.svg'
import style from './testimonials.module.scss'
import Button from '~/shared/ui/button'

interface TestimonialsCardProps {
	text: string
	name: string
	avatar: string
}

const TestimonialsCard: React.FC<TestimonialsCardProps> = ({
	text,
	name,
	avatar
}) => {
	return (
		<div className={style.testimonials_cards_card}>
			<div className={style.testimonials_cards_card_text}>{text}</div>
			<div className={style.testimonials_cards_card_info}>
				<User name={name} avatar={avatar} />
				<Button to='' className={style.testimonials_cards_card_btn}>
					Читать всю историю
				</Button>
			</div>
		</div>
	)
}

export default TestimonialsCard

// const TestimonialsCard = () => {
// 	return (
// 		<div className={style.testimonials_cards_card}>
// 			<div className={style.testimonials_cards_card_text}>
// 				Курс веб-дизайна дал мне прочную основу. Преподаватели были знающими и
// 				поддерживающими, а интерактивная среда обучения была увлекательной. Я
// 				настоятельно рекомендую его!
// 			</div>
// 			<div className={style.testimonials_cards_card_info}>
// 				<div className={style.testimonials_cards_card_user}>
// 					<img
// 						src={user}
// 						alt='user'
// 						className={style.testimonials_cards_card_avatar}
// 					/>
// 					<span className={style.testimonials_cards_card_name}>Сара Л.</span>
// 				</div>
// 				<a href='' className={style.testimonials_cards_card_btn}>
// 					Читать всю историю
// 				</a>
// 			</div>
// 		</div>
// 	)
// }

//export default TestimonialsCard
