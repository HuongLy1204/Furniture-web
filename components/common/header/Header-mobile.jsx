import ChevronLeftIcon from '@mui/icons-material/ChevronLeft'
import ChevronRightIcon from '@mui/icons-material/ChevronRight'
import LocalPhoneIcon from "@mui/icons-material/LocalPhone"
import MenuIcon from '@mui/icons-material/Menu'
import { Chip, Link as MuiLink } from '@mui/material'
import MuiAppBar from '@mui/material/AppBar'
import CssBaseline from '@mui/material/CssBaseline'
import Drawer from '@mui/material/Drawer'
import IconButton from '@mui/material/IconButton'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import { styled, useTheme } from '@mui/material/styles'
import Toolbar from '@mui/material/Toolbar'
import { Box } from '@mui/system'
import clsx from 'clsx'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useState } from 'react'
import Logo from '../../../public/logo.svg'
import { ROUTE_LIST } from './route'


const drawerWidth = 240

const Main = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })(
	({ theme, open }) => ({
		flexGrow: 1,
		padding: theme.spacing(3),
		transition: theme.transitions.create('margin', {
			easing: theme.transitions.easing.sharp,
			duration: theme.transitions.duration.leavingScreen,
		}),
		marginLeft: `-${drawerWidth}px`,
		...(open && {
			transition: theme.transitions.create('margin', {
				easing: theme.transitions.easing.easeOut,
				duration: theme.transitions.duration.enteringScreen,
			}),
			marginLeft: 0,
		}),
	})
)
const AppBar = styled(MuiAppBar, {
	shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
	transition: theme.transitions.create(['margin', 'width'], {
		easing: theme.transitions.easing.sharp,
		duration: theme.transitions.duration.leavingScreen,
	}),
	...(open && {
		width: `calc(100% - ${drawerWidth}px)`,
		marginLeft: `${drawerWidth}px`,
		transition: theme.transitions.create(['margin', 'width'], {
			easing: theme.transitions.easing.easeOut,
			duration: theme.transitions.duration.enteringScreen,
		}),
	}),
}))
const DrawerHeader = styled('div')(({ theme }) => ({
	display: 'flex',
	alignItems: 'center',
	padding: theme.spacing(0, 1),
	backgroundColor: "white",
	// necessary for content to be below app bar
	...theme.mixins.toolbar,
	justifyContent: 'flex-end',
}))
function HeaderMobile() {
	const theme = useTheme()
	const [open, setOpen] = useState(false)
	const router = useRouter()

	const handleDrawerOpen = () => {
		setOpen(true)
	}

	const handleDrawerClose = () => {
		setOpen(false)
	}

	return (
		<Box display={{ sx: 'block', lg: 'none' }}>
			<CssBaseline />
			<AppBar   position="fixed" open={open}>
				<Toolbar sx={{ backgroundColor: 'white' }}>
					<IconButton
						color="inherit"
						aria-label="open drawer"
						onClick={handleDrawerOpen}
						edge="start"
						sx={{ mr: 2, ...(open && { display: 'none' }), color: 'gray' }}
					>
						<MenuIcon />
					</IconButton>
					<Box sx={{ width: 300 }}>
						<Image sx={{ pt: 20 }} src={Logo} alt="logo" height={90} objectFit="scale-down" />
					</Box>
				</Toolbar>
			</AppBar>
			<Drawer
				sx={{
					width: drawerWidth,
					flexShrink: 0,
					'& .MuiDrawer-paper': {
						width: drawerWidth,
						boxSizing: 'border-box',
						backgroundColor:"#ebebeb",
					},
				}}
				variant="persistent"
				anchor="left"
				open={open}
			>
				<DrawerHeader>
				<Chip sx={{mr:5}} color="success" size="small" icon={<LocalPhoneIcon />} label="0333311574" />

					<IconButton onClick={handleDrawerClose}>
						{theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
					</IconButton>
				</DrawerHeader>

				<List>
					{ROUTE_LIST.map((route) => (
						<ListItem key={route.label}>
							<Link key={route.path} href={route.path} passHref>
								<MuiLink 
									sx={{
										color: 'black',
										fontSize: '16px',
										marginLeft:"20px",
										paddingTop:"7px"
									}}
									className={clsx({ active: router.pathname === route.path })}
									variant="button"
								>
									{route.label}
								</MuiLink>
							</Link>
						</ListItem>
					))}
				</List>

			</Drawer>
			<Main open={open}>
				<DrawerHeader />
			</Main>
		</Box>
	)
}
export default HeaderMobile
