import React from 'react';
import {Message} from '../../types';

interface Props {
  message: Message;
}

const MessageItem: React.FC<Props> = ({message}) => {
  const formattedDate = new Date(message.datetime).toLocaleString();

  return (
    <div className="text-start p-3 bg-body-secondary rounded my-3">
      <p><strong>{message.author}</strong> - {formattedDate}</p>
      <p className="mb-0">{message.message}</p>
    </div>
  );
};

export default MessageItem;