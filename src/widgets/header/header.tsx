import React from 'react';

//import { Container } from '../../shared/ui/container';
import logo from '../../assets/img/Logo.svg';
import style from './header.module.scss';

const Header = () => {
	return (
		<header className={style.header}>
			<div className={style.header_box}>
				<div className={style.header_box_left}>
					<img src={logo} alt='logo' className={style.header_logo} />

					<div className={style.header_box_menu}>
						<a href='' className={style.header_box_nav}>
							Главная
						</a>
						<a href='' className={style.header_box_nav}>
							Курсы
						</a>
						<a href='' className={style.header_box_nav}>
							О нас
						</a>
						<a href='' className={style.header_box_nav}>
							Цены
						</a>
						<a href='' className={style.header_box_nav}>
							Контакты
						</a>{' '}
					</div>
				</div>
				<div className={style.header_box_right}>
					<a href='' className={style.header_box_signup}>
						Регистрация
					</a>

					<button className={style.header_box_signin}>
						<a href='' className={style.header_box_signin_nav}>
							Войти
						</a>
					</button>
				</div>
			</div>
		</header>
	);
};

export default Header;
