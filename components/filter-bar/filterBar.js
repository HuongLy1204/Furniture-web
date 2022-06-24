import { Box, Link as MuiLink } from '@mui/material'
import clsx from 'clsx'
import Link from 'next/link'
import { useRouter } from 'next/router'

export default function FilterBar(props) {
	console.log(props.dataCategory,"ly");
	const text = props.dataCategory?.title
	const pathName= props.pathName
	const path = text?.split(' ').join('-')
	const endpoint= `/san-pham/${path}`
	const router=useRouter()

	console.log(pathName,"kdhj");
	return (
		<Box
			height={5}
			width={250}
			// borderBottom={0.01}
			// borderColor={'gray'}
		>
			<Link xs={{ color: 'black' }} passHref href={endpoint}>
				<MuiLink
					sx={{ color: 'green', ml: 3 }}
					fontSize={20}
					className={clsx({ active: pathName == path})}
					variant="subtitle2"
				>
					{props.dataCategory?.title}
				</MuiLink>
			</Link>
		</Box>
	)
}
