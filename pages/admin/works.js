import AdminLayout from '../../components/layout/admin'

export default function WorksPage() {
	return <>dự án</>
}
WorksPage.Layout = AdminLayout

export async function getStaticProps(context) {
	return {
		props: {
			protected: true,
		},
	}
}
