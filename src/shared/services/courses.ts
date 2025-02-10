import { instance } from '~/api/request'

export const courseService = {
	async dataCourses() {
		return (
			await instance({
				url: `/course`,
				method: 'GET'
			})
		).data
	},
	async dataLessons() {
		return (
			await instance({
				url: `/lesson`,
				method: 'GET'
			})
		).data
	},
	async dataSubCourses() {
		return (
			await instance({
				url: `/subcourse`,
				method: 'GET'
			})
		).data
	},
	async dataPlan() {
		return (
			await instance({
				url: `/plan`,
				method: 'GET'
			})
		).data
	}
}
