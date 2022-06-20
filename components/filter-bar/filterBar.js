import { Box, Container, Stack, Link as MuiLink, Typography } from '@mui/material'
import clsx from 'clsx'
import Link from 'next/link'
import { useSelector } from 'react-redux'
import { CATALOGUE } from './catalog'

export default function FilterBar(props) {
console.log(props.dataCategory,"..");
	return (
		<Box ml={10} width={350} my={{ sx: 0, lg: 20 }}>
			<Container>
				<Stack>
                    <Typography mb={3} fontSize={24} fontWeight={"bolder"}>DANH MỤC</Typography>
					
						<Box my={1} borderBottom={0.01 } borderColor={"gray"}  key={props.dataCategory.id}>
							{/* <Link xs={{color:"black"}} passHref href={item.path}> */}
								<MuiLink
                                sx={{color:"black"}}
									fontSize={20}
									fontWeight={''}
									// className={clsx({ active: item.pathname === item.path })}
									variant="body1"
								>
									{props.dataCategory.title}
								</MuiLink>
							{/* </Link> */}
						</Box>
					
				</Stack>
			</Container>
		</Box>
	)
}
