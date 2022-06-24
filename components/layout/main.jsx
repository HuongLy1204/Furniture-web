import { Stack } from "@mui/material";
import { Box } from "@mui/system";
import ContactButton from "../common/contact-button/ContactButton";
import Footer from "../common/Footer";
import Header from "../common/header/Header";

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
