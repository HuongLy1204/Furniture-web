
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import { IconButton } from "@mui/material";
import { useState } from "react";

export default function ProductItem(props) {
  const [isLike, setLike] = useState(false)

  return (
    <Card sx={{ maxWidth: 300 }}>
      <CardMedia
        component="img"
        max-height="300"
        image={props.dataItem.url}
        alt={props.dataItem.title}
      />
      <CardContent>
        <Typography
          align="center"
          gutterBottom
          variant="OVERLINE TEXT"
          component="div"
        >
          {props.dataItem.title}
        </Typography>
      </CardContent>
      <CardActions flexDirection="">
        <Button color="success" variant="outlined" size="medium">
          CHI TIẾT
        </Button>
        <IconButton
          onClick={() => setLike(!isLike)}
          aria-label="favoritebordericon"
        >
          <FavoriteBorderIcon
            variant="filled"
            sx={{ color: isLike ? "red" : "black" }}
          />
        </IconButton>
      </CardActions>
    </Card>
  );
}
