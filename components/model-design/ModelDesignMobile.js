import { Box, Button, Stack, Typography } from '@mui/material'
import Image from 'next/image'
import Model1 from '../../public/banner-image/model1.svg'
import Model2 from '../../public/banner-image/model2.svg'
import Model3 from '../../public/banner-image/model3.svg'
import Model4 from '../../public/banner-image/model4.svg'

export default function ModelDesignMobile() {
	return (
		<Box bgcolor={'#EBEBEB'} px={2.5} display={{ xs: 'block', lg: 'none' }}>
			<Stack direction={'column'}>
				<Box my={2} width={'100%'}>
					<Image layout="responsive" src={Model1}></Image>
				</Box>
				<Box>
					<Stack direction={'row'}>
						<Box width={'50%'}>
							<Image layout='responsive' src={Model2}></Image>
						</Box>
						<Box width={'50%'}>
							<Typography my={{ md: 4 }} fontSize={{ xs: 18, md: 34 }} fontWeight={'bolder'} ml={2}>
								Không gian phòng khách
							</Typography>
							<Typography mt={1}  fontStyle={"italic"} ml={2} fontSize={{ xs: 14, md: 22 }}>
								{' '}
								Sử dụng các chất liệu như nhựa giả đá, gương trang trí, nhựa vân gỗ để khiến không
								gian phòng khách thêm hiện đại, tiết kiệm chi phí,..
							</Typography>
							<Button size="small" sx={{ my: 1, ml: 5, color: 'gray' }} variant="none">
								KHÁM PHÁ
							</Button>
						</Box>
					</Stack>
				</Box>
                <Box>
                    <Image src={Model4}></Image>
                </Box>
                <Box>
                <Stack direction={'row'}>
						
						<Box my={3.5} width={'50%'}>
							<Typography my={{ md: 4 }} fontSize={{ xs: 18, md: 34 }} fontWeight={'bolder'} mr={2}>
								Không gian phòng bếp
							</Typography>
							<Typography mt={1} fontStyle={"italic"} mr={2} fontSize={{ xs: 14, md: 22 }}>
								{' '}
								Sử dụng các chất liệu như nhựa giả đá, gương trang trí, nhựa vân gỗ để khiến không
								gian phòng khách thêm hiện đại, tiết kiệm chi phí,..
							</Typography>
							<Button size="small" sx={{ my: 1, ml: 5, color: 'gray' }} variant="none">
								KHÁM PHÁ
							</Button>
						</Box>
                        <Box my={3} width={'50%'}>
							<Image layout='responsive' src={Model3}></Image>
						</Box>
					</Stack>
                </Box>
			</Stack>
		</Box>
	)
}
