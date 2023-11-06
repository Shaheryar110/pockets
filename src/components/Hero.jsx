import {
  Box,
  Button,
  Container,
  Grid,
  Rating,
  Typography,
} from "@mui/material";
import Image from "next/image";
import React from "react";
import { Poppins } from "next/font/google";
import StarIcon from "@mui/icons-material/Star";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

function Hero() {
  return (
    <>
      <Box sx={style.main}>
        <Container sx={style.container}>
          <Grid container>
            <Grid item lg={6} xs={12}>
              <Box sx={style.contentBox}>
                <Typography className={poppins.className} sx={style.heading}>
                  Transform Your
                </Typography>
                <Typography className={poppins.className} sx={style.heading}>
                  Financial{" "}
                  <span style={{ color: "#4FBF9A" }}>Relationship</span>
                </Typography>
                <Typography sx={style.para}>
                  Experience stress-free saving and spending with our versatile,
                  user-friendly financial solution.
                </Typography>
                <Button className={poppins.className} sx={style.btn}>
                  GET STARTED
                </Button>
                <Box sx={style.ratingBox}>
                  <Rating
                    value={0}
                    precision={0.5}
                    emptyIcon={
                      <StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />
                    }
                  />
                  <Typography sx={{ opacity: 0.7, fontWeight: 600 }}>
                    4000+ reviews
                  </Typography>
                </Box>
              </Box>
            </Grid>
            <Grid item lg={6} xs={12}>
              <Box sx={style.imageSide}>
                <Image
                  src={"/heroImg.webp"}
                  style={{ width: "100%" }}
                  alt="oops"
                  height={449}
                  width={637}
                />
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </>
  );
}

export default Hero;
const style = {
  main: {
    width: "100%",
    height: "100%",
    position: "relative",
    backgroundColor: "#F4F5F6",
    marginTop: "150px",
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
    alignItems: { lg: "start", xs: "center" },
  },
  heading: {
    fontSize: "48px",
    opacity: 0.8,
    fontWeight: 900,
    textAlign: { lg: "left", xs: "center" },
    color: "#182459",
  },
  para: {
    maxWidth: "400px",
    fontWeight: 500,
    fontSize: "20px",
    color: "#182459",
    textAlign: { lg: "left", xs: "center" },
    color: "#182459",
  },
  btn: {
    marginY: "12px",
    backgroundColor: "#182459",
    color: "white",
    fontWeight: 700,
    fontSize: { md: "18px", xs: "15px" },
    paddingY: "10px",
    width: { sm: "30%", xs: "50%" },
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
