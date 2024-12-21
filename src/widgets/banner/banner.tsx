import React from 'react'

import { Container } from '~/shared/ui/container'
import Button from '~/shared/ui/button'

import { lightning } from '~/shared/assets/img/index'

import style from './banner.module.scss'

const Banner = () => {
	return (
		<div className={style.banner}>
			<Container>
				<div className={style.banner_wrapper}>
					<div className={style.slogan}>
						<img
							src={lightning}
							alt='lightning'
							className={style.slogan_lightning}
						/>
						<h1 className={style.slogan_text}>свой творческий потенциал</h1>
					</div>
					<div className={style.enticement}>
						<h2 className={style.enticement_text}>
							с оналайн-курсами по дизайну и разработке.
						</h2>
						<span className={style.enticement_txt}>
							Учись у отраслевых экспертов и совершенствуй свои навыки.
						</span>
					</div>
					<div className={style.buttons}>
						<Button className={style.buttons_course} to='/courses'>
							Записаться на курс
						</Button>
						<Button className={style.buttons_price} to='/courses'>
							Узнать цены
						</Button>
					</div>
				</div>
			</Container>
		</div>
	)
}

export default Banner
