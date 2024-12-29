import React from 'react'

import AboutBlock from '~/widgets/aboutBlock/aboutBlock'
import ContactsCard from '~/widgets/contactsCard/contactsCard'

import style from '../shared/style/main.module.scss'

const Contacts: React.FC = () => {
	return (
		<div>
			<main className={style.main}>
				<AboutBlock
					title='Связаться с нами'
					text='Добро пожаловать на страницу c контактами SkillBridge, где вы можете оставить свои контактные данные и мы свяжемся с вами в любое удобное вам время, где вы сможете задать любые интересующие вас вопросы.    '
				/>
				<ContactsCard />
			</main>
		</div>
	)
}

export default Contacts
