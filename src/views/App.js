import logo from './logo.svg';
import './App.scss';
// import Demo from './Example/demo';
import MyComponent from './Example/myComponent';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
        </a>
        {/* <Demo/> */}
        <MyComponent/>
      </header>
    </div>
  );
}

export default App;
