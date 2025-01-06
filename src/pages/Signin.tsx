import { useDispatch } from 'react-redux'
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth'
import { useNavigate } from 'react-router'

import { setUser } from '~/store/slices/userSlice'
import Form from '~/widgets/form/form'

import style from '../shared/style/main.module.scss'

const Signin: React.FC = () => {
	const dispatch = useDispatch()
	const navigate = useNavigate()

	const handelSignIn = (
		event: React.FormEvent<HTMLFormElement>,
		email: string,
		password: string
	) => {
		event.preventDefault()
		const auth = getAuth()
		console.log(auth)
		signInWithEmailAndPassword(auth, email, password)
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
			.catch(() => alert('Invalid user!'))
	}

	return (
		<div>
			<main className={style.maine}>
				<Form
					title='Вход'
					descr='Добро пожаловать на SkillBridge!'
					name={true}
					handleClick={() => handelSignIn}
				/>
			</main>
		</div>
	)
}

export default Signin
