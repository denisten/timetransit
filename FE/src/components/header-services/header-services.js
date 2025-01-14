import React, { useState } from "react";
import { Menu, MenuItem, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

const linkMap = {
  Авиа: "/avia",
  Авто: "/truck",
  ЖД: "/train",
  Море: "/sea",
};

const headerSubLinks = ["Авиа", "Авто", "ЖД", "Море"];

export const HeaderServices = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const navigate = useNavigate();
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = (e) => {
    setAnchorEl(null);
  };

  return (
    <div>
      <Button
        id="basic-button"
        aria-controls={open ? "basic-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
        sx={{
          fontSize: 13,
          color: "#fff",
          cursor: "pointer",
          "&:hover": {
            scale: 1.1,
          },
        }}
      >
        Услуги
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
      >
        {headerSubLinks.map((link) => (
          <MenuItem
            key={link}
            onClick={() => {
              navigate(linkMap[link]);
              handleClose();
            }}
          >
            {link}
          </MenuItem>
        ))}
      </Menu>
    </div>
  );
};
