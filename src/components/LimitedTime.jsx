import { Box, Container, Typography } from "@mui/material";
import React from "react";
import { Poppins } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

function LimitedTime() {
  return (
    <Box sx={style.main}>
      <Container sx={style.container}>
        <Typography sx={style.heading} className={poppins.className}>
          Exclusive Monthly Access:
          <span style={{ color: "#4FBF9A" }}> Limited Time Offer!</span>
        </Typography>
        <Typography sx={style.heading} className={poppins.className}>
          <span className="line-through">($5)</span>
          <span style={{ color: "#AA131D" }}> $2.99 Only!</span>
        </Typography>
        <Typography sx={style.heading} className={poppins.className}>
          <span style={{ color: "#AA131D" }}> +FREE E-Book</span>
        </Typography>
      </Container>
    </Box>
  );
}

export default LimitedTime;
const style = {
  main: {
    width: "100%",
    height: "100%",
    position: "relative",
    overflowX: "hidden",
  },
  container: {
    maxWidth: { lg: "1400px" },
    paddingY: "40px",
  },
  box: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
  },
  heading: {
    fontSize: { sm: "40px", xs: "28px" },
    fontWeight: 800,
    opacity: 0.8,
    textAlign: "center",
    width: "100%",
  },
};
