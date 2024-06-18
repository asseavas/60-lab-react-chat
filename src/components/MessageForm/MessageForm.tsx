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
    <form className="row g-3 d-flex" onSubmit={onFormSubmit}>
      <h5 className="text-start">Chat</h5>
      <div className="col-3 text-start">
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
      <div className="col-8 text-start">
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
      <div className="col-1 d-flex">
        <button type="submit" className="btn btn-primary w-100 mt-auto">Send</button>
      </div>
    </form>
  );
};

export default MessageForm;