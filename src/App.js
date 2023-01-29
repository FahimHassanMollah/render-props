import './App.css';
import ClickCounter from './components/ClickCounter';
import Counter from './components/Counter';
import User from './components/User';

function App() {
  return (
    <>
      <User render={(isLoggedIn)=> isLoggedIn ? 'fahim' : 'guest customer'}/>
      <Counter render={(counter,clickCounter) => <ClickCounter counter={counter} clickCounter={clickCounter}/>}/>
    </>
  );
}

export default App;
