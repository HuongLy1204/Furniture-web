import {
	Box,
	Button, Table,
	TableBody,
	TableContainer,
	TableHead,
	TableRow
} from '@mui/material'
import { styled } from '@mui/material/styles'
import TableCell, { tableCellClasses } from '@mui/material/TableCell'
import Image from 'next/image'
import { useSelector } from 'react-redux'
import productsApi from '../../Api/productsApi'

export default function TableProducts(props) {
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

	const renderListProducts = (props) => {
		const handleEdit=(value)=>{
			props.getProduct(value)
			props.isOpen(true)
		}
		const handleDelete= async (id)=>{
			const res= await productsApi.deleteProduct(id)
			alert("Xoá thành công")
			location.reload()
		}
		return categories.map((category) => {
			return category?.products?.map((product) => {
				return (
					<StyledTableRow key={product.id}>
						<StyledTableCell>{product.id}</StyledTableCell>
						<StyledTableCell>{product.title}</StyledTableCell>
						<StyledTableCell>{product.description}</StyledTableCell>
						<StyledTableCell>
							<Box sx={{ display: 'flex', direction: 'row', flexWrap: 'wrap' }}>
								{product.avatars?.map((ava) => {
									return (
										<Box ml={1} key={ava.id}>
											<Image
												width={50}
												height={50}
												fill="fixed"
												alt="hinhanh"
												src={ava.image_url}
											></Image>
											<br />
										</Box>
									)
								})}
							</Box>
						</StyledTableCell>
						<StyledTableCell>{category.title}</StyledTableCell>
						<StyledTableCell>
							<Button onClick={()=>handleEdit(product)}>Chỉnh sửa</Button>
							<Button onClick={()=>handleDelete(product.id)}>XOÁ</Button>
						</StyledTableCell>
					</StyledTableRow>
				)
			})
		})
	}

	return (
		<Box>
			<TableContainer>
				<Table>
					<TableHead>
						<TableRow>
							<StyledTableCell>ID</StyledTableCell>
							<StyledTableCell>Tên sản phẩm</StyledTableCell>
							<StyledTableCell>Mô Tả</StyledTableCell>
							<StyledTableCell>Hình Ảnh</StyledTableCell>
							<StyledTableCell>Loại</StyledTableCell>
							<StyledTableCell align="center">TÁC VỤ</StyledTableCell>
						</TableRow>
					</TableHead>
					<TableBody>{renderListProducts(props)}</TableBody>
				</Table>
			</TableContainer>
		</Box>
	)
}
