import { Grid, Stack } from '@mui/material'
import { Box } from '@mui/system'
import Banner from '../../components/common/header/Banner/Banner'
import { PRODUCT_LIST } from '../../components/common/productlist/product-list'
import ProductItem from '../../components/common/productlist/ProductItem'
import FilterBar from '../../components/filter-bar/filterBar'
import MainLayout from '../../components/layout/main'

export default function ProductPage() {
	return (
		<Box>
			<Stack direction={'row'}>
				<FilterBar></FilterBar>
				<Box display="inline" mt={15} ml={10}

        >
					<Grid
						container
						alignItems="center"
						spacing={{ xs: 2, md: 1 }}
						columns={{ xs: 4, sm: 8, md: 12 }}
					>
						{PRODUCT_LIST.map((item) => (
							<Grid my={2} item xs={2} sm={4} md={4} key={item.id}>
								<ProductItem dataItem={item}></ProductItem>
							</Grid>
						))}
					</Grid>
				</Box>
			</Stack>
		</Box>
	)
}



ProductPage.Layout = MainLayout
