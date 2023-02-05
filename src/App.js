import ContactList from './components/ContactList';
import './App.css';

function App(props) {
  return (
    <div className="App">
      <h2>App output ok</h2> 
      <ContactList contacts = {props.contacts}/>
    </div>
  );
}

export default App;
