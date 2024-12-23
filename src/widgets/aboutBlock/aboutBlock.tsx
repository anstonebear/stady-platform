import React from 'react'

import { Container } from '~/shared/ui/container'
import style from './aboutBlock.module.scss'

interface IaboutBlockProps {
	title: string
	text: string
}

const AboutCourses: React.FC<IaboutBlockProps> = ({ title, text }) => {
	return (
		<div className={style.aboutBlock}>
			<Container>
				<div className={style.aboutBlock_wrapper}>
					<h1 className={style.aboutBlock_title}>{title}</h1>
					<h2 className={style.aboutBlock_text}>{text}</h2>
				</div>
			</Container>
		</div>
	)
}

export default AboutCourses
