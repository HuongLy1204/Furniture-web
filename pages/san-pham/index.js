import { Grid, Stack, Typography } from '@mui/material'
import { Box } from '@mui/system'
import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import ProductItem from '../../components/common/productlist/ProductItem'
import FilterBar from '../../components/filter-bar/filterBar'
import MainLayout from '../../components/layout/main'
ProductPage.Layout = MainLayout

export default function ProductPage() {
	const categories = useSelector((state) => state.products.current)
	const [categoryIdActive, setCategoryIdActive] = useState(0)

	useEffect(() => {
		setCategoryIdActive(categories[0]?.id)
	}, [categories])

	const renderListProductOfCategory = () => {
		const categoryActive = categories.filter((category) => category.id == categoryIdActive)

		return categoryActive[0]?.products?.map((product) => {
			return (
				<>
					<Grid my={2} item xs={2} sm={4} md={4} key={product.id}>
						<Box key={product.id}>
							<ProductItem dataItem={product}></ProductItem>
						</Box>
					</Grid>
				</>
			)
		})
	}

	return (
		<Box>
			<Stack direction={'row'}>
				<Box ml={5} mr={5} width="100%" my={{ sx: 0, lg: 20 }}>
					<Stack direction="column">
						<Typography mb={3} fontSize={24} fontWeight={'bolder'}>
							DANH MỤC
						</Typography>
						<Box width="100%">
							<Stack direction="row">
								<Box boxShadow={2} mr={4} width="20%">
									{categories.map((category) => (
										<Box boxShadow={1} mt={2} key={category.id}>
											<FilterBar dataCategory={category}></FilterBar>
											<Box display="inline" mt={5} ml={1}></Box>
										</Box>
									))}
								</Box>
								<Box width="80%">{renderListProductOfCategory()}</Box>
							</Stack>
						</Box>
					</Stack>
				</Box>
			</Stack>
		</Box>
	)
}
/* <Box>
								
// </Box> */
