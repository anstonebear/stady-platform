import React from 'react'

import Banner from '~/widgets/banner/banner'
import Partners from '~/widgets/ui/partners/partners'
import Pic from '~/widgets/ui/pic/pic'

import style from './Home.module.scss'

const Home = () => {
	return (
		<main className={style.main}>
			<Banner />
			<Partners />
			<Pic />
		</main>
	)
}

export default Home
