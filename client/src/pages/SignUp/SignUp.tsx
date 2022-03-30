import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";

import { countries } from "../../data/countries";
import { successAndErrorInfo } from "../../services/services";
import { axiosInstance } from "../../config";

function Copyright(props: any) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      {"Copyright © "}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const theme = createTheme();

export default function SignUp() {
  const [successAndError, setSuccessAndError] = React.useState({});
  // input initials
  const [firstName, setFirstName] = React.useState("");
  const [lastName, setLastName] = React.useState("");
  const [age, setAge] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [address, setAddress] = React.useState("");
  const [country, setCountry] = React.useState("");
  const [city, setCity] = React.useState("");
  const [phone, setPhone] = React.useState("");

  const resetInput = () => {
    setFirstName("");
    setLastName("");
    setAge("");
    setEmail("");
    setPassword("");
    setAddress("");
    setCountry("");
    setCity("");
    setPhone("");
  };

  // Form submit handler
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    // eslint-disable-next-line no-console
    axiosInstance
      .post("/users", {
        firstName: data.get("firstName"),
        lastName: data.get("lastName"),
        age: Number(data.get("age")),
        email: data.get("email"),
        password: data.get("password"),
        address: data.get("address"),
        country: country, // dropdown
        city: data.get("city"),
        phone: data.get("mobil"),
      })
      .then(function (response) {
        setSuccessAndError(response.data);
        if (response.data.success) resetInput();
        console.log(response.data);
      })
      .catch(function (error) {
        setSuccessAndError({ error: error.message });
        console.log(error);
      });
  };

  // country select handler
  const handleChangeCountry = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCountry(event.target.value);
  };

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign up
          </Typography>

          <Box component="form" onSubmit={handleSubmit} sx={{ mt: 3 }}>
            <Grid container spacing={2}>
              {successAndErrorInfo(successAndError, setSuccessAndError)}
              <Grid item xs={12} sm={6}>
                <TextField
                  value={firstName}
                  onChange={(e) => setFirstName(e.currentTarget.value)}
                  autoComplete="given-name"
                  name="firstName"
                  required
                  fullWidth
                  id="firstName"
                  label="First Name"
                  autoFocus
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  value={lastName}
                  onChange={(e) => setLastName(e.currentTarget.value)}
                  required
                  fullWidth
                  id="lastName"
                  label="Last Name"
                  name="lastName"
                  autoComplete="family-name"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  value={email}
                  onChange={(e) => setEmail(e.currentTarget.value)}
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  value={password}
                  onChange={(e) => setPassword(e.currentTarget.value)}
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="new-password"
                />
              </Grid>
              <Grid item xs={12} sm={5}>
                <TextField
                  value={city}
                  onChange={(e) => setCity(e.currentTarget.value)}
                  autoComplete="city"
                  name="city"
                  fullWidth
                  id="city"
                  label="City"
                />
              </Grid>
              <Grid item xs={12} sm={7}>
                <TextField
                  value={phone}
                  onChange={(e) => setPhone(e.currentTarget.value)}
                  type="number"
                  fullWidth
                  id="mobil"
                  label="Mobil"
                  name="mobil"
                  autoComplete="mobil"
                />
              </Grid>
              <Grid item xs={12}>
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
              <Grid item xs={12}>
                <TextField
                  value={address}
                  onChange={(e) => setAddress(e.currentTarget.value)}
                  autoComplete="address"
                  name="address"
                  required
                  fullWidth
                  id="address"
                  label="Address"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  value={age}
                  onChange={(e) => setAge(e.currentTarget.value)}
                  name="age"
                  required
                  fullWidth
                  type="number"
                  id="age"
                  label="Age"
                />
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign Up
            </Button>
            <Grid container justifyContent="flex-end">
              <Grid item>
                <Link href="signin" variant="body2">
                  Already have an account? Sign in
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
        <Copyright sx={{ mt: 5 }} />
      </Container>
    </ThemeProvider>
  );
}
