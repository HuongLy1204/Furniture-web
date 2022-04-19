import * as React from 'react'
import ImageList from '@mui/material/ImageList'
import ImageListItem from '@mui/material/ImageListItem'
import Image from 'next/image'
import { Box } from '@mui/system'
import { Button, Stack, Typography } from '@mui/material'
import Model1 from '../../public/banner-image/model1.svg'
import Model2 from '../../public/banner-image/model2.svg'
import Model3 from '../../public/banner-image/model3.svg'
import Model4 from '../../public/banner-image/model4.svg'

export default function ModelDesign() {
	return (
		<Box px={10} height={900} bgcolor={'#EBEBEB'}>
			<Stack direction={{ xs: 'column', md: 'row' }}>
				<Box width={{ md: '50%', xs: '100%' }} height={{ md: 900, xs: 400 }}>
					<Stack direction={'column'}>
						<Box width={'100%'} height={{ md: 500, xs: 180 }}>
							<Image alt="model1" layout="responsive" src={Model1} />
						</Box>
                        <Stack display={{ xs: 'block', md: 'none' }} direction={ {sx:"row"}}>
                        <Box width={'50%'} display={{ xs: 'block', md: 'none' }}>
							<Image alt="model2" layout="responsive" src={Model2} />
						</Box>
                        <Box width={'50%'} display={{ xs: 'block', md: 'none' }} >
                        <Typography>Phòng khách</Typography>

                        </Box>
                        </Stack>
						
						<Box>
							<Stack direction={{ md: 'row' }}>
								<Box width={'50%'} height={{ md: 400, xs: 150 }}>
									<Image alt="model3" layout="responsive" src={Model3} />
								</Box>

								<Box display={{ xs: 'none', md: 'block' }} width={'50%'} height={400}>
									<Typography
										mx={2}
										my={{ md: 5, xs: 4 }}
										variant={{ md: 'h5', xs: 'body3' }}
										fontWeight={'bolder'}
										textAlign={{ md: 'center', xs: 'left' }}
									>
										PHÒNG BẾP
									</Typography>
									<Typography mx={{ md: 6, xs: 1 }}>
										Sử dụng các chất liệu như nhựa giả đá, gương trang trí, nhựa vân gỗ để khiến
										không gian phòng khách thêm hiện đại, tiết kiệm chi phí,..
									</Typography>
									<Button sx={{ my: 5, ml: 15 }} color="success" variant="outlined">
										Xem thêm
									</Button>
								</Box>
							</Stack>
						</Box>
					</Stack>
				</Box>
				<Box width={'50%'} height={900}>
					<Stack direction={'row'}>
						<Box width={'100%'} height={900}>
							<Stack direction={'column'}>
								<Box width={'100%'} height={500}>
									<Stack direction={'row'}>
										<Box display={{ xs: 'none', md: 'block' }} width={'40%'} height={500}>
											<Typography my={5} variant="h5" fontWeight={'bolder'} textAlign={'center'}>
												PHÒNG KHÁCH
											</Typography>
											<Typography letterSpacing={1} mx={6}>
												Sử dụng các chất liệu như nhựa giả đá, gương trang trí, nhựa vân gỗ để khiến
												không gian phòng khách thêm hiện đại, tiết kiệm chi phí,..
											</Typography>
											<Button sx={{ my: 5, ml: 15 }} color="success" variant="outlined">
												Xem thêm
											</Button>
										</Box>
										<Box display={{ md: 'block', xs: 'none' }} width={'60%'} height={500}>
											<Image alt="model2" layout="responsive" src={Model2} />
										</Box>
									</Stack>
								</Box>
								<Box width={'100%'} height={400}>
									<Image alt="model4" active layout="responsive" src={Model4} />
								</Box>
							</Stack>
						</Box>
					</Stack>
				</Box>
			</Stack>
		</Box>
	)
}
