import { initializeApp } from 'firebase/app'
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

export const app = initializeApp(firebaseConfig)
//export const analytics = getAnalytics(app)
