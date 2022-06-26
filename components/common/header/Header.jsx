import { unwrapResult } from '@reduxjs/toolkit'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { productsThunk } from '../productlist/productSlice'
import HeaderDesktop from './Header-desktop'
import HeaderMobile from './Header-mobile'

export default function Header() {
	const dispatch = useDispatch()

	useEffect(() => {
		console.log('llyyyy')
		// productsApi.getAll().then((response) => setData(response))
		const actionResult = dispatch(productsThunk())
		const currentProduct = unwrapResult(actionResult)
	}, [])
	return (
		<>
			<HeaderDesktop />

			<HeaderMobile />
		</>
	)
}
