import { Stack } from "@mui/material";
import { Box } from "@mui/system";
import Link from "next/link";
import Banner from "../common/header/Banner/Banner";
import Footer from "../common/Footer";
import Header from "../common/header/Header";
import ContactButton from "../common/contact-button/ContactButton";

function MainLayout({children}) {

return(
  <>
 
    <Stack minHeight="100vh" >
      <Header  />
      <Box  component="main" flexGrow={1}>{children}</Box>
      <Footer />
      <ContactButton  />
      

    </Stack>
   
    </>
  );
}
export default MainLayout;
