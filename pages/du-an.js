import { Container, CssBaseline, Stack, Typography } from '@mui/material'
import { Box } from '@mui/system'
import { unwrapResult } from '@reduxjs/toolkit'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import MainLayout from '../components/layout/main'
import ProjectItem from '../components/works/ProjectItem'

export default function ProjectPage() {
	const projects = useSelector((state) => state.projects.projects)
	return (
		<Box mt={15}>
			<CssBaseline />
			<Container maxWidth="lg">
				<Box sx={{ backgroundColor: 'yellow', height: '100%vh' }}></Box>
				<Typography mb={4} color="darkgreen" align="center" variant="h5">
					CÁC CÔNG TRÌNH THI CÔNG THỰC TẾ TIÊU BIỂU{' '}
				</Typography>
				<Typography mb={3}>
					Với bề dày 15 năm kinh nghiệm làm việc trong lĩnh vực nội thất, Morehome là thương hiệu số
					1 tại Việt Nam trong việc thiết kế nội thất và thi công nội thất trọn gói - thi công hoàn
					thiện nhà. Với lợi thế nguồn lực từ nhà xưởng đáp ứng mọi nhu cầu từ A-Z cho khách hàng
					tại các khu đô thị Vinhome, Ciputra, Sunshine, chung cư FLC, Tân Hoàng Minh.... Với các
					chi nhánh có mặt rộng khắp tại các thành phố lớn như Hà Nội, TpHCM, Hải Phòng, Đà
					Nẵng...cùng đội ngũ thiết kế nội thất và thi công nội thất chuyên nghiệp. MoreHome đang
					mang lại cho khách hàng những sản phẩm chất lượng, đồng bộ từ thiết kế nội thất đến thi
					công nội thất. Bạn sẽ tiết kiệm được nhiều thời gian và tiền bạc khi chọn thi công nội
					thất trọn gói cho chung cư, biệt thự, nhà phố... tại Morehome bởi tính chuyên nghiệp và
					đồng bộ trong toàn hệ thống của chúng tôi. Morehome đáp ứng, cung cấp tất các các nhu cầu
					với dịch vụ trong thi công nội thất cho bạn với giá cả cạnh tranh và đảm bảo chất lượng
					cao.
				</Typography>
				{projects.map((project) => {
					return <Box  key={project.id}>
						<ProjectItem  getProject={project}></ProjectItem>
					</Box>
				})}
			</Container>
		</Box>
	)
}

// }

ProjectPage.Layout = MainLayout
