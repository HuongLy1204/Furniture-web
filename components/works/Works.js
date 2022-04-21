import * as React from 'react'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Typography from '@mui/material/Typography'
import { CardActionArea } from '@mui/material'
import { Box } from '@mui/system'

export default function WorksItem(props) {
	console.log(props)
	return (
		<Box width={300}>
			<Card sx={{ minHeight: '290px', maxHeight: 200, maxWidth: 300, padding: 0 }}>
				<CardMedia
					component="img"
					sx={{
						layout: 'responsive',
						objectFit: 'scale-down',
						minHeight: '190px',
						maxHeight: 180,
						maxWidth: 280,
					}}
					image={props.dataWorks.image[1]}
					alt="green iguana"
				/>
				<CardContent>
					<Typography gutterBottom variant="h5" component="div">
						{props.dataWorks.title}
					</Typography>
					<Typography variant="body2" color="text.secondary">
						{props.dataWorks.description}
					</Typography>
				</CardContent>
			</Card>
		</Box>
	)
}
