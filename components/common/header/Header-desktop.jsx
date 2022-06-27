import LocalPhoneIcon from '@mui/icons-material/LocalPhone'
import { Button, Chip, Link as MuiLink, Stack } from '@mui/material'
import { Box } from '@mui/system'
import clsx from 'clsx'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import Logo from '../../../public/logo.svg'
import { useAuth } from '../../Auth/Auth'
import { ROUTE_LIST } from './route'

function HeaderDesktop() {
	const [isLogin, setIsLogin] = useState(false)
	const router = useRouter()
	const auth = useAuth()

	console.log(auth.user,"login ");
  useEffect(()=>{
    if (auth.user === 'minhkha123') {
      setIsLogin(true)}

  },[])
  const handleLogout=()=>{
    auth.logout()
    router.replace("/login")
    console.log(auth.user,"out");
  }

	return (
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
				<Stack alignItems={'center'} direction="row">
					<Box width="15%">
						<Image height={150} src={Logo} alt="logo" layout="responsive" objectFit="scale-down" />
					</Box>
					<Box width="65%">
						<Stack pt={1.5} justifyContent={'space-around'} direction="row">
							{ROUTE_LIST.map((route) => (
								<Link key={route.path} href={route.path} passHref>
									<MuiLink
										sx={{
											color: 'black',
											fontSize: '16px',
											fontWeight: 'bolder',
										}}
										className={clsx({ active: router.pathname === route.path })}
										variant="button"
									>
										{route.label}
									</MuiLink>
								</Link>
							))}
						</Stack>
					</Box>
					<Box pt={1} width="20%">
						<Stack justifyContent={'center'} direction="row" spacing={2}>
							{isLogin ? (
								<Button onClick={handleLogout}>logout</Button>
							) : (
								<Chip color="success" size="medium" icon={<LocalPhoneIcon />} label="0333311574" />
							)}
						</Stack>
					</Box>
				</Stack>
			</Box>
		</Box>
	)
}
export default HeaderDesktop
