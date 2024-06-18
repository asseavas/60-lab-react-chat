import React from 'react';
import {Message} from '../../types';

interface Props {
  message: Message;
}

const MessageItem: React.FC<Props> = ({message}) => {
  const formattedDate = new Date(message.datetime).toLocaleString();

  return (
    <div className="border border-3 rounded p-2 my-3 text-start">
      <p><strong>{message.author}</strong> - {formattedDate}</p>
      <p>{message.message}</p>
    </div>
  );
};

export default MessageItem;