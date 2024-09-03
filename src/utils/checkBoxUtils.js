import { Grid, FormGroup, Typography, Checkbox } from "@mui/material";
export const checkBoxUtils = (
  sm,
  label,
  checkBoxName,
  formData,
  handleChange
) => (
  <Grid
    item
    sm={sm} 
    sx={{ display: "flex", justifyContent: "flex-end" }}
  >
    <FormGroup
      sx={{
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
      }}
    >
      <Typography>{label}</Typography>
      <Checkbox
        color="primary"
        name={checkBoxName}
        checked={!!formData[checkBoxName]}
        onChange={() =>
          handleChange({ target: { name: checkBoxName, value: !formData[checkBoxName] } })
        }
        sx={{ marginLeft: 1 }}
      />
    </FormGroup>
  </Grid>
);
