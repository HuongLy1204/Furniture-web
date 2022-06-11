import { Container, Grid, Stack, Typography } from "@mui/material";
import { Box } from "@mui/system";
import Image from "next/image";
import AboutMe from "../components/about-me/AboutMe";
import Banner from "../components/common/header/Banner/Banner";
import { PRODUCT_LIST } from "../components/common/productlist/product-list";
import ProductItem from "../components/common/productlist/ProductItem";
import Customer from "../components/WorksList";
import MainLayout from "../components/layout/main";

import ModelDesignDesktop from "../components/model-design/ModelDesignDesktop";
import ModelDesignMobile from "../components/model-design/ModelDesignMobile";
import Process from "../public/quytrinh.svg"
import WorksList from "../components/WorksList";

export default function HomePage() {
  return (
    <Box>
      <Banner />
      <AboutMe/>
      <ModelDesignDesktop/>
      <ModelDesignMobile/>
      <Container>
        <Typography
          align="center"
          color={"gray"}
          component="h1"
          variant="h5"
          my={4}
          fontWeight={"bolder"}
        >
          SẢN PHẨM
        </Typography>
        <Grid
        
          container
          alignItems="center"
          spacing={{ xs: 2, md: 2.5 }}
          columns={{ xs: 4, sm: 8, md: 12 }}
        >
          {PRODUCT_LIST.map((item) => (
            <Grid my={2} item xs={2} sm={4} md={4} key={item.id}>
            <ProductItem dataItem={item}></ProductItem>
          </Grid>
          ))}
        </Grid>
      </Container>
     <WorksList/>
     
    </Box>
  );
}

// export default Home;
HomePage.Layout = MainLayout;
