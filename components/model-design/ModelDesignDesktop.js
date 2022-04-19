import * as React from 'react'
import Image from 'next/image'
import { Box } from '@mui/system'
import { Button, Stack, Typography } from '@mui/material'
import Model1 from '../../public/banner-image/model1.svg'
import Model2 from '../../public/banner-image/model2.svg'
import Model3 from '../../public/banner-image/model3.svg'
import Model4 from '../../public/banner-image/model4.svg'

export default function ModelDesignDesktop() {
	return (
		<Box  display={{lg: "block", xs: "none"}} px={{ md: 10, xs: 5 }} height={900} bgcolor={'#EBEBEB'}>
			<Stack direction={{ xs: 'column', md: 'row' }}>
				<Box width={{ md: '50%', xs: '100%' }} height={{ md: 900, xs: 400 }}>
					<Stack direction={'column'}>
						<Box width={'100%'} height={{ md: 500, xs: 200 }}>
							<Image alt="model1" layout="responsive" src={Model1} />
						</Box>
						<Box>
							<Stack direction="row">
								<Box width={'50%'} height={400}>
									<Image alt="model3" layout="responsive" src={Model3} />
								</Box>
								<Box width={'50%'} height={400}>
									<Typography
										mx={2}
										my={5}
										variant={'h5'}
										fontWeight={'bolder'}
										textAlign={'center'}
									>
										PHÒNG BẾP
									</Typography>
									<Typography mx={6}>
										Sử dụng các chất liệu như nhựa giả đá, gương trang trí, nhựa vân gỗ để khiến
										không gian phòng khách thêm hiện đại, tiết kiệm chi phí,..
									</Typography>
									<Button sx={{ my: 2, ml: 15 , color:"gray"}} variant="none">
										KHÁM PHÁ
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
										<Box width={'40%'} height={500}>
											<Typography my={5} variant="h5" fontWeight={'bolder'} textAlign={'center'}>
												PHÒNG KHÁCH
											</Typography>
											<Typography letterSpacing={1} mx={6}>
												Sử dụng các chất liệu như nhựa giả đá, gương trang trí, nhựa vân gỗ để khiến
												không gian phòng khách thêm hiện đại, tiết kiệm chi phí,..
											</Typography>
											<Button sx={{ my: 2, ml: 15 , color:"gray"}}  variant="none">
												KHÁM PHÁ
											</Button>
										</Box>
										<Box width={'60%'} height={500}>
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
