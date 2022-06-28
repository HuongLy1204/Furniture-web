import { Box, Button, Table, TableBody, TableContainer, TableHead, TableRow } from '@mui/material'
import { styled } from '@mui/material/styles'
import TableCell, { tableCellClasses } from '@mui/material/TableCell'
import { useState } from 'react'
import { useSelector } from 'react-redux'
import productsApi from '../../Api/productsApi'

export default function TableCustomize(props) {
	const dataCategory = useSelector((state) => state.products.current)

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
	const handleClick = (value) => {
		props.isOpen(true)
		props.getCategory(value)
	}
	const handleDelete = async (id) => {
		const res= await productsApi.deleteCategory(id)
		alert('Xoá thành công')
			location.reload()
	}

	return (
		<Box>
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
								<StyledTableCell>{item.id}</StyledTableCell>
								<StyledTableCell component="th" scope="row">
									{item.title}
								</StyledTableCell>
								<StyledTableCell align="center">
									<Button onClick={() => handleClick(item)}>Chỉnh sửa</Button>
									<Button onClick={() => handleDelete(item.id)}>XOÁ</Button>
								</StyledTableCell>
							</StyledTableRow>
						))}
					</TableBody>
				</Table>
			</TableContainer>
		</Box>
	)
}
