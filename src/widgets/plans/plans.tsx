import React from 'react'

import { Container } from '~/shared/ui/container'
import Plan from './plan'

import style from './plans.module.scss'

const Plans = () => {
	return (
		<div className={style.plans}>
			<Container>
				<div className={style.plans_wrapper}>
					{Array(2)
						.fill(null)
						.map((id: number) => (
							<Plan key={id} title='Базовый' price={0} />
						))}
				</div>
			</Container>
		</div>
	)
}

export default Plans
