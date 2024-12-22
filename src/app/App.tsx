import Header from '../widgets/header/header'
import Footer from '../widgets/footer/footer'
//import Home from '../pages/Home'
import Courses from '../pages/Courses'

import './App.css'

function App() {
	return (
		<div className='App'>
			<Header />
			{/* <Home /> */}
			<Courses />
			<Footer />
		</div>
	)
}

export default App
