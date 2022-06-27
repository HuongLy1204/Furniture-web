import { Box, Button, Typography } from '@mui/material'
import { useRouter } from 'next/router'

export default function NotAccess() {
	const router = useRouter()
	const handleClick = () => {
		router.push('/login')
	}
	return (
		<Box>
			<Typography>Vui lòng Đăng nhập </Typography>
			<Button onClick={handleClick}>CLICK HERE</Button>
		</Box>
	)
}
