import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown'
import { Button, Chip, Input, Stack } from '@mui/material'
import { Box } from '@mui/system'
import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import { useSelector } from 'react-redux'
import productsApi from '../../Api/productsApi'
import TableProducts from '../../components/admins/TableProducts'
import AdminLayout from '../../components/layout/admin'

export default function ProductsPage() {
	const [isOpen, setIsOpen] = useState(false)
	const [imageSrc, setImageSrc] = useState('')
	const [imageUrl, setUrl] = useState('')
	const [listImage, setListImage] = useState([])
	// const [a, setA]= useState()

	const { register, handleSubmit } = useForm()
	const categories = useSelector((state) => state.products.current)

	const handleOpen = () => {
		setIsOpen(!isOpen)
	}
	const onSubmit = async (data) => {
		const newProduct = {
			title: data.title,
			description: data.description,
			category_id: data.category,
			image_urls: listImage
		}

		const res = await productsApi.createProduct(newProduct)
		setIsOpen(!isOpen)
	}
	const handleOnChange = (event) => {
		const reader = new FileReader()

		reader.onload = (onLoadEvent) => {
			setImageSrc(onLoadEvent.target.result)
		}
		reader.readAsDataURL(event.target.files[0])
	}
	async function handleOnSubmit(event) {
		event.preventDefault()
		const form = event.currentTarget

		const fileInput = Array.from(form.elements).find(({ name }) => name === 'file')

		const formData = new FormData()
		for (const file of fileInput.files) {
			formData.append('file', file)
		}
		formData.append('upload_preset', 'my-uploads')
		const data = await fetch('https://api.cloudinary.com/v1_1/lynguyen/image/upload', {
			method: 'POST',
			body: formData,
		}).then((r) => r.json())

		setUrl(data.secure_url)
	}

	useEffect(() => {
		if (imageUrl == '') return
		setListImage([...listImage, imageUrl])
	}, [imageUrl])
	console.log(listImage, 'list')
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
								<select {...register('category')}>
									{categories.map((category) => {
										return (
											<option key={category.id} value={category.id}>
												{category.title}
											</option>
										)
									})}
								</select>

								<br />
								<Button style={{ marginLeft: '480px', marginTop: '15px' }} type="submit">
									THÊM
								</Button>
							</form>
							<form method="post" onChange={handleOnChange} onSubmit={handleOnSubmit}>
								<input name="file" type="file"></input>
								{imageSrc && <button>Upload Files</button>}
								{imageSrc && (
									<Image width={50} height={50} layout="fixed" alt="uploadImg" src={imageSrc} />
								)}
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
