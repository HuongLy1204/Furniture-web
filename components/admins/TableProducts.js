import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline'
import {
	Box,
	Button,
	Chip,
	Modal,
	Table,
	TableBody,
	TableContainer,
	TableHead,
	TableRow,
} from '@mui/material'
import { styled } from '@mui/material/styles'
import TableCell, { tableCellClasses } from '@mui/material/TableCell'
import { useState } from 'react'
import { useSelector } from 'react-redux'
import EditForm from './EditForm'

export default function TableProducts() {
	const categories = useSelector((state) => state.products.current)

	const StyledTableCell = styled(TableCell)(({ theme }) => ({
		[`&.${tableCellClasses.head}`]: {
			backgroundColor: theme.palette.common.white,
			color: theme.palette.common.black,
		},
		[`&.${tableCellClasses.body}`]: {
			fontSize: 14,
		},
	}))
	const StyledTableRow = styled(TableRow)(({ theme }) => ({
		'&:nth-of-type(odd)': {
			backgroundColor: theme.palette.action.hover,
		},
		// hide last border
		'&:last-child td, &:last-child th': {
			border: 0,
		},
	}))
	const [open, setOpen] = useState(false)
	const handleOpen = () => setOpen(true)
	const handleClose = () => setOpen(false)

	const style = {
		position: 'absolute',
		top: '50%',
		left: '50%',
		transform: 'translate(-50%, -50%)',
		width: 550,
		bgcolor: 'white',
		boxShadow: '10px 10px 5px #aaaaaa',
	}

	const renderListProducts = () => {
		return categories.map((category) => {
			return category?.products?.map((product) => {
				return (
					<StyledTableRow key={product.id}>
						<StyledTableCell>{product.title}</StyledTableCell>
						<StyledTableCell>{product.description}</StyledTableCell>
						<StyledTableCell>{product.avatars?.map(ava=>{
							return <>{ava.image_url}<br/></>
						})}</StyledTableCell>
						<StyledTableCell>{category.title}</StyledTableCell>
						<StyledTableCell>ly</StyledTableCell>
					</StyledTableRow>
				)
			})
		})
	}

	return (
		<Box>
			<Button sx={{ mt: '25px', ml: '20px' }}>
				<Chip label="Thêm sản phẩm" color="success" icon={<AddCircleOutlineIcon />} />
			</Button>

			<TableContainer>
				<Table>
					<TableHead>
						<TableRow>
							<StyledTableCell>Tên sản phẩm</StyledTableCell>
							<StyledTableCell>Mô Tả</StyledTableCell>
							<StyledTableCell>Hình Ảnh</StyledTableCell>
							<StyledTableCell>Loại</StyledTableCell>
							<StyledTableCell align="center">TÁC VỤ</StyledTableCell>
						</TableRow>
					</TableHead>
					<TableBody>{renderListProducts()}</TableBody>
				</Table>
			</TableContainer>
		</Box>
	)
}
// {
// 	/* <Button onClick={handleOpen}>Chỉnh sửa</Button>
// 									<Modal
// 										//  hideBackdrop="true"

// 										open={open}
// 										onClose={handleClose}
// 										// aria-labelledby="modal-modal-title"
// 										// aria-describedby="modal-modal-description"
// 									>
// 										<Box sx={style}>
// 											<EditForm boxShadow="none" data={category.label}></EditForm>
// 										</Box>
// 									</Modal>
// 									<Button>XOÁ</Button> */
