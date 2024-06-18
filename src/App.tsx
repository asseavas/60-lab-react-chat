import { useEffect, useState } from 'react';
import MessageForm from './components/MessageForm/MessageForm';
import Messages from './components/Messages/Messages';
import { Message } from './types';
import './App.css';

const App = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [lastMessageDate, setLastMessageDate] = useState<string | null>(null);

  const request = async () => {
    let url = 'http://146.185.154.90:8000/messages';
    if (lastMessageDate) {
      url += `?datetime=${lastMessageDate}`;
    }

    try {
      const response = await fetch(url);

      if (response.ok) {
        const newMessages: Message[] = await response.json();

        if (newMessages.length > 0) {
          setMessages((prevState) => [
            ...prevState,
            ...newMessages.filter(
              (newMessage) =>
                !prevState.some((message) => message._id === newMessage._id)
            ),
          ]);
          setLastMessageDate(newMessages[newMessages.length - 1].datetime);
        }
      }
    } catch (error) {
      console.error('Network error:', error);
    }
  };

  useEffect(() => {
    const intervalId = setInterval(request, 3000);
    return () => clearInterval(intervalId);
  }, [lastMessageDate]);

  const sendMessage = async (message: string, author: string) => {
    const data = new URLSearchParams();
    data.set('message', message);
    data.set('author', author);

    try {
      await fetch('http://146.185.154.90:8000/messages', {
        method: 'POST',
        body: data,
      });

      await request();
    } catch (error) {
      console.error('Error sending post:', error);
    }
  };

  return (
    <div className="container-fluid">
      <MessageForm onSendMessage={sendMessage} />
      <Messages messages={messages} />
    </div>
  );
};

export default App;
