import React from 'react'

import Form from '~/widgets/form/form'

import style from '../shared/style/main.module.scss'

const Login: React.FC = () => {
	return (
		<div>
			<main className={style.maine}>
				<Form title='Регистрация' descr='Добро пожаловать на SkillBridge!' />
			</main>
		</div>
	)
}

export default Login
