import { Box } from "@mui/material";
import axios from "axios";
import React, { useEffect,   useState } from "react";

import FoodCard from '../components/FoodCard'



const Foods = () => {

    const foodsAPI = "http://localhost:5000/foods";

  const [foods, setFoods] = useState([]);

  const getFoods = async () => {
    return await axios.get(foodsAPI).then((res) => res.data);
  };



  useEffect(() => {
    getFoods().then((data) => setFoods(data.foods));
  }, [foods]);

  return (
    <Box sx={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}>
      {foods.length!==0 &&
        foods.map((food) => (
          <FoodCard
            key={food._id}
            foodTitle={food.foodName}
            foodPic={food.foodImg}
            foodDesc={food.foodDesc}
            foodOrigin={food.foodOrigin}
            foodPopularity={food.foodPopularity}
            foods={foods}
            id={food._id}
          />
        ))}

        {foods.length === 0 && <h1>Your favorites aren't here</h1>}
    </Box>
  );
};

export default Foods;
