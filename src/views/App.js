import logo from './logo.svg';
import './App.scss';
import MyClassComponents from './example/MyClassComponent';
import ChildComponent from './example/ChildComponent';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" /> 

        <MyClassComponents/>
        {/* Uncomment to try */}
        {/* <MyClassComponents></MyClassComponents> */}

        <ChildComponent nameCustomer="First Component"/>
        <ChildComponent nameCustomer="Second Component"/>
        <ChildComponent nameCustomer="Third Component"/>

        
      </header>
    </div>
  );
}

export default App;
