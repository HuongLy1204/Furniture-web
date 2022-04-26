import { Box } from "@mui/system";
import Banner from "../../components/common/header/Banner/Banner";
import FilterBar from "../../components/filter-bar/filterBar";
import MainLayout from "../../components/layout/main";

export default function ProductPage() {
  
  return <Box >
    <FilterBar></FilterBar>
  </Box>;

}

// }

ProductPage.Layout = MainLayout;
