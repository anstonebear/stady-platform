import type { FC } from 'react'
import { Link } from 'react-router'

import Button from '~/shared/ui/button'
import { Container } from '~/shared/ui/container'

import logo from '../../shared/assets/img/Logo.svg'
import style from './header.module.scss'

const Header: FC = () => {
	return (
		<header className={style.header}>
			<Container>
				<div className={style.header_wrapper}>
					<div className={style.header_left}>
						<Link to='/'>
							<img src={logo} alt='logo' className={style.header_logo} />
						</Link>

						<nav className={style.header_menu}>
							<Link to='/' className={style.header_menu_link}>
								Главная
							</Link>
							<Link to='/' className={style.header_menu_link}>
								Курсы
							</Link>
							<Link to='/' className={style.header_menu_link}>
								О нас
							</Link>
							<Link to='/' className={style.header_menu_link}>
								Цены
							</Link>
							<Link to='/' className={style.header_menu_link}>
								Контакты
							</Link>
						</nav>
					</div>
					<div className={style.header_right}>
						<Button to='/' className={style.header_right_signup}>
							Регистрация
						</Button>
						<Button to='/' className={style.header_right_signin}>
							Войти
						</Button>
					</div>
				</div>
			</Container>
		</header>
	)
}

export default Header
