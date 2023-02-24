import logo from './logo.svg';
import './App.css';
import Header from './components/nav';
import HeroImg from './components/hero';
import ColumnLayout from './components/coulmlayout';

function App() {
  return (
    <div className="App">
      <Header />
      <div className='inner'>
        <HeroImg />
        <ColumnLayout />
      </div>
    </div>
  );
}

export default App;
