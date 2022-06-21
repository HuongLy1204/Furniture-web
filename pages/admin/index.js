import { useSelector } from 'react-redux'
import Tables from '../../components/admins/Table'
import AdminLayout from '../../components/layout/admin'

export default function CategoryPage() {
	const dataCategory = useSelector((state) => state.products.current)

	return (
		<>
			<Tables dataCategory={dataCategory}></Tables>
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