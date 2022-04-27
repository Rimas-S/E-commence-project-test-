import * as React from "react";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import { RootStateOrAny, useDispatch, useSelector } from "react-redux";
import { Box, Button } from "@mui/material";
import { setCheckoutStep } from "../../State/Redux/action";

export default function PaymentForm() {
  const dispatch = useDispatch();

  const submitHandler = () => {
    dispatch(setCheckoutStep(2));
    // const value = new FormData();
    // console.log(value.get("firstName"));
  };

  const handleBack = () => {
    // setActiveStep(activeStep - 1);
    dispatch(setCheckoutStep(0));
  };

  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Payment method
      </Typography>
      <Box component="form" onSubmit={submitHandler}>
        <Grid container spacing={3}>
          <Grid item xs={12} md={6}>
            <TextField
              required
              id="cardName"
              label="Name on card"
              fullWidth
              autoComplete="cc-name"
              variant="standard"
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField
              required
              id="cardNumber"
              label="Card number"
              fullWidth
              autoComplete="cc-number"
              variant="standard"
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField
              required
              id="expDate"
              label="Expiry date"
              fullWidth
              autoComplete="cc-exp"
              variant="standard"
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField
              required
              id="cvv"
              label="CVV"
              helperText="Last three digits on signature strip"
              fullWidth
              autoComplete="cc-csc"
              variant="standard"
            />
          </Grid>
          <Grid item xs={12}>
            <FormControlLabel
              control={
                <Checkbox color="secondary" name="saveCard" value="yes" />
              }
              label="Remember credit card details for next time"
            />
          </Grid>
        </Grid>
        <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
          <Button onClick={handleBack} sx={{ mt: 3, ml: 1 }}>
            Back
          </Button>

          <Button
            variant="contained"
            onClick={submitHandler}
            sx={{ mt: 3, ml: 1 }}
          >
            next
          </Button>
        </Box>
      </Box>
    </React.Fragment>
  );
}
