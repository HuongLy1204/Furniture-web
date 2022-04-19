import { Box, Container, Stack, Typography } from '@mui/material'

export default function AboutMe() {
	return (
		<Box height={{xs: 350 , md: 300}} bgcolor={"#EBEBEB"}>
			<Container>
				<Stack alignItems={"center"}>
					<Typography my={3} variant='h5' letterSpacing={5} fontWeight={"bolder"}
                    >VỀ CHÚNG TÔI</Typography>
					<Typography  fontStyle= {"italic"} fontWeight={"bolder"}>
					Kiến Tạo Mỹ Quan Cho Không Gian Sống </Typography>
                    <Typography fontStyle= {"italic"} fontWeight={"bolder"}>Chú Trọng Công Năng, Đề Cao Thẩm Mỹ </Typography>
					<Typography my={2}>Với đội ngũ kiến trúc sư có con mắt nhà nghề về thiết kế và tinh tế trong nghệ thuật,là lựa chọn đáng tin cậy giúp bạn kiến tạo mỹ quan cho không gian sống.Đắm đuối với mẫu thiết kế căn hộ sang trọng và tinh tế.
					</Typography>	
                    <Typography my={1} fontSize={34} fontFamily= {'Ingrid Darling'}> _ Minh Kha _</Typography>
				</Stack>
			</Container>
		</Box>
	)
}
