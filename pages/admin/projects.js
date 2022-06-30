import { Button, Chip, Input, Stack } from '@mui/material'
import { Box } from '@mui/system'
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown'

import AdminLayout from '../../components/layout/admin'
import { useForm } from 'react-hook-form'
import TableProjects from '../../components/admins/TableProjects'
import { useEffect, useState } from 'react'
import Image from 'next/image'
import projectsApi from '../../Api/projectsApi'

export default function ProjectsPageAdmin() {
	const [isOpen, setIsOpen] = useState(false)
	const [imageSrc, setImageSrc] = useState('')
	const [imageUrl, setUrl] = useState('')
	const [listImage, setListImage] = useState([])
	const { register, handleSubmit } = useForm()
	const [isEdit, setIsEdit] = useState(false)
	const [dataProject, setDataProject] = useState({})

	const handleOpen = () => {
		setIsOpen(!isOpen)
	}
	const getIdProjectFromChild = (value) => {
		setDataProject(value)
		setIsEdit(true)
	}
	const onSubmit = async (data) => {
		const newProject = {
			title: data.title,
			description: data.description,
			image_urls: listImage,
		}
		if (isEdit) {
			const res = await projectsApi.updateProject(newProject, dataProject?.id)

			alert('Sửa thành công')
			location.reload()
		} else {
			const res = await projectsApi.createProject(newProject)
			setIsOpen(!isOpen)
			alert('Thêm thành công')
			location.reload()
		}

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
		alert('Up ảnh thành công')
	}
	useEffect(() => {
		if (imageUrl == '') return
		setListImage([...listImage, imageUrl])
	}, [imageUrl])

	return (
		<Box>
			<Stack direction="column">
				<Box>
					<Button onClick={handleOpen} sx={{ ml: '10px' }}>
						<Chip label="Thêm công trình" color="success" icon={<ArrowDropDownIcon />} />
					</Button>
					{isOpen ? (
						<Box height={200}>
							<form
								onSubmit={handleSubmit(onSubmit)}
								style={{ marginLeft: '180px', marginTop: '10px' }}
							>
								{' '}
								{isEdit ? (
									<>
										<Input
											defaultValue={dataProject.title}
											type="text"
											placeholder="Tên sản phẩm"
											style={{ width: '500px', marginTop: '5px' }}
											{...register('title')}
										></Input>
										<br />
										<Input
											defaultValue={dataProject.description}
											type="text"
											placeholder="mô tả"
											style={{ width: '500px', marginTop: '5px' }}
											{...register('description')}
										></Input>
										<br />
									</>
								) : (
									<>
										<Input
											type="text"
											placeholder="Tên công trình"
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
									</>
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
				<TableProjects
					getProject={(value) => {
						getIdProjectFromChild(value)
					}}
					isOpen={handleOpen}
				></TableProjects>
			</Stack>
		</Box>
	)
}

ProjectsPageAdmin.Layout = AdminLayout
