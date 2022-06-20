import { Box, Stack } from '@mui/material'
import Dashboar from '../admins/Dashboar'
import NavBar from '../admins/NavBar'

export default function AdminLayout({ children }) {
	return (
		<Box minHeight="100%">
			<Stack direction="column">
				<Box>
					<Dashboar></Dashboar>
				</Box>
				<Box>
					<Stack height="100%" direction="row">
						<Box  minHeight="100%" width="15%">
							<NavBar></NavBar>
						</Box>
						<Box boxShadow={5}  mt={13} minHeight="100%" width="85%">
							<Box>{children}</Box>
						</Box>
					</Stack>
				</Box>
			</Stack>
		</Box>
	)
}
