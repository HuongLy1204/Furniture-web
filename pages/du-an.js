import { Container, CssBaseline, Stack, Typography } from '@mui/material'
import { Box } from '@mui/system'
import { unwrapResult } from '@reduxjs/toolkit'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import MainLayout from '../components/layout/main'
import ProjectItem from '../components/works/ProjectItem'




export default function ProjectPage() {
  
  
	return (
		<Box mt={15}>
			<CssBaseline />
			<Container maxWidth="lg">
				<Box sx={{ backgroundColor: 'yellow', height: '100%vh' }}></Box>
        <Typography color="darkgreen" align='center' variant="h5">CÁC CÔNG TRÌNH THI CÔNG THỰC TẾ TIÊU BIỂU </Typography>
				<ProjectItem />
			</Container>
		</Box>
	)
}

// }

ProjectPage.Layout = MainLayout

