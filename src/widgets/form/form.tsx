import { useState } from 'react'

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
	handleClick: (email: string, pass: string) => void
}

const Form: React.FC<IFormProps> = ({
	title,
	descr,
	name = false,
	handleClick
}) => {
	const [email, setEmail] = useState('')
	const [pass, setPass] = useState('')
	//const [name, setName] = useState('')
	//const [error, setError] = useState(false)

	return (
		<form className={style.form}>
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
						<Button
							className={style.form_button_btn}
							onClick={() => handleClick(email, pass)}
						>
							Отправить
						</Button>
					</div>
					<div className={style.form_borderline}>или</div>
					<div className={style.form_button}>
						<Button className={style.form_button_btnGoogle}>
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
