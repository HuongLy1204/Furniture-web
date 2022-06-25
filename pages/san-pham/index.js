import { useRouter } from 'next/router'
import { useSelector } from 'react-redux'
import MainLayout from '../../components/layout/main'
ProductPage.Layout = MainLayout

export default function ProductPage() {
	const categories = useSelector((state) => state.products.current)
	console.log(categories);
	const router=useRouter()
	const routerProductDefautl= categories[0]?.title.split(' ').join('-')
	if(routerProductDefautl==undefined) return
	router.push(`/san-pham/${routerProductDefautl}`)


}

