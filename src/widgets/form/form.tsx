import { useState } from 'react'
//import { SubmitHandler, useForm } from 'react-hook-form'
import { Container } from '~/shared/ui/container'
import InputBlock from './inputBlock'
import Button from '~/shared/ui/button'

import style from './form.module.scss'
//import { Link } from 'react-router'

const InputData: {
	[key: number]: {
		title: string
		text: string
		placeholderText: string
		type: string
	}
} = {
	1: {
		title: 'Имя',
		type: 'text',
		placeholderText: 'Введите имя',
		text: ''
	},
	2: {
		title: 'Email',
		type: 'email',
		placeholderText: 'Введите адрес электронной почты',
		text: ''
	},
	3: {
		title: 'Пароль',
		type: 'password',
		placeholderText: 'Введите пароль',
		text: ''
	}
}

interface IFormProps {
	title: string
	descr: string
	name: boolean
	handleClick: (
		event: React.FormEvent<HTMLFormElement>,
		email: string,
		pass: string
	) => void
}

// interface ISubmitForm {
// 	email: string
// 	pass: string
// 	name?: string
// 	message?: string
// }

const Form: React.FC<IFormProps> = ({
	title,
	descr,
	name = false,
	handleClick
}) => {
	const [email, setEmail] = useState('')
	const [pass, setPass] = useState('')
	//const [name, setName] = useState('')

	// const { register, handleSubmit, formState } = useForm<ISubmitForm>({
	// 	mode: 'onChange'
	// })

	// const emailError = formState.errors?.message
	// const passError = formState.errors?.message
	//const nameError =formState.errors?.name && setName('')

	// const onSubmit: SubmitHandler<ISubmitForm> = data => {
	// 	console.log(data, 'данные формы')
	// }

	//onSubmit={handleSubmit(onSubmit)}

	return (
		<form className={style.form} onSubmit={e => handleClick(e, email, pass)}>
			<Container>
				<div className={style.form_wrapper}>
					<h1 className={style.form_title}>{title}</h1>
					<span className={style.form_descr}>{descr}</span>
					<div className={style.form_inputs}>
						{Object.keys(InputData).map((id: string) =>
							+id === 1 && !name ? null : (
								<InputBlock
									key={id}
									className={style.form_inputs_input}
									title={InputData[+id].title}
									type={InputData[+id].type}
									placeholderText={InputData[+id].placeholderText}
									value={+id === 2 ? email : +id === 3 ? pass : ''}
									// {...register('email', {
									// 	required: 'Поле обязательно к заполнению',
									// 	pattern: {
									// 		value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
									// 		message: 'Неверный формат email'
									// 	}
									// })}
									// {...register('pass', {
									// 	required: 'Поле обязательно к заполнению',
									// 	pattern: {
									// 		value: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/,
									// 		message:
									// 			'Пароль должен содержать минимум 8 символов, включая буквы и цифры'
									// 	}
									// })}
									onChange={e =>
										+id === 2
											? setEmail(e.target.value)
											: +id === 3
												? setPass(e.target.value)
												: null
									}
								/>
							)
						)}
						{/* {emailError && (
							<p className={style.form_inputs_error}>{emailError.message}</p>
						)}

						{passError && (
							<p className={style.form_inputs_error}>{passError.message}</p>
						)} */}
					</div>
					<div className={style.form_agree}>
						<input
							type='checkbox'
							id='agree'
							className={style.form_agree_checkbox}
						/>
						<label htmlFor='agree'>запомнить меня</label>
					</div>
					<div className={style.form_button}>
						<Button className={style.form_button_btn} type='submit'>
							Отправить
						</Button>
					</div>
					<div className={style.form_borderline}>или</div>
					<div className={style.form_button}>
						<Button className={style.form_button_btnGoogle} type='submit'>
							<img
								src='https://img.icons8.com/color/48/000000/google-logo.png'
								alt=''
								className={style.form_button_btnGoogle_img}
							/>
							<span>Войти с помощью Google</span>
						</Button>
					</div>
					{/* <div className={style.form_links}>
						<Link to='#'>Забыли пароль?</Link>
					</div> */}
				</div>
			</Container>
		</form>
	)
}

export default Form
