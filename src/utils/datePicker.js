import { Grid } from "@mui/material";
import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import dayjs from "dayjs";
export const FormDatePicker = (name, formData, handleChange) => (
  <Grid item xs={12}>
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DemoContainer components={["DatePicker"]} sx={{ paddingTop: "0px" }}>
        <DatePicker
          format="MM/YY"
          onChange={handleChange}
          value={dayjs(formData[name])}
          slotProps={{
            textField: {
              size: "small",
            },
          }}
        />
      </DemoContainer>
    </LocalizationProvider>
  </Grid>
);
