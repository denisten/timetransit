import React from "react";
import { Menu, MenuItem } from "@mui/material";
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
    <>
      <a onClick={handleClick}>Услуги</a>
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
              const _link = linkMap[link];
              console.log({ _link, link });
              navigate(linkMap[link]);
              handleClose();
            }}
          >
            {link}
          </MenuItem>
        ))}
      </Menu>
    </>
  );
};
