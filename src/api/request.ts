import axios from 'axios'

export const instance = axios.create({
	headers: {
		'Content-Type': 'application/json'
	},
	baseURL: import.meta.env.VITE_REACT_APP_API_URL
})

console.log(instance, 'RI_instance')
// export const dataCourses = async () => {
// 	try {
// 		const response = await axios.get(`${API_URL}/course`)
// 		return response.data
// 	} catch (error) {
// 		if (isAxiosError(error)) {
// 			console.log(error.response?.data, 'RI_Error fetching courses')
// 		} else if (error instanceof Error) {
// 			console.log(error.message, 'RI_Error ')
// 		}
// 	}
// }
// axios({
// 	url: `${API_URL}/course`,
// 	method: 'GET'
// })
