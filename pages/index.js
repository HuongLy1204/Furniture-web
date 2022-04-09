import { Container, Grid, Stack, Typography } from "@mui/material";
import { Box } from "@mui/system";
import Banner from "../components/common/header/Banner/Banner";
import { PRODUCT_LIST } from "../components/common/productlist/product-list";
import ProductItem from "../components/common/productlist/ProductItem";
import MainLayout from "../components/layout/main";

export default function HomePage() {
  return (
    <Box>
      <Banner />
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
          spacing={{ xs: 2, md: 3 }}
          columns={{ xs: 4, sm: 8, md: 12 }}
        >
          {PRODUCT_LIST.map((item) => (
            <Grid my={2} item xs={2} sm={4} md={4} key={item.id}>
              <ProductItem dataItem={item}></ProductItem>
            </Grid>
          ))}
        </Grid>
        {/* <Stack flexWrap={"wrap"} direction= "row" spacing={4} >
          {PRODUCT_LIST.map(item => (<ProductItem dataItem = {item}></ProductItem>))}
        
        </Stack> */}
      </Container>
    </Box>
  );
}

// export default Home;
HomePage.Layout = MainLayout;
