import { Routes, Route } from 'react-router'

import Header from '../widgets/header/header'
import Footer from '../widgets/footer/footer'
import Home from '../pages/Home'
import Courses from '../pages/Courses'
import Course from '~/pages/Course'
import AboutUs from '../pages/AboutUs'
import Pricing from '../pages/Pricing'
import Contacts from '~/pages/Contacts'
import Signin from '~/pages/Signin'
import Registr from '~/pages/Registr'
import Account from '~/pages/Account'

import './App.css'

function App() {
	return (
		<div className='App'>
			<Header />

			<Routes>
				<Route path='/' element={<Home />} />
				<Route path='/courses' element={<Courses />} />
				<Route path='/course' element={<Course />} />
				<Route path='/aboutus' element={<AboutUs />} />
				<Route path='/pricing' element={<Pricing />} />
				<Route path='/contacts' element={<Contacts />} />
				<Route path='/signin' element={<Signin />} />
				<Route path='/registr' element={<Registr />} />
				<Route path='/acc' element={<Account />} />
			</Routes>

			<Footer />
		</div>
	)
}

export default App
