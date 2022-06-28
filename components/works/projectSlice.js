import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import projectsApi from '../../Api/projectsApi'
export const projectThunk= createAsyncThunk("projects/getAll", async(params,thunkAppi)=>{
    const res= await projectsApi.getAll()
    return res
})
const project = createSlice({
	name: 'projects',
	initialState: {
		projects: [],
        loading: false,
		error: '',
	},

	reducers: {
		addProject: (state, action) => {
			state.current.push(action.payload)
		},
	},
    extraReducers:{
[projectThunk.pending]:(state)=>{
    state.loading= true
},
[projectThunk.rejected]:(state,action)=>{
    state.loading= false
    state.error= action.error
},
[projectThunk.fulfilled]:(state,action)=>{
    state.loading=false
    state.projects=action.payload
}
    }
})
const{reducer,actions}=project
export const {addProject} = actions
export default reducer

