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
	updateProduct(body, id) {
		const url = `/product/${id}`
		return axiosClient.put(url, body)
	},
	updateCategory(body,id){
		const url= `/category/${id}`
		return axiosClient.put(url,body)
	},
	deleteCategory(id){
		const url=`/category/${id}`
		return axiosClient.delete(url)
	},
	deleteProduct(id){
		const url=`/product/${id}`
		return axiosClient.delete(url)
	},
}
export default productsApi
