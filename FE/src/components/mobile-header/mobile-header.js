import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { headerItemsRus, headerTitles } from "../../constants";

export const MobileMenu = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const toggleDrawer = (open) => () => {
    setIsDrawerOpen(open);
  };

  return (
    <>
      <IconButton
        edge="start"
        color="inherit"
        aria-label="menu"
        onClick={toggleDrawer(true)}
      >
        <MenuIcon />
      </IconButton>

      {/* Мобильное меню */}
      <Drawer anchor="left" open={isDrawerOpen} onClose={toggleDrawer(false)}>
        <div
          style={{
            width: 250,
            display: "flex",
            flexDirection: "column",
          }}
        >
          {/* Закрыть меню */}
          <IconButton
            onClick={toggleDrawer(false)}
            style={{ alignSelf: "flex-end" }}
          >
            <CloseIcon />
          </IconButton>

          {/* Список навигации */}
          <List>
            {headerItemsRus.map((text, index) => (
              <ListItem button key={index} onClick={toggleDrawer(false)}>
                <ListItemText
                  primary={text.toUpperCase()}
                  sx={{ color: "#73080C", fontWeight: 700 }}
                />
              </ListItem>
            ))}
          </List>
        </div>
      </Drawer>
    </>
  );
};
