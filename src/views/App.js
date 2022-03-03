import logo from './logo.svg';
import './App.scss';
import MyClassComponents from './example/MyClassComponent';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" /> 

        <MyClassComponents/>
        {/* Uncomment to try */}
        {/* <MyClassComponents></MyClassComponents> */}
 
      </header>
    </div>
  );
}

export default App;
