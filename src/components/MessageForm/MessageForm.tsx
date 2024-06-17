const MessageForm = () => {
  return (
    <form className="row g-3 d-flex">
      <h5 className="text-start">Send message</h5>
      <div className="col-10 text-start">
        <input
          type="text"
          name="message"
          id="message"
          className="form-control"
        />
      </div>
      <div className="col-2">
        <button type="submit" className="btn btn-primary mb-3 w-100">Send</button>
      </div>
    </form>
  );
};

export default MessageForm;