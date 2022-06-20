import { Button, Stack } from '@mui/material'
import { Box } from '@mui/system'
import { useRouter } from 'next/router'

export default function NavBar() {
	const router = useRouter()

	return (
		<Box  pt={15} mb={10} height="100%">
            <Stack  direction="column" spacing={3 } alignItems="center">

			<Box >
				<Button  size='large' sx={{color:"darkgreen"}}  onClick={() => router.replace('/admin/category')}>DANH MỤC</Button>
			</Box>
			<Box >
				<Button size='large' sx={{color:"darkgreen"}} onClick={() => router.replace('/admin/products')}>SẢN PHẨM</Button>
			</Box>
			<Box >
				<Button size='large' sx={{color:"darkgreen"}} onClick={() => router.replace('/admin/works')}>DỰ ÁN</Button>
			</Box>
            </Stack>
		</Box>
	)
}
