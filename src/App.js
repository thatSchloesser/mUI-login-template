import './App.css';
import Login from './Login';

function App(props) {
  return (
    <div className='App'>
      <Login ui={props.ui} />
    </div>
  );
}

export default App;
