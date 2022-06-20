import Dashboar from '../../components/admins/Dashboar'
import AdminLayout from '../../components/layout/admin'

export default function AdminPage() {
	return <></>
}
AdminPage.Layout = AdminLayout

export async function getStaticProps(context) {
	return {
		props: {
			protected: true,
		},
	}
}
