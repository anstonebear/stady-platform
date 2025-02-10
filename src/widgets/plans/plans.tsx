import { useEffect, useState } from 'react'

import { Container } from '~/shared/ui/container'
import Plan from './plan'

import { courseService } from '~/shared/services/courses'
import { tryThrow } from '~/shared/lib/utils'

import style from './plans.module.scss'

interface IPlansProps {
	title: string
	price: number
	text: string
	id: number
	description: string
}

const Plans = () => {
	const [plans, setPlans] = useState<IPlansProps[]>([])
	//const [lessons, setLessons] = useState<ILessonsProps[]>([])

	const getPlans = async () => {
		const data = await tryThrow({ fn: () => courseService.dataPlan() })

		setPlans(data)
	}

	useEffect(() => {
		getPlans()
	}, [])

	return (
		<div className={style.plans}>
			<Container>
				<div className={style.plans_wrapper}>
					{plans.map(plans => (
						<Plan
							key={plans.id}
							title={plans.title}
							price={plans.price}
							text={plans.description}
						/>
					))}
				</div>
			</Container>
		</div>
	)
}

export default Plans
