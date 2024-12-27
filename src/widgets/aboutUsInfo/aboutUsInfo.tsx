import React from 'react'
import { Container } from '~/shared/ui/container'
import InfoCards from './infoCard'

import { crown } from '~/shared/assets/index'

import style from './aboutUsInfo.module.scss'

interface IAboutUsInfoProps {
	title: string
	text: string
}

const AboutUsInfo: React.FC<IAboutUsInfoProps> = ({ title, text }) => {
	return (
		<div className={style.aboutUsInfo}>
			<Container>
				<div className={style.aboutUsInfo_wrapper}>
					<h1 className={style.aboutUsInfo_title}>{title}</h1>
					<p className={style.aboutUsInfo_text}>{text}</p>
					<div className={style.aboutUsInfo_infoCards}>
						{Array(4)
							.fill(null)
							.map(id => (
								<InfoCards
									key={id}
									title='Нам доверяют тысячи людей'
									text='Мы успешно помогли тысячам студентов раскрыть свой потенциал и достичь карьерных целей.'
									img={crown}
								/>
							))}
					</div>
				</div>
			</Container>
		</div>
	)
}

export default AboutUsInfo
