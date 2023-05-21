import { Button, Grid } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";

export const HomePage = () => {
  const navigate = useNavigate();

  const onHomePageButtonClick = () => {
    navigate("/apple");
  };

  return (
    <Grid container direction="column" alignItems="center">
      <Grid item>
        <h2 style={{ marginTop: "20px" }}>Home Page 🏠</h2>
      </Grid>
      <Grid item>
        <Button variant="contained" onClick={onHomePageButtonClick} style={{ marginTop: "10px" }}>
          Button ➡️ 🍎
        </Button>
      </Grid>
    </Grid>
  );
};
