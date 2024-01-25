import React from "react";
import Message from "../message/Message";
const Msg = ({ messages, user_id }) => {
  return (
    <div>
      {messages.map((message, i) => (
        <Message key={message._id} message={message} current_uid={user_id} />
      ))}
    </div>
  );
};

export default Msg;
