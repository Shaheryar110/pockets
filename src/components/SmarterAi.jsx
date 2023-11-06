import React from "react";
import { Poppins } from "next/font/google";
import Image from "next/image";
import { Box, Button, Container, Grid, Typography } from "@mui/material";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

function SmarterAi() {
  return (
    <Box sx={style.main}>
      <Container sx={style.container}>
        <Grid container>
          <Grid item md={7}>
            <Box sx={style.contentBox}>
              <Typography className={poppins.className} sx={style.heading}>
                Meet Our Ai SmartBot:{" "}
                <span style={{ color: "#4FBF9A" }}>Your</span>
              </Typography>
              <Typography className={poppins.className} sx={style.heading}>
                <span style={{ color: "#4FBF9A" }}> Financial Ally</span>
              </Typography>
              <Typography sx={style.para}>
                We have our SmartBot to assist you in simplifying your financial
                journey. Obtain easy, personalized financial management
                guidance.
              </Typography>
              <Button className={poppins.className} sx={style.btn}>
                GET STARTED NOW!
              </Button>
            </Box>
          </Grid>
          <Grid item md={5}>
            <Box sx={style.imageSide}>
              <Image
                src={"/form.webp"}
                style={{ width: "100%", height: "100%" }}
                alt="oops"
                height={449}
                width={637}
              />
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

export default SmarterAi;
const style = {
  main: {
    width: "100%",
    height: "100%",
    position: "relative",
    backgroundColor: "#F4F5F6",
  },
  container: {
    maxWidth: { lg: "1400px" },
    paddingY: "30px",
  },
  imageSide: {
    width: "100%",
    height: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  contentBox: {
    width: "100%",
    height: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    padding: "1rem",
  },
  heading: {
    fontSize: { md: "48px", sm: "38px", xs: "30px" },
    opacity: 0.8,
    fontWeight: 800,
  },
  para: {
    maxWidth: "400px",
    fontWeight: 500,
    fontSize: "20px",
    color: "#182459",
  },
  btn: {
    marginY: "12px",
    backgroundColor: "#182459",
    color: "white",
    fontWeight: 700,
    fontSize: { sm: "18px", xs: "15px" },
    paddingY: "10px",
    width: { md: "60%", xs: "100%" },
    ":hover": {
      backgroundColor: "grey",
    },
  },
  ratingBox: {
    display: "flex",
    flexDirection: "row",
    gap: "10px",
    alignItems: "center",
  },
};
