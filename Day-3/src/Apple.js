import { Button, Grid } from "@mui/material";
import { useNavigate } from 'react-router-dom';

export const Apple = () => {
  const navigate = useNavigate();

  const onHomePageButtonClick = () => {
    navigate("/");
  };

  return (
    <Grid container direction="column" alignItems="center">
      <Grid item>
        <h2 style={{ marginTop: "20px" }}>Apple Page 🍎</h2>
      </Grid>
      <Grid item>
        <Button variant="contained" onClick={onHomePageButtonClick} style={{ marginTop: "10px" }}>
          Button ➡️ 🏠
        </Button>
      </Grid>
    </Grid>
  );
};
