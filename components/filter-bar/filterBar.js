import { Box, Link as MuiLink } from '@mui/material'
import Link from 'next/link'

export default function FilterBar(props) {
	
	return (
		<Box
			height={5}
			width={250}
			// borderBottom={0.01}
			// borderColor={'gray'}
			key={props.dataCategory.id}
		>
			<Link xs={{ color: 'black' }} passHref href={`/san-pham/ `}>
				<MuiLink
					sx={{ color: 'green', ml: 3 }}
					fontSize={20}
					//  className={clsx({ active: .pathname === item.path })}
					variant="subtitle2"
				>
					{props.dataCategory.title}
				</MuiLink>
			</Link>
		</Box>
	)
}
