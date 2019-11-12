import React from 'react';
import logo from './logo.svg';
import './App.css';


/* const AppContainer = styled.div`
 text-align: center;
`;

const AppHeader = styled.header`
 background-color: #222;
 height: 150px;
 padding: 20px;
 color: white;
`;

const AppTitle = styled.h1`
   font-size: 1.5em;
`;

const AppLogo = styled.img`
 animation: App-logo-spin infinite 20s linear;
 height: 80px;
 @keyframes App-logo-spin {
   from { transform: rotate(0deg); }
   to { transform: rotate(360deg); }
 }
`;

const AppIntro = styled.p`
 font-size: large;
`;
 */



function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

/* class App extends Component {
  render() {
    return (
      <AppContainer>
        <AppHeader>
          <AppLogo src={logo} alt="logo" />
          <AppTitle>Welcome to React</AppTitle>
        </AppHeader>
        <AppIntro>
          To get started, edit <code>src/App.js</code> and save to reload.
        </AppIntro>
      </AppContainer>
    );
  }
 } */



export default App;
