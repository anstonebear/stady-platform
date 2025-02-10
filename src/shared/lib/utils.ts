import { isAxiosError } from 'axios'

// const API_URL = 'https://platform-courses.emgushovs.ru/api'

export const tryThrow = async <T>({
	fn
}: {
	fn: () => Promise<T>
}): Promise<T | undefined> => {
	try {
		return await fn()
	} catch (error) {
		if (isAxiosError(error)) {
			console.log(error.response?.data, 'RI_Error fetching courses')
		}
		if (error instanceof Error) {
			console.log(error.message, 'RI_Error ')
		}
	}
}

// import axios, { isAxiosError } from 'axios'

// const API_URL = 'https://platform-courses.emgushovs.ru/api'

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
