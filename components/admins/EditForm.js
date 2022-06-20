import { Box } from '@mui/system'
import TextField from '@mui/material/TextField'
import { Button, Stack, Typography } from '@mui/material'

export default function EditForm() {
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
			<Stack direction="column">
				<Typography mt={3} color={'darkgreen'} variant="button" align="center">
					Chỉnh sửa danh mục
				</Typography>
				<TextField  id="danh mục" label="Danh mục" variant="outlined" />
				<Button >CẬP NHẬT</Button>
			</Stack>
		</Box>
	)
}
