import React, { forwardRef } from "react";
import "./Message.css";
import { Card, CardContent, Typography } from "@mui/material";

const Message = forwardRef(({ username, message }, ref) => {
  const isUser = username === message.username;

  return (
    <div ref={ref} className={(isUser && `user_message`) || `message`}>
      {/* <p>{message.username === "" ? `Unknown User` : message.username}</p> */}
      {/* <p>{message.username}</p> */}
      <p>
        {message.username === ""
          ? `Unknown User`
          : (isUser && `You`) || message.username}
      </p>
      <Card className="message_card">
        <CardContent>
          <Typography>{message.message}</Typography>
        </CardContent>
      </Card>
    </div>
  );
});

export default Message;
