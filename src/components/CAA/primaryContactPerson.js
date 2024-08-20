import React, { useContext } from "react";
import {
  Box,
  Grid,
  Typography,
  TextField,
} from "@mui/material";
import { AuthContext } from "../../config/AuthContext";
const PrimaryContactPerson = () => {
  const { formData, handleChange } = useContext(AuthContext);

  return (
    <Box
      sx={{
        marginBottom: "2rem",
        paddingY: "0.5rem",
        borderTop: "2px solid #000",
      }}
    >
      <Box sx={{ display: "flex" }}>
        <Box>
          <Typography
            variant="h6"
            gutterBottom
            color="secondary.main"
            sx={{
              backgroundColor: "black",
              color: "white",
              width: "1.8rem",
              height: "1.8rem",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              padding: "0.5rem",
            }}
          >
            9
          </Typography>
        </Box>
        <Box>
          <Typography
            variant="h6"
            color="secondary.main"
            sx={{ marginLeft: "0.5rem" }}
          >
            Primary Contact Person / Owner /Director <span style={{fontSize:'14px', fontStyle:'italic'}}> (The person who will sign this application)
</span>
          </Typography>
        </Box>
      </Box>
      <Grid container spacing={1} sx={{ paddingLeft: "3.5rem" }}>
        <Grid
          item
          xs={12}
          sm={1.5}
          sx={{
            display: "flex",
            alignItems: "center",
          }}
        >
          <Typography>Title:</Typography>
        </Grid>
        <Grid item xs={12} sm={3}>
          <TextField
            fullWidth
            name="title"
            size="small"
            variant="outlined"
            value={formData.title}
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={12} sm={7.5}>
        
        </Grid>
        <Grid
          item
          xs={12}
          sm={1.5}
          sx={{
            display: "flex",
            alignItems: "center",
          }}
        >
          <Typography>First Name:</Typography>
        </Grid>
        <Grid item xs={12} sm={5.5}>
          <TextField
            fullWidth
            name="firstName"
            size="small"
            variant="outlined"
            value={formData.firstName}
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={12} sm={4.5}>
        
        </Grid>
        <Grid
          item
          xs={12}
          sm={1.5}
          sx={{
            display: "flex",
            alignItems: "center",
          }}
        >
          <Typography>Middle Name/s:</Typography>
        </Grid>
        <Grid item xs={12} sm={5.5}>
          <TextField
            fullWidth
            name="firstName"
            size="small"
            variant="outlined"
            value={formData.firstName}
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={12} sm={4.5}>
        
        </Grid>
        
        <Grid
          item
          xs={12}
          sm={1.5}
          sx={{
            display: "flex",
            alignItems: "center",
            
          }}
        >
          <Typography>Surname:</Typography>
        </Grid>
        <Grid item xs={12} sm={5.5}>
          <TextField
            fullWidth
            name="surname"
            size="small"
            variant="outlined"
            value={formData.surname}
            onChange={handleChange}
          />
        </Grid>
        
        <Grid item xs={12} sm={4.5}>
        </Grid>
        <Grid
          item
          xs={12}
          sm={1.5}
          style={{ display: "flex", alignItems: "center" }}
        >
          <Typography>Position:</Typography>
        </Grid>
        <Grid item xs={12} sm={10.5}>
          <TextField
            fullWidth
            name="position"
            size="small"
            variant="outlined"
            value={formData.position}
            onChange={handleChange}
          />
        </Grid>
        <Grid
          item
          xs={12}
          sm={1.5}
          style={{ display: "flex", alignItems: "center" }}
        >
          <Typography>Direct Tel:</Typography>
        </Grid>
        <Grid item xs={12} sm={5.5}>
          <TextField
            fullWidth
            name="tel"
            size="small"
            variant="outlined"
            value={formData.tel}
            onChange={handleChange}
          />
        </Grid>
        
        <Grid
          item
          xs={12}
          sm={1}
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: {
              xs: "flex-start",
              sm: "flex-end",
            },
          }}
        >
          <Typography>Mobile:</Typography>
        </Grid>
        <Grid item xs={12} sm={4}>
          <TextField
            fullWidth
            name="mobile"
            size="small"
            variant="outlined"
            value={formData.mobile}
            onChange={handleChange}
          />
        </Grid>
        <Grid
          item
          xs={12}
          sm={1.5}
          style={{ display: "flex", alignItems: "center" }}
        >
          <Typography>Email Address:</Typography>
        </Grid>
        <Grid item xs={12} sm={10.5}>
          <TextField
            fullWidth
            name="email"
            size="small"
            variant="outlined"
            value={formData.email}
            onChange={handleChange}
          />
        </Grid>
      </Grid>
    </Box>
  );
};

export default PrimaryContactPerson;
