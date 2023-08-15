import React from "react";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";
import {
  Stack,
  Button,
  Typography,
  CardActionArea,
  CardActions,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const FoodCard = ({
  id,
  foodTitle,
  foodPic,
  foodDesc,
  foodOrigin,
  foodPopularity,
  foods,
}) => {
  const navigate = useNavigate();
  const foodsAPI = "http://localhost:5000/foods";

  const deleteHandler = async () => {
    await axios
      .delete(`${foodsAPI}/${id}`)
      .then((res) => res.data)
      .then(() => navigate("/allFoods"));
  };

  return (
    <Card
      sx={{ width: 350, height: 500, margin: "20px", borderRadius: "20px" }}
    >
      <CardActionArea onClick={() => console.log(id)}>
        <CardHeader title={foodTitle} sx={{ textAlign: "center" }} />
        <CardMedia
          component="img"
          height="194"
          image={foodPic}
          alt="Paella dish"
        />
        <CardContent sx={{textAlign:'left'}}>
          <Stack spacing={3}>
            <Typography variant="body2" color="text.secondary">
              Description: {foodDesc}
            </Typography>

            <Typography variant="body2" color="text.secondary">
              Origin: {foodOrigin}
            </Typography>

            <Typography variant="body2" color="text.secondary">
              Popularity: {foodPopularity}
            </Typography>
          </Stack>
        </CardContent>
      </CardActionArea>

      <Stack
        direction={"row"}
        sx={{ justifyContent: "center", marginTop: "20px" }}
        spacing={3}
      >
        <CardActions>
          <Button
            variant="text"
            onClick={() =>
              navigate("/addFoods", {
                state: foods.find((food) => food._id === id),
              })
            }
          >
            Update
          </Button>
          <Button variant="text" onClick={deleteHandler}>
            Delete
          </Button>
        </CardActions>
      </Stack>
    </Card>
  );
};

export default FoodCard;
