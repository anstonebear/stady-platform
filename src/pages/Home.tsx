import React from 'react'

import Banner from '~/widgets/banner/banner'
import Partners from '~/widgets/ui/partners/partners'
import Pic from '~/widgets/ui/pic/pic'
import Benefits from '~/widgets/benefits/benefits'
import OurCurses from '~/widgets/ourCurses/ourCurses'
import Testimonials from '~/widgets/testimonials/testimonials'

import style from '../shared/style/main.module.scss'

const Home = () => {
	return (
		<main className={style.main}>
			<Banner />
			<Partners />
			<Pic />
			<Benefits />
			<OurCurses />
			<Testimonials />
		</main>
	)
}

export default Home
