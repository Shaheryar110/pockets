import { Box, Container, Grid } from "@mui/material";
import Image from "next/image";
import React from "react";

function Companies() {
  return (
    <Box sx={style.main}>
      <Container sx={style.container}>
        <Grid container justifyContent={"center"} rowSpacing={5}>
          <Grid
            item
            lg={3}
            md={6}
            xs={12}
            display={"flex"}
            justifyContent={"center"}
          >
            <Image src={"/bloom.png"} alt="company" width={120} height={33} />
          </Grid>
          <Grid
            item
            lg={3}
            md={6}
            xs={12}
            display={"flex"}
            justifyContent={"center"}
          >
            <Image src={"/forbes.png"} alt="company" width={120} height={33} />
          </Grid>
          <Grid
            item
            lg={3}
            md={6}
            xs={12}
            display={"flex"}
            justifyContent={"center"}
          >
            <Image src={"/time.png"} alt="company" width={120} height={33} />
          </Grid>
          <Grid
            item
            lg={3}
            md={6}
            xs={12}
            display={"flex"}
            justifyContent={"center"}
          >
            <Image src={"/buzz.png"} alt="company" width={120} height={33} />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

export default Companies;
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
};
