import { Box, Button, Container, Grid, Typography } from "@mui/material";
import Image from "next/image";
import React from "react";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import { Poppins } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});
function Product() {
  const list = [
    {
      simple: "Expense Tracking:",
      span: " Easily track expenses.",
    },
    {
      simple: "Budget Management:",
      span: "Master your budget.",
    },
    {
      simple: "Income Analysis:",
      span: "Understand your income. ",
    },
    {
      simple: "Savings Goals:",
      span: "Reach your savings goals.",
    },
    {
      simple: "Debt Reduction:",
      span: "Crush your debts.",
    },
    {
      simple: "Dashboard Insights:",
      span: "Get annual and monthly insights.",
    },
  ];
  return (
    <Box sx={style.main}>
      <Container sx={style.container}>
        <Grid container>
          <Grid item md={6} xs={12}>
            <Box
              sx={{
                width: "100%",
                height: "100%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Image
                src={"/product.webp"}
                style={{ minHeight: "100%", minWidth: "100%" }}
                width={472}
                height={581}
              />
            </Box>
          </Grid>
          <Grid item md={6}>
            <Box sx={{ padding: "1rem", width: "100%", height: "100%" }}>
              <Typography
                sx={{ fontSize: "30px", fontWeight: 700, opacity: 0.9 }}
                className={poppins.className}
              >
                1# Ai-Driven Personal Finance Tracker 🤖
              </Typography>
              {list.map((data, index) => {
                return (
                  <>
                    <Box
                      key={index}
                      sx={{
                        display: "flex",
                        flexDirection: "row",
                        alignItems: "center",
                        paddingY: "5px",
                        gap: "12px",
                      }}
                    >
                      <CheckCircleIcon sx={{ color: "#4FBF9A" }} />
                      <Typography
                        className={poppins.className}
                        sx={{ fontWeight: 700 }}
                      >
                        {data.simple}
                        <span style={{ fontWeight: 500 }}>{data.span}</span>
                      </Typography>
                    </Box>
                  </>
                );
              })}
              <Box>
                <Image src={"/jugar.webp"} width={300} height={250} />
              </Box>
              <Button sx={style.btn}>Get Lifetime Deal !</Button>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

export default Product;
const style = {
  main: {
    width: "100%",
    height: "100%",
    position: "relative",
    backgroundColor: "#F4F5F6",
  },
  container: {
    maxWidth: { lg: "1300px" },
    paddingY: "30px",
  },
  btn: {
    marginY: "12px",
    backgroundColor: "#182459",
    color: "white",
    fontWeight: 700,
    fontSize: "18px",
    paddingY: "10px",
    width: { md: "50%", xs: "100%" },
    ":hover": {
      backgroundColor: "grey",
    },
  },
  benefitsbox: {
    width: "100%",
    display: "flex",
    flexDirection: "row",
    gap: "1rem",
    alignItems: "center",
  },
};
