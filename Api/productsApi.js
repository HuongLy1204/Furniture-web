import axiosClient from './axiosClient'

const productsApi = {
	getAll() {
		const url = '/products'
		return axiosClient.get(url)
	},
	createCategory(body) {
		const url = '/create-category'
		return axiosClient.post(url, body)
	},
	createProduct(body) {
		const url = '/create-product'
		return axiosClient.post(url, body)
	},
}
export default productsApi
