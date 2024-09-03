import React, { useContext } from "react";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import { AuthContext } from "../config/AuthContext";
import { Grid, Typography } from "@mui/material";

function TextFieldCheckBox({ labelSize, checkBoxSize, name, label }) {
  const { formData, handleChange } = useContext(AuthContext);
  const checked = Boolean(formData[name]);

  const handleClick = () => {
    const unchecked = !checked;
    handleChange({
      target: {
        name: name,
        value: unchecked ? true : false,
      },
    });
  };

  return (
    <Grid container sx={{display:"flex", justifyContent:"flex-end"}}>
      <Grid item xs={labelSize} sx={{display:"flex", alignItems:"center"}}>
        <Typography variant="body1">{label}</Typography>
      </Grid>
      <Grid item xs={checkBoxSize} sx={{display:"flex", justifyContent:"center"}}>
        <TextField
          fullWidth
          size="small"
          variant="outlined"
          name={name}
          onClick={handleClick}
          sx={{ input: { cursor: "pointer" } }}
          InputProps={{
            readOnly: true,
            endAdornment: checked ? (
              <Box
                sx={{
                  fontSize: "2rem",
                  color: "#00007f",
                  fontWeight: "bolder",
                  marginLeft: "-7px",
                  cursor: "pointer",
                }}
              >
                &#10003;
              </Box>
            ) : null,
          }}
        />
      </Grid>
    </Grid>
  );
}

export default TextFieldCheckBox;
