import { Box, ImageList, ImageListItem, Stack, Typography } from '@mui/material'
import Image from 'next/image'

function ProjectItem(props) {
	return (
		<Box>
			<Stack direction={'column'}>
				<Typography variant="h6">1. {props.getProject.title}</Typography>
				<Typography variant="body1" m={2}>
					{props.getProject.description}
				</Typography>
				<ImageList sx={{ml:5}} variant="masonry" cols={3} gap={8}>
					{props.getProject.avatars.map((ava) => (
						<ImageListItem key={ava.id}>
							<img
								src={`${ava.image_url}?w=248&fit=crop&auto=format`}
								srcSet={`${ava.image_url}?w=248&fit=crop&auto=format&dpr=2 2x`}
								alt={ava.title}
								loading="lazy"
								layout="fixed"
								// height={200}
								// width={200}
							></img>
						</ImageListItem>
					))}
				</ImageList>
			</Stack>
		</Box>
	)
}
export default ProjectItem
