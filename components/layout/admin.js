import { Box, Stack } from '@mui/material'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'

import NavBar from '../admins/NavBar'
import Header from '../common/header/Header'

export default function AdminLayout({ children }) {
	const router = useRouter()

	useEffect(() => {

		const admin = localStorage.getItem('Admin')
		if (admin !== 'minhkha123') router.replace('/login')
	}, [])

	return (
		<Box minHeight="100%">
			<Stack direction="column">
				<Box>
					<Header />
				</Box>
				<Box mr={5}>
					<Stack height="100%" direction="row">
						<Box minHeight="100%" width="15%">
							<NavBar></NavBar>
						</Box>
						<Box boxShadow={5} mt={13} minHeight="100%" width="85%">
							<Box>{children}</Box>
						</Box>
					</Stack>
				</Box>
			</Stack>
		</Box>
	)
}
