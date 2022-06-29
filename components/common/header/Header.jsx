import { unwrapResult } from '@reduxjs/toolkit'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { projectThunk } from '../../works/projectSlice'
import { productsThunk } from '../productlist/productSlice'
import HeaderDesktop from './Header-desktop'
import HeaderMobile from './Header-mobile'

export default function Header() {
	const dispatch = useDispatch()

	useEffect(() => {
		// productsApi.getAll().then((response) => setData(response))
		const getProduct = dispatch(productsThunk())
		const product = unwrapResult(getProduct)
		const getProjects= dispatch(projectThunk())
		unwrapResult(getProjects)


	}, [])
	return (
		<>
			<HeaderDesktop />

			<HeaderMobile />
		</>
	)
}
