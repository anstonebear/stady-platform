import { FC } from 'react'

import {
	point,
	mail,
	phone,
	linked,
	facebook,
	twit,
	Logo
} from '../../shared/assets/img/index'

import style from './footer.module.scss'

const Footer: FC = () => {
	return (
		<footer className={style.footer}>
			<div className={style.footer_box}>
				<div className={style.footer_top}>
					<div className={style.footer_contacts}>
						<img src={Logo} alt='' className={style.footer_logo} />

						<div className={style.footer_contacts_menu}></div>
						<div className={style.footer_contacts_item}>
							<img src={mail} alt='' className={style.mail} />
							<span className={style.footer_mail}>hello@skillbridge.com</span>
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

					<div className={style.footer_info}>
						<div className={style.footer_info_menu}>
							<span className={style.footer_info_title}>Главная</span>
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
							<span className={style.footer_info_title}>О нас</span>
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
							<span className={style.footer_info_title}>Социальные сети</span>
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
									<img src={linked} alt='linkedin' className={style.icon_img} />
								</a>
							</div>
						</div>
					</div>
				</div>
				<div className={style.footer_copyright}>
					<span className='footer_copyright_line'>
						© 2024 Skillbridge. Все права защищены.
					</span>
				</div>
			</div>
		</footer>
	)
}

export default Footer
