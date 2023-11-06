import { Box, Container, Typography } from "@mui/material";
import React from "react";
import { Poppins } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

function Journey() {
  return (
    <Box sx={style.main}>
      <Container sx={style.container}>
        <Typography
          sx={{
            color: "white",
            fontWeight: 700,
            fontSize: { md: "2.5rem", xs: "1.5rem" },
            textAlign: "center",
          }}
          className={poppins.className}
        >
          Savor a Stress-Free Financial Adventure
        </Typography>
        <Typography sx={{ textAlign: "center", color: "white" }}>
          Gain confidence and clarity as you effortlessly manage your finances.
          Take charge and improve your financial outlook with Expenzify; no
          complicated techniques are needed.
        </Typography>
      </Container>
    </Box>
  );
}

export default Journey;
const style = {
  main: {
    width: "100%",
    height: "100%",
    position: "relative",
    overflowX: "hidden",
    backgroundColor: "#3C4777",
  },
  container: {
    maxWidth: { lg: "1400px" },
    paddingY: "40px",
  },
};
