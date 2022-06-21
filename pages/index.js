import { Container, Grid, Typography } from '@mui/material'
import { Box } from '@mui/system'
import { unwrapResult } from '@reduxjs/toolkit'
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import productsApi from '../Api/productsApi'
import AboutMe from '../components/about-me/AboutMe'
import Banner from '../components/common/header/Banner/Banner'
import LoadingIcon from '../components/common/Loading'
import ProductItem from '../components/common/productlist/ProductItem'
import { addProduct, productsThunk } from '../components/common/productlist/productSlice'
import MainLayout from '../components/layout/main'
import ModelDesignDesktop from '../components/model-design/ModelDesignDesktop'
import ModelDesignMobile from '../components/model-design/ModelDesignMobile'
import WorksList from '../components/works/WorksList'

export default function HomePage() {
	
	const [isLoading, setIsLoading] = useState(true)
	const data= useSelector(state=>state.products.current)


	return (
		<Box>
			{/* {isLoading ? (
				<LoadingIcon />
			) : ( */}
			
					<Banner />
					<AboutMe />
					<ModelDesignDesktop />
					<ModelDesignMobile />
					<Container>
						<Box>
							{data.map((category) => (
								<>
									<Typography
										align="center"
										color={'gray'}
										component="h1"
										variant="h5"
										my={4}
										fontWeight={'bolder'}
									>
										{category.title}
									</Typography>
									<Grid
										container
										alignItems="center"
										spacing={{ xs: 2, md: 2.5 }}
										columns={{ xs: 4, sm: 8, md: 12 }}
									>
										<Grid my={2} item xs={2} sm={4} md={4} key={category.id}>
											{category.products.map((product) => (
												<ProductItem key={product.id} dataItem={product}></ProductItem>
											))}
										</Grid>
									</Grid>
								</>
							))}
						</Box>
					</Container>
					<WorksList />
		
		</Box>
	)
}

// export default Home;
HomePage.Layout = MainLayout
