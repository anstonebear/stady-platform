import React from 'react'

import { lightning } from '~/shared/assets/img/index'

import style from './banner.module.scss'

const Banner = () => {
	return (
		<div className={style.banner}>
			<div className={style.slogan}>
				<img
					src={lightning}
					alt='lightning'
					className={style.slogan_lightning}
				/>
				<h1 className={style.slogan_text}>свой творческий потенциал</h1>
			</div>
			<div className={style.enticement}>
				<span className={style.enticement_text}>
					с оналайн-курсами по дизайну и разработке.
				</span>
				<span className={style.enticement_txt}>
					Учись у отраслевых экспертов и совершенствуй свои навыки.
				</span>
			</div>
			<div className={style.buttons}>
				<a href='' className={style.buttons_course}>
					Записаться на курс
				</a>
				<a href='' className={style.buttons_price}>
					Узнать цены
				</a>
			</div>
		</div>
	)
}

export default Banner
