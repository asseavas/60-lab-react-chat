import MessageForm from './components/MessageForm/MessageForm';
import Messages from './components/Messages/Messages';
import './App.css';

const App = () => (
  <>
    <div className="container-fluid">
      <MessageForm />
      <Messages />
    </div>
  </>
);

export default App;
