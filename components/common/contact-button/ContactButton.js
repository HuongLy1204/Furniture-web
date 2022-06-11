import FacebookIcon from '@mui/icons-material/Facebook'
import { Button, Chip, IconButton, Stack } from '@mui/material'
import { Box } from '@mui/system'
import Image from 'next/image'
import Link from 'next/link'
import PhoneEnabledIcon from '@mui/icons-material/PhoneEnabled'

export default function ContactButton() {
	return (
		<Box display={{xs:"none", md:"block"}} height={250} width={'auto'} sx={{ bottom: '3px', right: '1px' }} position={'fixed'}>
			<Stack direction={'column'}>
				<Link
					passHref
					href="https://www.facebook.com/profile.php?id=100028871515011"
					component="button"
				>
					<Button>
						<Image
							layout="fixed"
							width={140}
							height={70}
							src="https://vectorlogo4u.com/wp-content/uploads/2020/10/Facebook-Messenger-New-Logo-Vector-01.png"
						></Image>
					</Button>
				</Link>
				<Link
					passHref
					href="https://www.facebook.com/profile.php?id=100028871515011"
					component="button"
				>
					<Button  sx={{ fontSize: 50 }}>
						<Image
							width={60}
							height={60}
							src="https://thietbihopkhoi.com/khoa-sau-dai-hoc-nha-trang/imager_1765.jpg"
						></Image>
					</Button>
				</Link>
				<Link
					passHref
					href="https://www.facebook.com/profile.php?id=100028871515011"
					component="button"
				>
					<Button
						sx={{
							borderRadius: '40px',
							bgcolor: 'darkorange',
							height: 50,
							fontSize: 20,
							right: 50,
							mt: 1,
						}}
						variant="contained"
						endIcon={<PhoneEnabledIcon />}
					>
						0333311474
					</Button>
				</Link>
			</Stack>
		</Box>
	)
}
