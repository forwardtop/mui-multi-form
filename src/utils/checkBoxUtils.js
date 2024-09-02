import { Grid, FormGroup, Typography, Checkbox } from "@mui/material";

export const checkBoxUtils = ({
  sm,
  label,
  name,
  formData,
  handleChange,
}) => (
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
        name={name}
        checked={Boolean(Number(formData[name]))}
        onChange={handleChange}
        sx={{ marginLeft: 1 }}
      />
    </FormGroup>
  </Grid>
);
