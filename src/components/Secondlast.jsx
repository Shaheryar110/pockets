import React from "react";
import { Poppins } from "next/font/google";
import Image from "next/image";
import { Box, Button, Container, Grid, Typography } from "@mui/material";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});
function Secondlast() {
  return (
    <Box sx={style.main}>
      <Container sx={style.container}>
        <Grid container>
          <Grid item xs={12}>
            <Box sx={style.contentBox}>
              <Typography className={poppins.className} sx={style.heading}>
                Have Fun With
                <span style={{ color: "#182459" }}>Your Money</span>
              </Typography>

              <Typography sx={style.para}>
                Try our user-friendly, flexible financial solution for a
                stress-free experience with saving and spending.
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12}>
            <Box sx={style.imageSide}>
              <Image
                src={"/heroImg.webp"}
                style={{ width: "100%", height: "100%" }}
                alt="oops"
                height={449}
                width={737}
              />
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

export default Secondlast;
const style = {
  main: {
    width: "100%",
    height: "100%",
    position: "relative",
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
    alignItems: "center",
  },
  heading: {
    fontSize: { md: "48px", sm: "38px", xs: "30px" },
    opacity: 0.8,
    fontWeight: 800,
    textAlign: "center",
  },
  para: {
    maxWidth: "400px",
    fontWeight: 500,
    fontSize: "20px",
    color: "#182459",
    textAlign: "center",
  },
  btn: {
    marginY: "12px",
    backgroundColor: "#182459",
    color: "white",
    fontWeight: 700,
    fontSize: "18px",
    paddingY: "10px",
    width: "60%",
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
