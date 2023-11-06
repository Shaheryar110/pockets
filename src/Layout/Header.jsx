"use client";
import { Box, Container, Grid, Typography } from "@mui/material";
import Image from "next/image";
import React, { useState } from "react";
import { Poppins } from "next/font/google";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import MenuIcon from "@mui/icons-material/Menu";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

function Header() {
  const [left, setLeft] = useState(false);
  const toggleDrawer = (open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setLeft(open);
  };

  const ListDrawer = () => (
    <Box
      sx={{ width: 250 }}
      role="presentation"
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
    >
      <List>
        {["Home", "Pricing", "About Us", "Contact Us"].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );
  return (
    <>
      <Box sx={style.main}>
        <Container sx={style.container}>
          <Grid container>
            <Grid item md={7} xs={3}>
              <Box sx={style.left}>
                <MenuIcon
                  onClick={toggleDrawer(true)}
                  sx={{ display: { md: "none", xs: "flex" } }}
                />
                <Image alt="oops" src={"/logo.png"} width={160} height={160} />
                <Box sx={style.listBox}>
                  <Typography className={poppins.className} sx={style.listItem}>
                    Home
                  </Typography>
                  <Typography className={poppins.className} sx={style.listItem}>
                    Pricing
                  </Typography>
                  <Typography className={poppins.className} sx={style.listItem}>
                    About
                  </Typography>
                  <Typography className={poppins.className} sx={style.listItem}>
                    Contact
                  </Typography>
                </Box>
              </Box>
            </Grid>
            <Grid item md={5} xs={9}>
              <Box sx={style.iconBox}>
                <Image
                  style={{ cursor: "pointer" }}
                  src={"/search.png"}
                  alt="search"
                  width={24}
                  height={24}
                />
                <Image
                  style={{ cursor: "pointer" }}
                  src={"/bag.png"}
                  alt="bag"
                  width={32}
                  height={32}
                />
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>
      //small screen app bar drawer
      <Drawer open={left} onClose={toggleDrawer(false)}>
        <ListDrawer />
      </Drawer>
    </>
  );
}

export default Header;
const style = {
  main: {
    width: "100%",
    height: "100%",
    position: "fixed",
    top: 0,
    zIndex: 99,
    backgroundColor: "white",
    height: "160px",
  },
  container: {
    maxWidth: { lg: "1300px" },
  },
  left: {
    display: "flex",
    flexDirection: "row",
    alignItems: "Center",
    gap: "1rem",
  },
  listBox: {
    display: { md: "flex", xs: "none" },
    flexDirection: "row",
    gap: "16px",
    alignItems: "Center",
  },
  listItem: {
    fontSize: "18px",
    fontWeight: 600,
    opacity: 0.7,
    borderBottom: "2px solid transparent",
    transition: "all ease-in-out 0.3s",
    cursor: "pointer",
    ":hover": {
      borderBottom: "2px solid black",
      opacity: 1,
    },
  },
  iconBox: {
    width: "100%",
    height: "100%",
    display: "flex",
    flexDirection: "row",
    gap: "19px",
    alignItems: "Center",
    justifyContent: "end",
  },
};
