import './App.css';
import Header from './components/header/Header';
import AboutMe from './components/aboutMe/AboutMe';

function App() {
  return (
    <div className="App">
      <Header
        style={{width:'100%'}}
      />
      <AboutMe/>
    </div>
  );
}

export default App;
