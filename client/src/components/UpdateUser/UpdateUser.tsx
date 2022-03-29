import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import UpdateIcon from "@mui/icons-material/Update";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import axios from "axios";

import { countries } from "../../data/countries";
import { successAndErrorInfo } from "../../services/services";

const theme = createTheme();

const UpdateUser = () => {
  const [successAndError, setSuccessAndError] = React.useState({});
  // input initials
  const [firstName, setFirstName] = React.useState("");
  const [lastName, setLastName] = React.useState("");
  const [age, setAge] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [address, setAddress] = React.useState("");
  const [country, setCountry] = React.useState("");
  const [city, setCity] = React.useState("");
  const [phone, setPhone] = React.useState("");

  const resetInput = () => {
    setFirstName("");
    setLastName("");
    setAge("");
    setEmail("");
    setAddress("");
    setCountry("");
    setCity("");
    setPhone("");
  };

  // Form submit handler
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log("submit");
    
    // eslint-disable-next-line no-console
    // axios
    //   .post("http://localhost:5000/api/v1/users", {
    //     firstName: data.get("firstName"),
    //     lastName: data.get("lastName"),
    //     age: Number(data.get("age")),
    //     email: data.get("email"),
    //     password: data.get("password"),
    //     address: data.get("address"),
    //     country: country, // dropdown
    //     city: data.get("city"),
    //     phone: data.get("mobil"),
    //   })
    //   .then(function (response) {
    //     setSuccessAndError(response.data);
    //     if (response.data.success) resetInput();
    //     console.log(response.data);
    //   })
    //   .catch(function (error) {
    //     setSuccessAndError({ error: error.message });
    //     console.log(error);
    //   });
  };

  // country select handler
  const handleChangeCountry = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCountry(event.target.value);
  };

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" className="container">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: "primary.main" }}>
            <UpdateIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            User ID some id here
          </Typography>

          <Box component="form" onSubmit={handleSubmit} sx={{ mt: 3 }}>
            <Grid container spacing={2}>
              {successAndErrorInfo(successAndError, setSuccessAndError)}
              <Grid item xs={12} sm={3}>
                <TextField
                  value={firstName}
                  onChange={(e) => setFirstName(e.currentTarget.value)}
                  name="firstName"
                  fullWidth
                  id="firstName"
                  label="First Name"
                  autoFocus
                />
              </Grid>
              <Grid item xs={12} sm={3}>
                <TextField
                  value={lastName}
                  onChange={(e) => setLastName(e.currentTarget.value)}
                  fullWidth
                  id="lastName"
                  label="Last Name"
                  name="lastName"
                />
              </Grid>
              <Grid item xs={12} sm={3}>
                <TextField
                  value={email}
                  onChange={(e) => setEmail(e.currentTarget.value)}
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                />
              </Grid>

              <Grid item xs={12} sm={3}>
                <TextField
                  value={city}
                  onChange={(e) => setCity(e.currentTarget.value)}
                  name="city"
                  fullWidth
                  id="city"
                  label="City"
                />
              </Grid>
              <Grid item xs={12} sm={3}>
                <TextField
                  value={phone}
                  onChange={(e) => setPhone(e.currentTarget.value)}
                  type="number"
                  fullWidth
                  id="mobil"
                  label="Mobil"
                  name="mobil"
                />
              </Grid>
              <Grid item xs={12} sm={3}>
                <TextField
                  id="country"
                  name="country"
                  fullWidth
                  select
                  label="Select country"
                  value={country}
                  onChange={handleChangeCountry}
                >
                  {countries.map((country: string, index: number) => (
                    <MenuItem key={index} value={country}>
                      {country}
                    </MenuItem>
                  ))}
                </TextField>
              </Grid>
              <Grid item xs={12} sm={3}>
                <TextField
                  value={address}
                  onChange={(e) => setAddress(e.currentTarget.value)}
                  name="address"
                  fullWidth
                  id="address"
                  label="Address"
                />
              </Grid>
              <Grid item xs={12} sm={3}>
                <TextField
                  value={age}
                  onChange={(e) => setAge(e.currentTarget.value)}
                  name="age"
                  fullWidth
                  type="number"
                  id="age"
                  label="Age"
                />
              </Grid>
            </Grid>
            <Grid container justifyContent="flex-end">
              <Grid item>
                <Button type="submit" variant="contained" sx={{ mt: 3, mb: 2 }}>
                  update
                </Button>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
};

export default UpdateUser;
