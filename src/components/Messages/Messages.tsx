import React from 'react';
import MessageItem from './MessageItem';
import {Message} from '../../types';

interface Props {
  messages: Message[];
}

const Messages: React.FC<Props> = ({messages}) => {
  return (
    <div className="mt-5">
      {messages.slice(-15).reverse().map((message) => (
        <MessageItem key={message._id} message={message} />
      ))}
    </div>
  );
};

export default Messages;