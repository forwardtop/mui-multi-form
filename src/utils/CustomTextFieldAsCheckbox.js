import React, { useContext } from "react";
import TextField from "@mui/material/TextField";
import { Box} from "@mui/material";
import { AuthContext } from "../config/AuthContext";

function CustomTextFieldAsCheckbox({ index, name }) {
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
    <TextField
      fullWidth
      size="small"
      variant="outlined"
      name={name}
      onClick={handleClick}
      sx={{ input: { cursor: 'pointer' } }}
      InputProps={{
        readOnly: true,
        endAdornment: checked ? (
          <Box
            sx={{
              fontSize: "2rem",
              color: "#00007f",
              fontWeight: "bolder",
              marginLeft: '-6px',
              cursor: 'pointer'
            }}
          >
            &#10003;
          </Box>
        ) : null,
      }}
      
    />
  );
}

export default CustomTextFieldAsCheckbox;
