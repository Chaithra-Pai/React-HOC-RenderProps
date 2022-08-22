import logo from './logo.svg';
import './App.css';
import ClickCounter from './components/ClickCounter';
import HoverCounter from './components/HoverCounter';
import ClickCounterTwo from './components/ClickCounterTwo';
import HoverCounterTwo from './components/HoverCounterTwo';
import User from './components/User';
import Counter from './components/Counter';

function App() {
  return (
    <div className="App">
      <h2>HOC</h2>
      <ClickCounter name='Chaithra'/>
      <HoverCounter />
      <h2>Render Props</h2>
      <User render={ (isLoggedIn)=> isLoggedIn ? <h3>Chaithra</h3> : <h3>Guest</h3> }/>
      <Counter render={(counter,inrementCounter) => <ClickCounterTwo counter={counter} inrementCounter={inrementCounter}/>}/>
      <Counter render={(counter,inrementCounter) => <HoverCounterTwo counter={counter} inrementCounter={inrementCounter}/>}/>
    </div>
  );
}

export default App;
