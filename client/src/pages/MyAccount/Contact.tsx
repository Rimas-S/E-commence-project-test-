import React from "react";
import HeadsetMicIcon from "@mui/icons-material/HeadsetMic";
import ChatIcon from "@mui/icons-material/Chat";
import { Button } from "@mui/material";

export const Contact = () => {
  return (
    <>
      <p>Our working hours:</p>
      <p>Mon-Fri: 07:00-21:00</p>
      <p>Sat-Sun: 08:00-21:00</p>
      <div className="grid1gap1">
        <Button color="secondary" variant="outlined" startIcon={<ChatIcon />}>
          Start chat
        </Button>
        <Button
          color="secondary"
          variant="outlined"
          startIcon={<HeadsetMicIcon />}
        >
          Call
        </Button>
      </div>
    </>
  );
};
