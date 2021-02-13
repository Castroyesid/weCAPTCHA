import logo from './logo.svg';
import './App.css';
import ShowImage from './Components/image-scroll/image-scroll';
import NameForm from './Components/image-scroll/form/form'
import Header from './Components/Header/Header'

function App() {
  return (
    <div className="App">
      
      <div className="buttAlign">
        <Header />
        <ShowImage />
      </div>
    </div>
  );
}

export default App;
