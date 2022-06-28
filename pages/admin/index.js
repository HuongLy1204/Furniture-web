import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown'
import { Alert, Box, Button, Chip, Stack } from '@mui/material'

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import productsApi from '../../Api/productsApi'
import Tables from '../../components/admins/Table'
import AdminLayout from '../../components/layout/admin'

export default function CategoryPage(props) {
	const [isOpen, setIsOpen] = useState(false)
	const { register, handleSubmit } = useForm()
	const [idCategoryEdit, setIdCategoryEdit] = useState()
	const [isEdit, setIsEdit] = useState(false)
	const [titleCategory, setTitleCategory] = useState('')
	const handleOpen = () => {
		setIsOpen(!isOpen)
	}

	const getCategoryIdFromChild = (value) => {
		setIdCategoryEdit(value.id)
		setIsEdit(!isEdit)
		setTitleCategory(value.title)
	}

	const onSubmit = async (data) => {
		if (isEdit) {
			const res = await productsApi.updateCategory({ title: data.title }, idCategoryEdit)
			setIsOpen(!isOpen)
			alert('Sửa thành công')
			location.reload()
		} else {
			const res = await productsApi.createCategory({ title: data.title })
			setIsOpen(!isOpen)
			alert('Thêm thành công')
			location.reload()
		}
	}
	return (
		<Box pt={2}>
			<Stack direction="column">
				<Box>
					<Button onClick={handleOpen} sx={{ ml: '10px' }}>
						<Chip label="Thêm danh mục" color="success" icon={<ArrowDropDownIcon />} />
					</Button>
					{isOpen ? (
						<Box height={80}>
							<form
								style={{ marginLeft: '180px', marginTop: '10px' }}
								onSubmit={handleSubmit(onSubmit)}
							>
								{isEdit ? (
									<input
										placeholder={titleCategory}
										style={{ width: '500px', marginTop: '5px' }}
										{...register('title')}
									></input>
								) : (
									<input
										placeholder="Tên danh mục"
										style={{ width: '500px', marginTop: '5px' }}
										{...register('title')}
									></input>
								)}
								<br />
								{isEdit ? (
									<Button style={{ marginLeft: '480px', marginTop: '15px' }} type="submit">
										cập nhật
									</Button>
								) : (
									<Button style={{ marginLeft: '480px', marginTop: '15px' }} type="submit">
										THÊM
									</Button>
								)}
							</form>
						</Box>
					) : (
						''
					)}
				</Box>

				<Tables getCategory={(value) => getCategoryIdFromChild(value)} isOpen={handleOpen}></Tables>
			</Stack>
		</Box>
	)
}
CategoryPage.Layout = AdminLayout

export async function getStaticProps(context) {
	return {
		props: {
			protected: true,
		},
	}
}
