import axios from 'axios'

const API_URL = 'https://platform-courses.emgushovs.ru/api'

export const dataCourses = axios({
	url: `${API_URL}/course`,
	method: 'GET'
})
