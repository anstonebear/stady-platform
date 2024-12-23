import React from 'react'

import { Container } from '~/shared/ui/container'
import CurriculumCard from './curriculumCard'

import style from './curriculum.module.scss'

const Curriculum: React.FC = () => {
	return (
		<div className={style.curriculum}>
			<Container>
				<div className={style.curriculum_wrapper}>
					{Array(5)
						.fill(null)
						.map((course, id) => (
							<CurriculumCard
								key={id}
								number='01'
								title='Введение в UI/UX дизаин'
							/>
						))}
				</div>
			</Container>
		</div>
	)
}

export default Curriculum
