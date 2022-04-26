import { Chip, Icon, Stack, Typography } from '@mui/material'
import { Box, typography } from '@mui/system'
import Image from 'next/image'
import Logo from '../../public/logo.svg'
import LocationOnIcon from '@mui/icons-material/LocationOn'
import PhoneEnabledIcon from '@mui/icons-material/PhoneEnabled'
import EmailIcon from '@mui/icons-material/Email'
import LanguageIcon from '@mui/icons-material/Language'
import PhoneEnabled from '@mui/icons-material/PhoneEnabled'

function Footer() {
	return (
		<Box bgcolor={'#545456'} height={500} border={0.1}>
			<Stack direction={'column'}>
				<Box height={470}>
					<Stack alignItems={'center'} direction={'row'}>
						<Box pt={7} pl={10} width={'25%'}>
							<Stack direction={'column'}>
								<Typography fontSize={24} color={'white'} fontWeight={'bolder'}>
									{' '}
									NỘI THẤT MINH KHA
								</Typography>
								<Typography mt={3} color={'white'} fontSize={18}>
									Chúng tôi với nhiều năm kinh nghiệm thi công, cải tạo nhiều công trình khác nhau
									từ nhà ở, văn phòng làm việc, nội thất, ngoại thất, biển hiệu.
								</Typography>
							</Stack>
						</Box>
						<Box pt={7} pl={10} width={'30%'}>
							<Stack color={'white'} direction={'column'}>
								<Typography fontSize={24} pb={2} color={'white'} fontWeight={'bolder'}>
									DỊCH VỤ - Service
								</Typography>
								<Typography py={2}>Thiết kế và thi công nội thất</Typography>
								<Typography py={2}>Thiết kế và thi công ngoại thất</Typography>
								<Typography py={2}>Biển hiệu quảng cáo</Typography>
								<Typography py={2}>Tủ bếp</Typography>
								<Typography py={2}>Cung cấp vật tư </Typography>
							</Stack>
						</Box>
						<Box width={'30%'}>
							<Stack color={'white'} direction={'column'}>
								<Typography fontSize={24} pb={2} color={'white'} fontWeight={'bolder'}>
									THÔNG TIN LIÊN HỆ
								</Typography>
								<Stack  alignItems={"start"} direction={'column'} sx={{ color: 'white' }}>
									<Chip
										sx={{ fontSize: 'large', color: 'white', my: 1}}
										variant="fill"
										icon={<LocationOnIcon />}
										label="58/12 đường số 5 ,P.Hiệp Bình Chánh, Q.Thủ Đức,
TP. Hồ Chí Minh"
									/>

									<Chip
										sx={{ fontSize: 'large', color: 'white', my: 1 }}
										variant="fill"
										icon={<PhoneEnabled />}
										label="0905349364"
									/>
									<Chip
										sx={{ fontSize: 'large', color: 'white', my: 1 }}
										variant="fill"
										icon={<EmailIcon />}
										label="lekha.cando@gmail.com"
									/>
									<Chip
										sx={{ fontSize: 'large', color: 'white', my: 1 }}
										variant="fill"
										icon={<LanguageIcon />}
										label="noithatminhkha.com"
									/>
								</Stack>
							</Stack>
						</Box>
					</Stack>
				</Box>
				<Box border={0.01} height={30}>
					<Typography align="center" color={'white'}>
						Bản quyền thuộc về Nội thất Minh Kha
					</Typography>
				</Box>
			</Stack>
		</Box>
	)
}
export default Footer
