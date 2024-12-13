import type { FC } from 'react'
import logo from '../../shared/assets/img/Logo.svg'
import style from './header.module.scss'

const Header: FC = () => {
	return (
		<header className={style.header}>
			<div className={style.header_box}>
				<div className={style.header_left}>
					<img src={logo} alt='logo' className={style.header_logo} />
					<div className={style.header_menu}>
						<a href='' className={style.header_menu_link}>
							Главная
						</a>
						<a href='' className={style.header_menu_link}>
							Курсы
						</a>
						<a href='' className={style.header_menu_link}>
							О нас
						</a>
						<a href='' className={style.header_menu_link}>
							Цены
						</a>
						<a href='' className={style.header_menu_link}>
							Контакты
						</a>
					</div>
				</div>
				<div className={style.header_right}>
					<a href='' className={style.header_right_signup}>
						Регистрация
					</a>
					<a href='' className={style.header_right_signin}>
						Войти
					</a>
				</div>
			</div>
		</header>
	)
}

export default Header
