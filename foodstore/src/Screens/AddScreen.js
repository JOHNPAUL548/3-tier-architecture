import { Stack, TextField, Button, Typography } from "@mui/material";
import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";

const AddScreen = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const initialState = {
    foodName: "",
    foodDesc: "",
    foodOrigin: "",
    foodImg: "",
    foodPopularity: "",
  };

  const toBeUpdatedState = location.state;

  const [food, setFood] = useState(toBeUpdatedState || initialState);

  const title = location.state
    ? " Enter the details to be updated to your favourite food!!!"
    : " Enter the details of your favourite food!!!";

 

  const foodsAPI = "http://localhost:5000/foods";

  const submitHandler = async () => {

    if(location.state){
      await axios.put(`${foodsAPI}/${location.state._id}`, {
        foodName: food.foodName,
        foodDesc: food.foodDesc,
        foodOrigin: food.foodOrigin,
        foodImg: food.foodImg,
        foodPopularity: food.foodPopularity,
      }).then((res) => res.data);
    }

    else{
      await axios
      .post(foodsAPI, {
        foodName: food.foodName,
        foodDesc: food.foodDesc,
        foodOrigin: food.foodOrigin,
        foodImg: food.foodImg,
        foodPopularity: food.foodPopularity,
      })
      .then((res) => res.data);
    }
    

    navigate("/allFoods");
  };

  return (
    <>
      <Typography variant="h4" sx={{ textAlign: "center", marginTop: "50px" }}>
        {title}
      </Typography>

      <Stack
        sx={{
          marginTop: "50px",
          marginRight: "100px",
          marginLeft: "100px",
          justifyContent: "center",
        }}
        spacing={3}
      >
        <TextField
          label="Food Name"
          variant="outlined"
          required
          fullWidth
          helperText="Enter the food name"
          size="small"
          value={food.foodName}
          onChange={(e) =>
            setFood((currFood) => ({ ...currFood, foodName: e.target.value }))
          }
        />
        <TextField
          label="Food Description"
          variant="outlined"
          required
          fullWidth
          helperText="Enter the food description"
          size="small"
          value={food.foodDesc}
          onChange={(e) =>
            setFood((currFood) => ({ ...currFood, foodDesc: e.target.value }))
          }
        />
        <TextField
          label="Origin of the Food"
          variant="outlined"
          required
          fullWidth
          helperText="Enter the origin of the food"
          size="small"
          value={food.foodOrigin}
          onChange={(e) =>
            setFood((currFood) => ({ ...currFood, foodOrigin: e.target.value }))
          }
        />
        <TextField
          label="Image of the Food"
          variant="outlined"
          required
          fullWidth
          helperText="Enter the URL of the food's image"
          size="small"
          value={food.foodImg}
          onChange={(e) =>
            setFood((currFood) => ({ ...currFood, foodImg: e.target.value }))
          }
        />
        <TextField
          label="Popularity of the Food"
          variant="outlined"
          required
          fullWidth
          helperText="Enter the food's popularity on global basis"
          size="small"
          value={food.foodPopularity}
          onChange={(e) =>
            setFood((currFood) => ({
              ...currFood,
              foodPopularity: e.target.value,
            }))
          }
        />
      </Stack>

      <Stack
        direction={"row"}
        sx={{ justifyContent: "center", marginTop: "500px" }}
        spacing={3}
      >
        <Button variant="outlined" onClick={() => navigate(-1)}> Go Back </Button>
        <Button variant="outlined" onClick={submitHandler}>
          Submit
        </Button>
      </Stack>
    </>
  );
};

export default AddScreen;
