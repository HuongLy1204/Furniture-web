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
	TableRow
} from '@mui/material'
import { styled } from '@mui/material/styles'
import TableCell, { tableCellClasses } from '@mui/material/TableCell'
import { useState } from 'react'
import EditForm from './EditForm'

export default function TableCustomize({dataCategory}) {

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

	return (
		<Box>
			<Button sx={{ mt: '25px', ml: '20px' }}>
				<Chip label="Thêm danh mục" color="success" icon={<AddCircleOutlineIcon />} />
			</Button>

			<TableContainer>
				<Table>
					<TableHead>
						<TableRow>
							<StyledTableCell>ID</StyledTableCell>
							<StyledTableCell> TIÊU ĐỀ</StyledTableCell>

							<StyledTableCell align="center">TÁC VỤ</StyledTableCell>
						</TableRow>
					</TableHead>
					<TableBody>
						{dataCategory.map((item) => (
							<StyledTableRow key={item.id}>
								<StyledTableCell>1</StyledTableCell>
								<StyledTableCell component="th" scope="row">
									{item.title}
								</StyledTableCell>
								<StyledTableCell align="center">
									<Button onClick={handleOpen}>Chỉnh sửa</Button>
									<Modal
										//  hideBackdrop="true"

										open={open}
										onClose={handleClose}
										// aria-labelledby="modal-modal-title"
										// aria-describedby="modal-modal-description"
									>
										<Box sx={style}>
											<EditForm boxShadow="none" data={item.id}></EditForm>
										</Box>
									</Modal>
									<Button>XOÁ</Button>
								</StyledTableCell>
							</StyledTableRow>
						))}
					</TableBody>
				</Table>
			</TableContainer>
		</Box>
	)
}
