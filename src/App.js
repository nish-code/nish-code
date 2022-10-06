import logo from './logo.svg';
import './App.css';
import Header from './Header';
import Footer from './Footer';
import Sparrow from './Sparrow';
function App() {
  return (
    <Sparrow >
    <div className="App" >
      

      
      <p> 
        <Header />
      </p>
      
      <header className="App-header">
        <p>
          Portfolio Under Construction
        </p>
        <p>
          <a 
          className="App-link" 
          href='https://github.com/nishanthprabhu2' 
          rel="noopener noreferrer">
          Github
          </a>
        </p>
        <p>
          <a 
          className="App-link" 
          href='https://www.linkedin.com/in/nishanth-prabhu26/' 
          rel="noopener noreferrer">
          LinkedIn
          </a>
        </p>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          <Footer />
        </p>
        
      </header>
      
    </div>
    </Sparrow>
    
  );
}

export default App;
