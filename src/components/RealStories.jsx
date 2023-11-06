import { Box, Container, Grid, Rating, Typography } from "@mui/material";
import React from "react";
import { Poppins } from "next/font/google";
import StarIcon from "@mui/icons-material/Star";
import Image from "next/image";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

function RealStories() {
  const people = [
    {
      img: "/women.webp",
      qoute:
        "Money was a constant source of stress for me, but Expenzify changed that. I've saved more money in the last few months than I did the entire previous year! This tool is simple to use and functions similarly to a financial friend.",
      name: "LISA R.,DENVER",
    },
    {
      img: "/men.webp",
      qoute:
        "I've used a number of budgeting apps, but until I used Expenzify, nothing worked. It's easy to use, intuitive, and it reduced my debt. I can actually plan a weekend trip now without having to worry about money.",
      name: "MARK S., AUSTIN",
    },
    {
      img: "/w1.webp",
      qoute:
        "The use of Pocket Ai has changed the game. In the first few months, I was able to save up enough money for the road trip of my dreams. It's a ticket to a stress-free financial life, not just a spreadsheet.",
      name: "EMILY H., SAN FRANCISCO",
    },
  ];
  return (
    <Box sx={style.main}>
      <Container sx={style.container}>
        <Typography sx={style.heading} className={poppins.className}>
          On Average, Users Save
          <span style={{ color: "#4FBF9A" }}> $550 </span>
          in 2 Months and
          <span style={{ color: "#4FBF9A" }}> $5500 </span>
          in the First Year
        </Typography>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Box sx={style.ratingBox}>
            <Rating
              value={0}
              precision={0.5}
              emptyIcon={<StarIcon fontSize="inherit" />}
            />
            <Typography sx={{ opacity: 0.7, fontWeight: 600 }}>
              4.8/5 rating - 5,209 reviews
            </Typography>
          </Box>
          <Typography
            sx={{
              opacity: 0.7,
              fontWeight: 700,
              fontSize: "24px",
              textAlign: "center",
            }}
            className={poppins.className}
          >
            Real Stories, Real Success
          </Typography>
          <Grid
            container
            columnSpacing={4}
            rowSpacing={9}
            sx={{
              display: "flex",
              justifyContent: { xl: "center" },
              paddingTop: "100px",
            }}
          >
            {people.map((data, index) => {
              return (
                <>
                  <Grid item md={4} xl={3} xs={12}>
                    <Box
                      sx={{
                        position: "relative",
                        width: "100%",
                        height: "100%",
                        padding: "2rem",
                        border: "2px solid black",
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                      }}
                    >
                      <Image
                        src={data.img}
                        alt="oops"
                        style={{
                          borderRadius: "100%",
                          position: "absolute",
                          top: -60,

                          left: "auto",
                          right: "auto",
                        }}
                        width={150}
                        height={150}
                      />
                      <Box sx={{ paddingTop: "4rem", paddingBottom: "1rem" }}>
                        <Rating
                          value={0}
                          precision={0.5}
                          emptyIcon={<StarIcon fontSize="inherit" />}
                        />
                        {/* <Typography sx={{ opacity: 0.7, fontWeight: 600 }}>
                    5/5 rating
                  </Typography> */}
                      </Box>
                      <Typography
                        sx={{
                          fontSize: "18px",
                          fontWeight: 600,
                          paddingY: "15px",
                          textAlign: "center",
                        }}
                      >
                        {data.qoute}
                      </Typography>
                      <Typography
                        sx={{
                          fontSize: "22px",
                          fontWeight: 700,
                          paddingY: "15px",
                        }}
                      >
                        {data.name}
                      </Typography>
                    </Box>
                  </Grid>
                </>
              );
            })}
          </Grid>
        </Box>
      </Container>
    </Box>
  );
}

export default RealStories;
const style = {
  ratingBox: {
    display: "flex",
    flexDirection: "row",
    gap: "2px",
    alignItems: "center",
    paddingTop: "30px",
  },
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
  heading: {
    fontSize: "30px",
    fontWeight: 800,
    opacity: 0.8,
    textAlign: "center",
    width: "100%",
  },
};
