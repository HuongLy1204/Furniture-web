import { configureStore } from '@reduxjs/toolkit'
import productReducer from '../components/common/productlist/productSlice'
import projectReducer from '../components/works/projectSlice'

const rootReducer = {
	products: productReducer,
	projects: projectReducer,
}
const store = configureStore({
	reducer: rootReducer,
})

export default store
