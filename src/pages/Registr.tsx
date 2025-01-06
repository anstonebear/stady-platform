import { useDispatch } from 'react-redux'
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth'
import { useNavigate } from 'react-router'

import { setUser } from '~/store/slices/userSlice'
import Form from '~/widgets/form/form'

import style from '../shared/style/main.module.scss'

const Registr: React.FC = () => {
	const dispatch = useDispatch()
	const navigate = useNavigate()

	const handleRegister = (
		event: React.FormEvent<HTMLFormElement>,
		email: string,
		password: string
	) => {
		event.preventDefault()
		const auth = getAuth()
		console.log(auth)
		createUserWithEmailAndPassword(auth, email, password)
			.then(({ user }) => {
				console.log(user)
				dispatch(
					setUser({
						email: user.email,
						id: user.uid,
						token: user.refreshToken
					})
				)
				navigate('/')
			})
			.catch(console.error)
	}

	return (
		<div>
			<main className={style.maine}>
				<Form
					title='Регистрация'
					descr='Зарегистрируйтесь на SkillBridge!'
					name={false}
					handleClick={() => handleRegister}
				/>
			</main>
		</div>
	)
}

export default Registr
