import { Button, Stack } from '@mui/material'
import { Box } from '@mui/system'
import Image from 'next/image'
import { useRouter } from 'next/router'
import Logo from '../../public/logo.svg'
import { useAuth } from '../Auth/Auth'

export default function Dashboar() {
	const authLogin = useAuth()
	const router = useRouter()
	const handleLogout = () => {
		authLogin.logout(false)
		router.push('/login')
	}
	return (
		// <Box    width="100%" height={70}bgcolor="gray">
		// {/* <Stack textAlign="center" alignItems="center" justifyContent="space-around" direction="row"> */}

		//    {/* </Stack> */}
		//    </Box>

		<Box
			zIndex={100}
			bgcolor={'white'}
			position={'fixed'}
			height={77}
			width={'100%'}
			borderColor={'gray'}
			borderBottom={0.03}
			pt={0}
			mt={0}
			display={{ xs: 'none', lg: 'block' }}
		>
			{/* <Image src={Logo} />  */}

			<Box size="lg">
				<Stack justifyContent={"space-around"} alignItems={'center'} direction="row">
					<Box width="15%">
						<Image height={150} src={Logo} alt="logo" layout="responsive" objectFit="scale-down" />
					</Box>
					<Box >
						<Button  variant='contained'  onClick={handleLogout}>LOGOUT</Button>
					</Box>
				</Stack>
			</Box>
		</Box>
	)
}
