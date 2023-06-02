import React, { useState } from "react";
import { Button, TextField, Popover, Avatar } from "@mui/material";
import { blue, grey } from "@mui/material/colors";
import { useNavigate } from "react-router-dom";
import { Grid } from "@mui/material";

export const Apple = () => {
  const [name, setName] = useState("Nisarg");
  const [email, setEmail] = useState("nisarg@gmail.com");
  const [open, setOpen] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);
  const navigate = useNavigate();

  const onHomePageButtonClick = () => {
    console.log("Button clicked");
    console.log("Name: ", name);
    console.log("Email: ", email);
    navigate("/");
  };

  const handleClick = (event) => {
    console.log(123);
    setAnchorEl(event.currentTarget);
    setOpen(true);
  };

  const handleClose = () => {
    setAnchorEl(null);
    setOpen(false);
  };

  const handlePopoverContentClick = () => {
    navigate("/"); // Redirect to the home page
    handleClose(); // Close the popover after redirection
  };

  return (
    <div style={{ padding: 13 }}>
      <div
        style={{
          display: "flex",
          justifyContent: "flex-end",
          alignItems: "center",
          columnGap: 10
        }}
      >
        <div onClick={handleClick} style={{ cursor: "pointer" }}>
          <Avatar sx={{ bgcolor: blue[500], color: grey[50], marginRight: 10 }}>
            NP
          </Avatar>
          <span style={{ fontSize: 16, fontWeight: "bold" }}>Nisarg Patel</span>
        </div>
      </div>
      <Grid item>
        <h2 style={{ marginTop: "20px", marginLeft:"25px" }}>Apple Page 🍎</h2>
      </Grid>
      <div
        style={{
          padding: 20,
          display: "flex",
          flexDirection: "column",
          rowGap: 16,
          justifyContent: "center" // Aligns the button to the center
        }}
      >
        <TextField
          variant="outlined"
          type="text"
          value={name}
          label="Name"
          placeholder="Name"
          onChange={(e) => {
            setName(e.target.value);
          }}
        />
        <TextField
          variant="outlined"
          type="email"
          value={email}
          label="Email"
          placeholder="Email"
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
         <Button variant="contained" onClick={onHomePageButtonClick} style={{ marginTop: "10px" }}>
          Button ➡️ 🏠
        </Button>
      </div>

      <Popover
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "center"
        }}
        transformOrigin={{
          vertical: "center",
          horizontal: "left"
        }}
      >
        <div
          onClick={handlePopoverContentClick}
          style={{
            padding: 12,
            cursor: "pointer",
            color: blue[500],
            fontWeight: "bold"
          }}
        >
          Logout
        </div>
      </Popover>
    </div>
  );
};
