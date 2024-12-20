import React from 'react'

import TestimonialsCard from './testimonialsCard'
import style from './testimonials.module.scss'

const Testimonials = () => {
	return (
		<div className={style.testimonials}>
			<div className={style.testimonials_box}>
				<div className={style.testimonials_title}>Отзывы</div>
				<div className={style.testimonials_info}>
					<span className={style.testimonials_subtitle}>
						У нас вы найдете реальные отзывы от наших учеников, которые делятся
						своим опытом и достижениями.
					</span>
					<a href='' className={style.testimonials_viewAll}>
						<button className={style.testimonials_viewAll_btn}>
							Показать все
						</button>
					</a>
				</div>

				<div className={style.testimonials_cards}>
					<TestimonialsCard />
					<TestimonialsCard />
					<TestimonialsCard />
					<TestimonialsCard />
				</div>
			</div>
		</div>
	)
}

export default Testimonials
