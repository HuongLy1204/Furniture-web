import { unwrapResult } from '@reduxjs/toolkit'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { productsThunk } from '../productlist/productSlice'
import HeaderDesktop from './Header-desktop'
import HeaderMobile from './Header-mobile'

export default function Header() {
	const dispatch = useDispatch()

	useEffect(() => {

		// productsApi.getAll().then((response) => setData(response))
		const actionResult = dispatch(productsThunk())
		const currentProduct = unwrapResult(actionResult)
		console.log(currentProduct,"product");
	}, [])
	return (
		<>
			<HeaderDesktop />

			<HeaderMobile />
		</>
	)
}
