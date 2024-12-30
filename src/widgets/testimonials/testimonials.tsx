import React from 'react'

import Button from '~/shared/ui/button'

import { Container } from '~/shared/ui/container'
import TestimonialsCard from './testimonialsCard'
import style from './testimonials.module.scss'

import user from '../../shared/assets/img/user.svg'

const Testimonials = () => {
	return (
		<div className={style.testimonials}>
			<Container>
				<div className={style.testimonials_wrapper}>
					<h1 className={style.testimonials_title}>Отзывы</h1>
					<div className={style.testimonials_info}>
						<span className={style.testimonials_subtitle}>
							У нас вы найдете реальные отзывы от наших учеников, которые
							делятся своим опытом и достижениями.
						</span>

						<Button to='/' className={style.testimonials_viewAll}>
							Показать все
						</Button>
					</div>

					<div className={style.testimonials_cards}>
						{Array(4)
							.fill(null)
							.map((_, id) => (
								<TestimonialsCard
									key={id}
									text={`Курс веб-дизайна дал мне прочную основу. Преподаватели были знающими и
 				поддерживающими, а интерактивная среда обучения была увлекательной. Я
 				настоятельно рекомендую его!`}
									name={`Сара Л.`}
									avatar={user}
								/>
							))}
					</div>
				</div>
			</Container>
		</div>
	)
}

export default Testimonials
