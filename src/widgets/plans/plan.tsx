import React from 'react'

import Button from '~/shared/ui/button'
import AvailableItem from './availableItem'

import { yes } from '~/shared/assets/index'
import style from './plans.module.scss'

interface IPlanProps {
	title: string
	price: number
}

const Plan: React.FC<IPlanProps> = ({ title, price }) => {
	return (
		<div className={style.plan}>
			<div className={style.plan_wrapper}>
				<div className={style.plan_title}>
					<span className={style.plan_title_text}>{title}</span>
				</div>
				<div className={style.plan_price}>
					<span className={style.plan_price_coin}>${price}</span>
					<span className={style.plan_price_month}>/в месяц</span>
				</div>
				<div className={style.plan_available}>
					<span className={style.plan_available_title}>Доступные функции</span>
					<div className={style.plan_available_list}>
						{Array(7)
							.fill(null)
							.map((id: number) => (
								<AvailableItem
									key={id}
									img={yes}
									text='Доступ к бесплатным курсам'
								/>
							))}
					</div>
				</div>
				<Button className={style.plan_available_btn}>Начать обучение</Button>
			</div>
		</div>
	)
}

export default Plan
