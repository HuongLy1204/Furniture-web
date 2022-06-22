import { Button, Stack, Typography } from '@mui/material'
import { Box } from '@mui/system'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import productsApi from '../../Api/productsApi'


const preventDefault = f => e => {
	e.preventDefault()
	f(e)
  }

export default function EditForm() {
	const [value, setValue] = useState('')
	// const { register, handleSubmit } = useForm()

	const handleSubmit = async (e) => {
		e.preventDefault()
		console.log(e)
		const res = await productsApi.createCategory({ title: "dem cam su" })
		console.log(res)
	}
	return (
		<Box
			width={500}
			height={250}
			component="form"
			sx={{
				m: 6,
				width: 400,
			}}
		>
			<form action="" onSubmit="{handleSubmit}">
				<input type="text" name="title" />
			</form>
			{/* <form onSubmit={handleSubmit}> */}
				{/* <input {...register('title')}></input> */}
				{/* <input {...register('thang')}/> */}
				{/* <input type="text" placeholder="thang123" /> */}
				{/* <input type="submit">tao</input> */}
			{/* </form> */}
		</Box>
	)
}
