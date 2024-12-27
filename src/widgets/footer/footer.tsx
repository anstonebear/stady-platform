import { FC } from 'react'
import { Link } from 'react-router'

import { Container } from '~/shared/ui/container'
import {
	point,
	mail,
	phone,
	linked,
	facebook,
	twit,
	Logo
} from '../../shared/assets/index'

import style from './footer.module.scss'

const Footer: FC = () => {
	return (
		<footer className={style.footer}>
			<Container>
				<div className={style.footer_wrapper}>
					<div className={style.footer_top}>
						<div className={style.footer_contacts}>
							<Link to='/'>
								<img src={Logo} alt='' className={style.footer_logo} />
							</Link>
							<div className={style.footer_contacts_menu}>
								<div className={style.footer_contacts_item}>
									<img src={mail} alt='' className={style.mail} />
									<span className={style.footer_mail}>
										hello@skillbridge.com
									</span>
								</div>
								<div className={style.footer_contacts_item}>
									<img src={phone} alt='' className={style.phone} />
									<span className={style.footer_phone}>+ 8 800 555 35 35</span>
								</div>
								<div className={style.footer_contacts_item}>
									<img src={point} alt='' className='location' />
									<span className='footer_location'>Планета земля</span>
								</div>
							</div>
						</div>

						<nav className={style.footer_info}>
							<div className={style.footer_info_menu}>
								<h1 className={style.footer_info_title}>Главная</h1>
								<a href='' className={style.footer_info_item}>
									Курсы
								</a>
								<a href='' className={style.footer_info_item}>
									Отзывы
								</a>
								<a href='' className={style.footer_info_item}>
									FAQ
								</a>
							</div>
							<div className={style.footer_info_menu}>
								<h1 className={style.footer_info_title}>О нас</h1>
								<a href='' className={style.footer_info_item}>
									Компания
								</a>
								<a href='' className={style.footer_info_item}>
									Достижения
								</a>
								<a href='' className={style.footer_info_item}>
									Цели
								</a>
							</div>
							<div className={style.footer_info_menu}>
								<h1 className={style.footer_info_title}>Социальные сети</h1>
								<div className={style.footer_info_social}>
									<a href='' className={style.icon}>
										<img
											src={facebook}
											alt='facebook'
											className={style.icon_img}
										/>
									</a>
									<a href='' className={style.icon}>
										<img src={twit} alt='twitter' className={style.icon_img} />
									</a>
									<a href='' className={style.icon}>
										<img
											src={linked}
											alt='linkedin'
											className={style.icon_img}
										/>
									</a>
								</div>
							</div>
						</nav>
					</div>
					<div className={style.footer_copyright}>
						<span className='footer_copyright_line'>
							© 2024 Skillbridge. Все права защищены.
						</span>
					</div>
				</div>
			</Container>
		</footer>
	)
}

export default Footer
