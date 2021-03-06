import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Avatar from "@material-ui/core/Avatar";

const useStyles = makeStyles((theme) => ({
   root: {
      display: "flex",
      "& > *": {
         margin: theme.spacing(1),
      },
      flexDirection: "row",
   },
   large: {
      width: "130px",
      height: "130px",
      marginRight: "70px",
   },
}));

export default function AvatarPerfil({ url }) {
   const classes = useStyles();

   return (
      <div className={classes.root}>
         <Avatar alt="Remy Sharp" src={url} className={classes.large} />
      </div>
   );
}
