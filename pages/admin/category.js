import { useSelector } from 'react-redux'
import Tables from '../../components/admins/Table'
import AdminLayout from '../../components/layout/admin'

export default function CategoryPage() {
	const dataCategory= useSelector(state=>state.products.current)
	console.log(dataCategory, "jjj");
	return(
        <>
    <Tables/>
        </> 
    )
}
CategoryPage.Layout = AdminLayout

export async function getStaticProps(context) {
	return {
		props: {
			protected: true,
		},
	}
}
