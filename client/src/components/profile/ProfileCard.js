import React from "react";
import {
  Button,
  Card,
  makeStyles,
  Typography,
  Divider,
} from "@material-ui/core";
import { useEffect } from "react";

const useStyles = makeStyles({
  profileBox: {
    padding: "20px",
    borderStyle: "dotted",
    borderColor: "#13C7C2",
    background: "#D8ECEC",
  },
  profileName: {
    fontSize: 40,
    fontFamily: "Comfortaa",
    fontWeight: "bold",
  },
  profileBody: {
    fontSize: 20,
    fontFamily: "Comfortaa",
    fontWeight: "normal",
  },
  accountDetails: {
    fontSize: 10,
    fontFamily: "Comfortaa",
    fontWeight: "normal",
    color: "#A6A6A6",
    marginBottom: 10,
  },
  divider: {
    width: "100%",
    padding: 1,
    margin: "10px",
    background: "#AFE1DB",
  },
});

function ProfileCard(props) {
  // console.log(props.data);

  // pull user data from backend instead
  const user = props.data;
  const classes = useStyles();

  return (
    <Card className={classes.profileBox}>
      <Typography className={classes.profileName}>{user.username}</Typography>
      <Divider className={classes.divider} />
      <Typography className={classes.profileBody}>
        You have {user.hoot_count} hoots and {user.reply_count} hootbacks.
        <br />
        Your current level: {"noob"}
      </Typography>
      <Divider className={classes.divider} />
      <Typography className={classes.accountDetails}>
        Account Details: <br />
        Username: {user.username}
        <br />
        Email: {user.email}
        <br />
        {/* Password: {user["password"].replace(/./g, "*")} */}
      </Typography>
      <Button variant="outlined" size="small">
        Edit
      </Button>
    </Card>
  );
}

export default ProfileCard;
