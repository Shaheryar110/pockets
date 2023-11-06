import { Box, Container, Grid, Typography } from "@mui/material";
import Image from "next/image";
import React from "react";
import { Poppins } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

export default function Benefits() {
  const data = [
    {
      img: "/download.webp",
      heading: "Instant Download",
      para: "your purchase is ready for download right after payment.",
    },
    {
      img: "/support.webp",
      heading: "24/7 Support",
      para: "Whenever you need us, we’re here to assist..",
    },
    {
      img: "/secure.webp",
      heading: "100% Secure Checkout",
      para: "Your payment is safe and secure, from start to finish.",
    },
  ];
  return (
    <Box sx={style.main}>
      <Container sx={style.container}>
        <Grid container rowSpacing={8}>
          {data.map((data, index) => {
            return (
              <>
                <Grid item md={4}>
                  <Box
                    sx={{
                      width: "100%",
                      display: "flex",
                      flexDirection: "row",
                      gap: "10px",
                      alignItems: "center",
                    }}
                  >
                    <Image width={90} height={90} alt="oops" src={data.img} />
                    <Box>
                      <Typography
                        className={poppins.className}
                        sx={{ fontWeight: 700, color: "#182352" }}
                      >
                        {data.heading}
                      </Typography>
                      <Typography
                        className={poppins.className}
                        sx={{ opacity: 0.7, color: "#182352" }}
                      >
                        {data.para}
                      </Typography>
                    </Box>
                  </Box>
                </Grid>
              </>
            );
          })}
        </Grid>
      </Container>
    </Box>
  );
}
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
};
