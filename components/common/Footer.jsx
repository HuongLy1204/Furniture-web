import { Stack, Typography } from "@mui/material"
import { Box } from "@mui/system"
import Image from "next/image"
import Logo from "../../public/logo.svg"

function Footer(){

    return(
        <Box bgcolor={"#8B9772"} height={500} border={0.1}>
            <Stack direction={"column"}>
                <Box height={470}>
                    <Stack direction={"row"}>
                    <Box   width={"40%"}>
                        
                    <Typography>main </Typography>
                    </Box>
                    <Box width={"30%"} ></Box>
                    <Box width={"30%"}></Box>
                        
                    </Stack>
                </Box>
                <Box  border={0.01}  height={30} >
                    <Typography align="center" color={"white"}>Bản quyền thuộc về Nội thất Minh Kha</Typography>
                </Box>
            </Stack>
        </Box>
        )
}
export default Footer