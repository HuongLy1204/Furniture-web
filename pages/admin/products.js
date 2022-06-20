import Tables from '../../components/admins/Table'
import TableProducts from '../../components/admins/TableProducts'
import AdminLayout from '../../components/layout/admin'

export default function ProductsPage() {
	return (
		<>
            <TableProducts></TableProducts>
		</>
	)
}
ProductsPage.Layout = AdminLayout

export async function getStaticProps(context) {
	return {
		props: {
			protected: true,
		},
	}
}
