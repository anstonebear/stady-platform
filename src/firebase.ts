import { initializeApp } from 'firebase/app'
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth'
//import { getAnalytics } from 'firebase/analytics'

console.log(import.meta.env)

const firebaseConfig = {
	apiKey: import.meta.env.VITE_REACT_APP_FIREBASE_API_KEY,
	authDomain: import.meta.env.VITE_REACT_APP_FIREBASE_API_DOMAIN,
	projectId: import.meta.env.VITE_REACT_APP_FIREBASE_API_PROJECT_ID,
	storageBucket: import.meta.env.VITE_REACT_APP_FIREBASE_API_STORAGE_BUCKET,
	messagingSenderId: import.meta.env
		.VITE_REACT_APP_FIREBASE_API_MESSAGING_SENDER_ID,
	appId: import.meta.env.VITE_REACT_APP_FIREBASE_API_APP_ID,
	measurementId: import.meta.env.VITE_REACT_APP_FIREBASE_API_MEASUREMENT_ID
}

console.log(firebaseConfig, 'RI_firebaseConfig')

if (!firebaseConfig.apiKey || !firebaseConfig.authDomain) {
	console.error('Firebase-конфигурация не определена')
	throw new Error('Firebase-конфигурация не определена')
}

export const app = initializeApp(firebaseConfig)
export const auth = getAuth(app)
export const createAccount = async (email: string, password: string) => {
	const user = await createUserWithEmailAndPassword(auth, email, password)
	console.log(user, 'RI_user SDDFHTSRDHFHTESRDHFFDSTERHDFM')
	//
}

//export const analytics = getAnalytics(app)
