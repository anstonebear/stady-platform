import React from 'react'

import { Container } from '~/shared/ui/container'
import CoursesCard from './coursesCard'
import { image1, image2, image3 } from '~/shared/public/index'
import style from './coursesCards.module.scss'

const CoursesCards = () => {
	return (
		<div className={style.coursesCards}>
			<Container>
				<div className={style.coursesCards_wrapper}>
					{Array(6)
						.fill(null)
						.map((course, id) => (
							<CoursesCard
								key={id}
								img1={image1}
								img2={image2}
								img3={image3}
								title={`Фундаментальный веб-дизаин`}
								descr={`Изучите основы веб-дизайна, включая HTML, CSS и принципы адаптивного
					дизайна. Развивайте навыки создания визуально привлекательных и
					удобных для пользователя веб-сайтов`}
								experience={`начинающий`}
								level={`4 недели`}
								teacher={`by Jhon Smith`}
								lesson1={`Введение в HTML`}
								lesson2={`CSS стилизация`}
								lesson3={`Введение в адаптивный дизаин`}
								lesson4={`Принципы веб-дизайна`}
								lesson5={`Создание веб-сайта`}
							/>
						))}
				</div>
			</Container>
		</div>
	)
}

export default CoursesCards
