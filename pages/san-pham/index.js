import { Grid, Stack, Typography } from '@mui/material'
import { Box } from '@mui/system'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import LoadingIcon from '../../components/common/Loading'
import ProductItem from '../../components/common/productlist/ProductItem'
import FilterBar from '../../components/filter-bar/filterBar'
import MainLayout from '../../components/layout/main'
ProductPage.Layout = MainLayout

export default function ProductPage() {
	const categories = useSelector((state) => state.products.current)

	const router=useRouter()
	const routerProductDefautl= categories[0]?.title.split(' ').join('-')
	
	router.push(`/san-pham/${routerProductDefautl}`)


}
/* <Box>
								
// </Box> */
