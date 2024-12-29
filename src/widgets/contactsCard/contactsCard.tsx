import React from 'react'

import Button from '~/shared/ui/button'
import InputBlock from './inputBlock'
import SocialMediaBlock from './socialMediaBlock'

import { Container } from '~/shared/ui/container'

import {
	phone,
	mail,
	point,
	linked,
	facebook,
	twit
} from '~/shared/assets/index'

import style from './contactsCard.module.scss'

const socialMediaData: { [key: number]: { imgs: string[]; text: string } } = {
	1: {
		imgs: [phone],
		text: 'Телефон'
	},
	2: {
		imgs: [mail],
		text: 'Email'
	},
	3: {
		imgs: [point],
		text: 'Адрес'
	},
	4: {
		imgs: [linked, facebook, twit],
		text: 'Контакты'
	}
}

const ContactsCard: React.FC = () => {
	return (
		<div className={style.contactsCard}>
			<Container>
				<div className={style.contactsCard_wrapper}>
					<div className={style.contactsCard_left}>
						<div className={style.contactsCard_left_personalInfo}>
							<InputBlock
								className={style.contactsCard_left_personalInfo_input}
								title='Имя'
								type='text'
								placeholderText='Введите ваше имя'
							/>
							<InputBlock
								className={style.contactsCard_left_personalInfo_input}
								title='Фамилия'
								type='text'
								placeholderText='Введите вашу фамилию'
							/>
							<InputBlock
								className={style.contactsCard_left_personalInfo_input}
								title='Email'
								type='email'
								placeholderText='Введите адрес электронной почты'
							/>
							<InputBlock
								className={style.contactsCard_left_personalInfo_input}
								title='Телефон'
								type='tel'
								placeholderText='Введите ваш номер телефона'
							/>
						</div>
						<div className={style.contactsCard_left_message}>
							<span className={style.contactsCard_left_message_title}>
								Сообщение
							</span>
							<textarea
								placeholder='Ваше сообщение'
								className={style.contactsCard_left_message_input}
							></textarea>
						</div>
						<div className={style.contactsCard_left_button}>
							<Button className={style.contactsCard_left_btn}>Отправить</Button>
						</div>
					</div>
					<div className={style.contactsCard_right}>
						{Object.keys(socialMediaData).map((id: string) => (
							<SocialMediaBlock
								key={id}
								imgs={socialMediaData[+id].imgs}
								text={socialMediaData[+id].text}
							/>
						))}
					</div>
				</div>
			</Container>
		</div>
	)
}

export default ContactsCard
