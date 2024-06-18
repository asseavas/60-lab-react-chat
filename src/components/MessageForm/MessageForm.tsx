import React, {useState} from 'react';

interface Props {
  onSendMessage: (message: string, author: string) => void;
}

const MessageForm: React.FC<Props> = ({onSendMessage}) => {
  const [author, setAuthor] = useState('');
  const [message, setMessage] = useState('');

  const onFormSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    if (message && author) {
      onSendMessage(message, author);

      setAuthor('');
      setMessage('');
    }
  };

  return (
    <form className="row g-3 d-flex text-start p-4 bg-body-secondary rounded" onSubmit={onFormSubmit}>
      <h4 className="mt-2">Chat</h4>
      <div className="col-3">
        <label htmlFor="author" className="form-label">Author</label>
        <input
          type="text"
          name="author"
          id="author"
          className="form-control"
          value={author}
          onChange={(event) => setAuthor(event.target.value)}
        />
      </div>
      <div className="col-7">
        <label htmlFor="message" className="form-label">Message</label>
        <input
          type="text"
          name="message"
          id="message"
          className="form-control"
          value={message}
          onChange={(event) => setMessage(event.target.value)}
        />
      </div>
      <div className="col-2 d-flex">
        <button type="submit" className="btn btn-primary w-100 mt-auto">Send</button>
      </div>
    </form>
  );
};

export default MessageForm;