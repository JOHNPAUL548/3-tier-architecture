import { AppBar, Button, Icon, Stack, Toolbar, Typography } from "@mui/material";
import FastfoodIcon from "@mui/icons-material/Fastfood";
import { useNavigate } from "react-router-dom";


const Header = () => {

  const navigate = useNavigate()
 
  return (
    <AppBar position="static">
      <Toolbar sx={{backgroundColor:"orange"}}>
        <Icon color="inherit">
          <FastfoodIcon />
        </Icon>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1, marginLeft: "10px" }}>
            Cloud Foodstore
          </Typography>
          <Stack direction={'row'}>
            <Button sx={{color:"inherit"}} onClick={()=>navigate('/allFoods')}>All Foods</Button>
            <Button sx={{color:"inherit"}} onClick={()=>navigate('/addFoods')}>Add Foods</Button>
          </Stack>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
