import { Box, Typography } from '@mui/material'
import Image from 'next/image'
import { useState } from 'react'
import EmptyLayout from '../components/layout/empty'

export default function DemoUploadImage() {
	const [imageSrc, setImageSrc] = useState()
	const handleOnChange = (event) => {
		const reader = new FileReader()

		reader.onload = function (onLoadEvent) {
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

		setImageSrc(data.secure_url)
        console.log(data);
	}
	return (
		<Box>
			<Typography>Upload image</Typography>
			<form method="post" onChange={handleOnChange} onSubmit={handleOnSubmit}>
				<input name="file" type="file"></input>
				{imageSrc && <button>Upload Files</button>}
				{imageSrc && (
					<Image width={500} height={500} layout="fixed" alt="uploadImg" src={imageSrc} />
				)}
			</form>
		</Box>
	)
}
DemoUploadImage.Layout = EmptyLayout
