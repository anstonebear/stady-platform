import Header from '../widgets/header/header'
import Footer from '../widgets/footer/footer'
//import Home from '../pages/Home'
// import Courses from '../pages/Courses'
//import Course from '~/pages/Course'
//import AboutUs from '../pages/AboutUs'
import Pricing from '../pages/Pricing'

import './App.css'

function App() {
	return (
		<div className='App'>
			<Header />
			{/* <Home /> */}
			{/* <Courses /> */}
			{/* <Course /> */}
			{/* <AboutUs /> */}
			<Pricing />
			<Footer />
		</div>
	)
}

export default App
