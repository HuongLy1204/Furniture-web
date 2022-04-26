
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import { Checkbox, IconButton } from "@mui/material";
import { useState } from "react";
import Favorite from '@mui/icons-material/Favorite';


const label = { inputProps: { 'aria-label': 'Checkbox demo' } };
export default function ProductItem(props) {
  

  return (
    <Card sx={{minHeight:"290px", maxHeight: 200, maxWidth: 300, padding:0 }}>
      <CardMedia
        sx={{ layout:"responsive", objectFit:"scale-down",minHeight: "190px", maxHeight: 180, maxWidth: 280}}
        component="img"
        
        image={props.dataItem.url}
        alt={props.dataItem.title}
      />
      <CardContent sx={{padding:"5px"}}>
        <Typography
          fontSize={16}
          align="center"
          gutterBottom
          variant="OVERLINE TEXT"
          component="div"
        >
          {props.dataItem.title}
        </Typography>
      </CardContent>
      <CardActions  sx={{justifyContent:"space-around", mb:"4px"}}>
        <Button color="success" variant="outlined" size="medium">
          CHI TIẾT
        </Button>
        
        <Checkbox {...label} icon={<FavoriteBorderIcon />} checkedIcon={<Favorite color="sucess" />} />

        
      
      </CardActions>
    </Card>
  );
}
