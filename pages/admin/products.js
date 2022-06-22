import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown'
import React from 'react'

import { Button, Chip, Input, Stack } from '@mui/material'
import { Box } from '@mui/system'
import { forwardRef } from 'react'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import productsApi from '../../Api/productsApi'
import TableProducts from '../../components/admins/TableProducts'
import AdminLayout from '../../components/layout/admin'
import { useSelector } from 'react-redux'





// you can use React.forwardRef to pass the ref too
// eslint-disable-next-line react/display-name
const Select = forwardRef(({ onChange, onBlur, name, label }, ref) =>{
	const categories = useSelector((state) => state.products.current)

	return(
		<>
	  <label>{label}</label>
	  <select name={name} ref={ref} onChange={onChange} onBlur={onBlur}>
		{categories.map(category=> {
			<option value="ly">ly</option>
		} 
			
		)}
		
		
	  </select>
	</>

  )});

export default function ProductsPage() {

	const [isOpen, setIsOpen] = useState(false)
	const { register, handleSubmit } = useForm()
	const handleOpen = () => {
		setIsOpen(!isOpen)
	}
	const onSubmit = async (data) => {
		const res = await productsApi.createProduct({ title: data.title,
		description:data.description })
		console.log(res);
		setIsOpen(!isOpen)
	}

	return (
		<Box>
			<Stack direction="column">
				<Box>
					<Button onClick={handleOpen} sx={{ ml: '10px' }}>
						<Chip label="Thêm sản phẩm" color="success" icon={<ArrowDropDownIcon />} />
					</Button>
					{isOpen ? (
						<Box height={200}>
							<form
								onSubmit={handleSubmit(onSubmit)}
								style={{ marginLeft: '180px', marginTop: '10px' }}
							>
								<Input
									type="text"
									placeholder="Tên sản phẩm"
									style={{ width: '500px', marginTop: '5px' }}
									{...register('title')}
								></Input>
								<br />
								<Input
									type="text"
									placeholder="mô tả"
									style={{ width: '500px', marginTop: '5px' }}
									{...register('description')}
								></Input>
								<br />
								<Select label="Loại" {...register('cate')}></Select>
								<br />
								<Button style={{ marginLeft: '480px', marginTop: '15px' }} type="submit">
									THÊM
								</Button>
							</form>
						</Box>
					) : (
						''
					)}
				</Box>

				<TableProducts></TableProducts>
			</Stack>
		</Box>
	)
}
ProductsPage.Layout = AdminLayout

export async function getStaticProps(context) {


	return {
		props: {
			protected: true,
		},
	}
}
