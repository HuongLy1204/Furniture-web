import { Stack } from "@mui/material";
import { Box } from "@mui/system";
import Link from "next/link";
import Banner from "../common/header/Banner/Banner";
import Footer from "../common/Footer";
import Header from "../common/header/Header";
import ContactButton from "../common/contact-button/ContactButton";
import FilterBar from "../filter-bar/filterBar";

export default function ProductLayout({children}) {

return(
  <>
 
    <Stack minHeight="100vh" >
      <Header  />
      <FilterBar/>
      <Box  component="main" flexGrow={1}>{children}</Box>
      <Footer />
      <ContactButton  />
      

    </Stack>
   
    </>
  );
}
