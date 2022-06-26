import CloseIcon from '@mui/icons-material/Close'
import Favorite from '@mui/icons-material/Favorite'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder'
import { Box, Checkbox, DialogContentText } from '@mui/material'
import Button from '@mui/material/Button'
import Card from '@mui/material/Card'
import CardActions from '@mui/material/CardActions'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Dialog from '@mui/material/Dialog'
import DialogContent from '@mui/material/DialogContent'
import DialogTitle from '@mui/material/DialogTitle'
import IconButton from '@mui/material/IconButton'
import { styled, useTheme } from '@mui/material/styles'
import Typography from '@mui/material/Typography'
import useMediaQuery from '@mui/material/useMediaQuery'
import Image from 'next/image'
import PropTypes from 'prop-types'
import { useState } from 'react'
import Slider from 'react-slick'



const label = { inputProps: { 'aria-label': 'Checkbox demo' } }
const BootstrapDialog = styled(Dialog)(({ theme }) => ({
	'& .MuiDialogContent-root': {
		padding: theme.spacing(3, 5),


		height: '290px',
		width: '550px',
	},
	'& .MuiDialogActions-root': {
		padding: theme.spacing(1),
	},
}))

const BootstrapDialogTitle = (props) => {
	const { children, onClose, ...other } = props
	return (
		<DialogTitle
			sx={{ textAlign: 'center', fontSize: '1rem', color: 'darkgreen', textTransform: 'uppercase' }}
			{...other}
		>
			{children}
			{onClose ? (
				<IconButton
					aria-label="close"
					onClick={onClose}
					sx={{
						position: 'absolute',
						right: 8,
						top: 8,
						color: (theme) => theme.palette.grey[500],
					}}
				>
					<CloseIcon />
				</IconButton>
			) : null}
		</DialogTitle>
	)
}
BootstrapDialogTitle.propTypes = {
	children: PropTypes.node,
	onClose: PropTypes.func.isRequired,
}

export default function ProductItem(props) {
	const theme = useTheme()

	const fullScreen = useMediaQuery(theme.breakpoints.down('md'))

	const [open, setOpen] = useState(false)
	const images = props?.dataItem.avatars

	const settings = {

		dots: true,
		fade: true,
		infinite: true,
		speed: 500,
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: true,

	}

	const handleClick = () => {
		setOpen(true)
	}
	const handleClose = () => {
		setOpen(false)
	}

	return (
		<>
			<Card sx={{ minHeight: '290px', maxHeight: 200, maxWidth: 300, padding: 0 }}>
				<>
					<CardMedia
						sx={{
							layout: 'responsive',
							objectFit: 'scale-down',
							minHeight: '190px',
							maxHeight: 180,
							maxWidth: 280,
						}}
						component="img"
						image={props.dataItem.avatars[0].image_url}
						alt={props.dataItem.title}
					/>
					<CardContent sx={{ padding: '5px' }}>
						<Typography
							fontSize={16}
							align="center"
							gutterBottom
							variant="OVERLINE TEXT"
							component="div"
						>
							{props.dataItem.title}
						</Typography>
					</CardContent>
					<CardActions sx={{ justifyContent: 'space-around', mb: '4px' }}>
						<Button onClick={handleClick} color="success" variant="outlined" size="medium">
							CHI TIẾT
						</Button>
						<BootstrapDialog
							fullScreen={fullScreen}
							height={400}
							width={400}
							onClose={handleClose}
							aria-labelledby="customized-dialog-title"
							open={open}
						>
							<BootstrapDialogTitle id="customized-dialog-title" onClose={handleClose}>
								{props.dataItem.title}
							</BootstrapDialogTitle>
							<DialogContent bgcolor="red"  >
								<Slider  sx={{width:350}} {...settings}>
									
									{images.map((image) => {
										return (
											<Box  key={image.id}>
												<Image
													width={300}
													height={150}
													layout="responsive"
													alt="chi tiet san pham"
													src={image.image_url}
												/>
											</Box>
										)
									})}
								</Slider>
								
							</DialogContent>
							<DialogContentText mb={5} mt={0} pt={0} textAlign={"center"}>
							 {props.dataItem.description}
							</DialogContentText>
						</BootstrapDialog>

						<Checkbox
							{...label}
							icon={<FavoriteBorderIcon />}
							checkedIcon={<Favorite color="sucess" />}
						/>
					</CardActions>
				</>
			</Card>
		</>
	)
}
