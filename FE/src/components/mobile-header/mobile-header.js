import React, { useState } from "react";
import {
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { headerItems, headerTitles, scrollOptions } from "../../constants";
import { scroller } from "react-scroll";

export const MobileMenu = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const toggleDrawer = (open) => () => {
    setIsDrawerOpen(open);
  };

  const handleLinkClick = (name) => {
    return () => {
      scroller.scrollTo(name, scrollOptions);
    };
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
            {headerItems.map((item) => (
              <ListItem button key={item} onClick={toggleDrawer(false)}>
                <ListItemText
                  onClick={handleLinkClick(item)}
                  primary={headerTitles[item].toUpperCase()}
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
