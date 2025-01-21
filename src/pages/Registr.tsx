import { useDispatch } from 'react-redux'
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth'
import { useNavigate } from 'react-router'

import { setUser } from '~/store/slices/userSlice'
import Form from '~/widgets/form/form'

import style from '../shared/style/main.module.scss'

const Registr: React.FC = () => {
	const dispatch = useDispatch()
	const navigate = useNavigate()

	const handleRegister = async (
		event: React.FormEvent<HTMLFormElement>,
		email: string,
		password: string
	) => {
		event.preventDefault()
		const auth = getAuth()
		console.log(auth, 'auth')
		console.log(email, password, 'email pass')

		createUserWithEmailAndPassword(auth, email, password)
			.then(userCredential => {
				// Signed up
				const user = userCredential.user
				console.log(user, 'RI_user')
				// ...
			})
			.catch(error => {
				const errorCode = error.code
				console.log(errorCode, 'RI_errorCode')
				const errorMessage = error.message
				console.error(errorMessage, 'RI_errormessage')
				// ..
			})

		try {
			const { user } = await createUserWithEmailAndPassword(
				auth,
				email,
				password
			)
			console.log(user, 'user')

			dispatch(
				setUser({
					email: user.email,
					id: user.uid,
					token: user.refreshToken
				})
			)

			navigate('/acc')
		} catch (error) {
			console.error(error)
		}
	}

	return (
		<div>
			<main className={style.maine}>
				<Form
					title='Регистрация'
					descr='Зарегистрируйтесь на SkillBridge!'
					name={false}
					handleClick={(e, email, pass) => handleRegister(e, email, pass)}
				/>
			</main>
		</div>
	)
}

export default Registr
