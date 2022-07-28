import Head from "next/head";
import { makeStyles } from "@mui/styles";
import { Typography, Button } from "@mui/material";

const useStyles = makeStyles((theme) => ({
  red: {
    color: theme.palette.primary.main,
  },
  purple: {
    color: theme.palette.secondary.main,
  },
}));

export default function Home() {
  const classes = useStyles();
  return (
    <div className="pt-6 space-y-4">
      <Typography>About</Typography>
    </div>
  );
}
