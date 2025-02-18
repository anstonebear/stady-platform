import { useState } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
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
		placeholderText: 'Введите ваш Gmail',
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

interface ISubmitForm {
	email: string
	pass: string
	name?: string
	message?: string
}

const Form: React.FC<IFormProps> = ({
	title,
	descr,
	name = false,
	handleClick
}) => {
	const [email, setEmail] = useState('')
	const [pass, setPass] = useState('')

	const { register, handleSubmit, formState } = useForm<ISubmitForm>({
		mode: 'onBlur'
	})

	//const nameError =formState.errors?.name && setName('')

	const submit: SubmitHandler<ISubmitForm> = (data: ISubmitForm) => {
		console.log(data, 'данные формы')
	}

	const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		console.log('onSubmit вызван')
		e.preventDefault()
		handleSubmit(submit)(e)
		console.log(handleSubmit(submit), 'handleSubmit вызван')
		handleClick(e, email, pass)
		console.log(handleClick, 'handleClick вызван')
	}
	//onSubmit={handleSubmit(submit)}
	// const handleSubmit = (submit: SubmitHandler<ISubmitForm>) => (e: React.FormEvent<HTMLFormElement>) => {
	// 	submit(e);
	// 	handleClick(e, email, pass);
	//   };
	const emailValidation = {
		required: 'Поле обязательно к заполнению',
		pattern: {
			value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
			message: 'Неверный формат email'
		}
	}

	const passValidation = {
		required: 'Поле обязательно к заполнению',
		pattern: {
			value: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/,
			message:
				'Пароль должен содержать минимум 8 символов, включая буквы и цифры'
		}
	}

	const emailError = formState.errors?.email?.message
	const passError = formState.errors?.pass?.message

	//onSubmit={e => handleClick(e, email, pass)}

	return (
		<form className={style.form} onSubmit={onSubmit}>
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
									{...register(
										+id === 2 ? 'email' : +id === 3 ? 'pass' : 'name',
										{
											required: true,
											pattern:
												+id === 2
													? emailValidation.pattern
													: passValidation.pattern
										}
									)}
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
						{emailError && (
							<p className={style.form_inputs_error}>{emailError}</p>
						)}

						{passError && (
							<p className={style.form_inputs_error}>{passError}</p>
						)}
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
