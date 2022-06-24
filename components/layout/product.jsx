import { Stack, Typography } from '@mui/material'
import { Box } from '@mui/system'
import { useSelector } from 'react-redux'
import ContactButton from '../common/contact-button/ContactButton'
import Footer from '../common/Footer'
import Header from '../common/header/Header'
import FilterBar from '../filter-bar/filterBar'
import MainLayout from './main'

export default function ProductLayout({ children }) {
	const categories = useSelector((state) => state.products?.current)
  console.log(categories,"bờm chsi điên"); 

	return (
		<MainLayout>
			<Stack minHeight="100vh">
				<Box height={500}>
					<Stack direction={'row'}>
						<Box ml={5} mr={5} width="100%" my={{ sx: 0, lg: 20 }}>
							<Stack direction="column">
								<Typography mb={3} fontSize={24} fontWeight={'bolder'}>
									DANH MỤC
								</Typography>
								<Box width="100%">
									<Stack direction="row">
										<Box boxShadow={2} mr={4} width="20%">
											{categories.map((category) => {
												<Box boxShadow={1} mt={2} key={category.id}>
													<FilterBar dataCategory={category}></FilterBar>
                          <h1 id='thang'>jnn</h1>
													<Box display="inline" mt={5} ml={1}></Box>
												</Box>
											})}
										</Box>
										<Box width="80%"> {children}</Box>
									</Stack>
								</Box>
							</Stack>
						</Box>
					</Stack>
				</Box>

				<ContactButton />
			</Stack>
		</MainLayout>
	)
}
