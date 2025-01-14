import { Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  headerText: {
    cursor: "pointer",
    fontSize: "30px",
    "&:hover": (prop) => ({
      transform: `scale(${prop.disableScale ? 1 : 1.2}`,
    }),

    "@media (max-width: 768px)": {
      fontSize: "22px",
    },
  },
});

export const HeaderTypography = ({ text, onClick, disableScale = false }) => {
  const classes = useStyles({ disableScale });
  return (
    <Typography className={classes.headerText} onClick={onClick}>
      {text}
    </Typography>
  );
};
