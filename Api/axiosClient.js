import axios from 'axios'

const axiosClient = axios.create({
	baseURL: "https://shopp-backend.herokuapp.com/api",
	headers: {
		'Content-Type': 'application/json',
	},
})
export default axiosClient
axiosClient.interceptors.request.use(
	function (config) {
		return config
	},
	function (error) {
		return Promise.reject(error)
	}
)

axiosClient.interceptors.response.use(
	function (response) {
		return response.data
	},
	function (error) {
		return Promise.reject(error)
	}
)
