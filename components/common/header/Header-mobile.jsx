
import { Box } from "@mui/system";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { PRODUCT_LIST } from "../productlist/product-list";
import { Stack } from "@mui/material";
import Logo from "../../../public/logo.svg";
import Image from "next/image";
import { useState } from "react";

function HeaderMobile() {
  const ITEM_HEIGHT = 48;

  const [anchorEl, setAnchorEl] =useState(null)
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Box minHeight={50} display={{ xs: "block", lg: "none" }}>
      <Stack minHeight={50} justifyContent={"space-between"} direction="row">
        <Box  sx={{width: 300}} >
        <Image sx={{pt:20}}
              src={Logo}
              alt="logo"
            height={90}
            
              objectFit="scale-down"
            />
        </Box>
        <Box>
          <IconButton
            aria-label="more"
            id="long-button"
            aria-controls={open ? "long-menu" : undefined}
            aria-expanded={open ? "true" : undefined}
            aria-haspopup="true"
            onClick={handleClick}
          >
            <MoreVertIcon />
          </IconButton>
          <Menu
            id="long-menu"
            MenuListProps={{
              "aria-labelledby": "long-button",
            }}
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            PaperProps={{
              style: {
                maxHeight: ITEM_HEIGHT * 4.5,
                width: "20ch",
              },
            }}
          >
            {PRODUCT_LIST.map((option) => (
              <MenuItem
                key={option.id}
                // selected={option === "Pyxis"}
                onClick={handleClose}
              >
                {option.title}
              </MenuItem>
            ))}
          </Menu>
        </Box>
      </Stack>
    </Box>
  );
}
export default HeaderMobile;
