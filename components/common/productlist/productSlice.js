import { accordionActionsClasses } from '@mui/material'
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import productsApi from '../../../Api/productsApi'

export const productsThunk = createAsyncThunk('category/getAll', async (params, thunkApi) => {
	const response = await productsApi.getAll()
	return response
})
const product = createSlice({
	name: 'products',
	initialState: {
		current: [],
		loading: false,
		error: '',
	},
	reducers: {
		addProduct: (state, action) => {
			state.current.push(action.payload)

		},
		deleteProduct: (state, action) => {
			const deleteProduct = action.payload
			return state.current.filter((product) => product.id !== deleteProduct)
		},
		updateProduct: (state, action) => {
			const newProduct = action.payload
			const productIndex = state.current.findIndex((product) => product.id === newProduct.id)
			if (productIndex >= 0) {
				state[productIndex] = newProduct
			}
		},
	},
	extraReducers: {
		[productsThunk.pending]: (state) => {
			state.loading = true
		},
		[productsThunk.rejected]: (state, action) => {
			;(state.loading = false), (state.error = action.error)
		},
		[productsThunk.fulfilled]: (state, action) => {
			state.loading = false
			state.current = action.payload
		},
	},
})
const { reducer, actions } = product
export const { addProduct, deleteProduct, updateProduct } = actions
export default reducer
