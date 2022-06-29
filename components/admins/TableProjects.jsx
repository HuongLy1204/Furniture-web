import { Box, Button, Table, TableBody, TableContainer, TableHead, TableRow } from '@mui/material'
import { styled } from '@mui/material/styles'
import TableCell, { tableCellClasses } from '@mui/material/TableCell'
import Image from 'next/image'
import { useSelector } from 'react-redux'

export default function TableProjects(props) {
	const projects = useSelector((state) => state?.projects?.projects)
	console.log(projects, 'project')

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

	const renderListProjects = (props) => {
		return projects.map((project) => {
			return (
				<StyledTableRow key={project.id}>
					<StyledTableCell>{project.id}</StyledTableCell>
					<StyledTableCell>{project.title}</StyledTableCell>
					<StyledTableCell>{project.description}</StyledTableCell>
					<StyledTableCell>
						<Box sx={{ display: 'flex', direction: 'row', flexWrap: 'wrap' }}>
							{projects.avatars?.map((ava) => {
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

					<StyledTableCell>
						<Button>Chỉnh sửa</Button>
						<Button>XOÁ</Button>
					</StyledTableCell>
				</StyledTableRow>
			)
		})
	}

	return (
		<Box>
			<TableContainer>
				<Table>
					<TableHead>
						<TableRow>
							<StyledTableCell>ID</StyledTableCell>
							<StyledTableCell>Tên công trình</StyledTableCell>
							<StyledTableCell>Mô Tả</StyledTableCell>
							<StyledTableCell>Hình Ảnh</StyledTableCell>

							<StyledTableCell align="center">TÁC VỤ</StyledTableCell>
						</TableRow>
					</TableHead>
					<TableBody>{renderListProjects()}</TableBody>
				</Table>

			</TableContainer>
		</Box>
	)
}
