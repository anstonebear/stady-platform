import React from 'react'

import style from './testimonials.module.scss'

interface UserProps {
	name: string
	avatar: string
}

const User: React.FC<UserProps> = ({ name, avatar }) => {
	return (
		<div className={style.testimonials_cards_card_user}>
			<img
				src={avatar}
				alt={name}
				className={style.testimonials_cards_card_avatar}
			/>
			<span className={style.testimonials_cards_card_name}>{name}</span>
		</div>
	)
}

export default User
