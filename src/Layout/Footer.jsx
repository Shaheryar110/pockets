import {
  Box,
  Container,
  FormControl,
  Grid,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  Typography,
} from "@mui/material";
import React from "react";
import { Poppins } from "next/font/google";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

function Footer() {
  return (
    <Box sx={style.main}>
      <Container sx={style.container}>
        <Grid container>
          <Grid item md={6} xs={12}>
            <Box sx={{ padding: "1rem" }}>
              <Typography className={poppins.className} sx={style.text}>
                About Us
              </Typography>
              <Typography className={poppins.className} sx={style.text}>
                Refund Policy
              </Typography>
              <Typography className={poppins.className} sx={style.text}>
                Copright
              </Typography>
              <Typography className={poppins.className} sx={style.text}>
                Contact Us
              </Typography>
            </Box>
          </Grid>
          <Grid item md={6} xs={!2}>
            <Box>
              <Typography
                className={poppins.className}
                sx={{
                  textAlign: { md: "left", xs: "center" },
                  fontSize: "18px",
                  fontWeight: 700,
                  opacity: "0.8",
                }}
              >
                Customer Support Hours: 24/7. support@pocketai.com
              </Typography>
              <Typography
                className={poppins.className}
                sx={{
                  fontSize: "18px",
                  fontWeight: 700,
                  opacity: "0.8",
                  paddingY: "12px",
                  textAlign: { md: "left", xs: "center" },
                }}
              >
                📍 30 North Gould Street St Ste 4, Sheridan, WY, United States,
                82801
              </Typography>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  gap: "20px",
                  justifyContent: { md: "start", xs: "center" },
                }}
              >
                <FacebookIcon />
                <InstagramIcon />
              </Box>
            </Box>
          </Grid>
        </Grid>
        <Box
          sx={{
            width: "100%",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            paddingTop: "12px",
          }}
        >
          <Typography sx={{ opacity: 0.7 }}>
            Subscribe to your email :
          </Typography>
          <FormControl sx={{ m: 1, width: { md: "40%", xs: "100%" } }}>
            <InputLabel htmlFor="outlined-adornment-amount">Email</InputLabel>
            <OutlinedInput
              id="outlined-adornment-amount"
              endAdornment={
                <InputAdornment position="end">
                  <IconButton edge="end">
                    <ArrowForwardIcon />
                  </IconButton>
                </InputAdornment>
              }
              label="Email"
            />
          </FormControl>
        </Box>
      </Container>
    </Box>
  );
}

export default Footer;
const style = {
  main: {
    width: "100%",
    height: "100%",
    postion: "relative",
  },
  container: {
    paddingY: "3rem",
    maxWidth: { lg: "1400px" },
  },
  text: {
    paddingY: "10px",
    opacity: 0.8,
    fontWeight: 600,
    textAlign: { md: "left", xs: "center" },
    ":hover": {
      opacity: 1,
    },
  },
};
