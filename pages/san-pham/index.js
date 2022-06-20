import { Grid, Stack } from '@mui/material'
import { Box } from '@mui/system'
import { useSelector } from 'react-redux'
import { PRODUCT_LIST } from '../../components/common/productlist/product-list'
import ProductItem from '../../components/common/productlist/ProductItem'
import FilterBar from '../../components/filter-bar/filterBar'
import MainLayout from '../../components/layout/main'

export default function ProductPage() {
	const data= useSelector(state=>state.products.current)


	return (
		<Box>
			<Stack direction={'row'}>
				{data.map((category=> 
					<>
					<FilterBar dataCategory= {category}></FilterBar>
				<Box display="inline" mt={15} ml={10}>
					<Grid
						container
						alignItems="center"
						spacing={{ xs: 2, md: 1 }}
						columns={{ xs: 4, sm: 8, md: 12 }}
					>
						{category.products.map((product) => (
							<Grid my={2} item xs={2} sm={4} md={4} key={product.id}>
								<ProductItem dataItem={product}></ProductItem>
							</Grid>
						))}
					</Grid>
				</Box>
					</>))}
				
			</Stack>
		</Box>
	)
}

ProductPage.Layout = MainLayout
