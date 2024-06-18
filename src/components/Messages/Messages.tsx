import React from 'react';
import MessageItem from './MessageItem';
import {Message} from '../../types';

interface Props {
  messages: Message[];
}

const Messages: React.FC<Props> = ({messages}) => {
  return (
    <>
      {messages.slice(-15).reverse().map((message) => (
        <MessageItem key={message._id} message={message} />
      ))}
    </>
  );
};

export default Messages;