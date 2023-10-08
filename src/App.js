import './App.css';
import Header from './Components/Header';
import Main from './Components/Main';
import Main_2 from './Components/Main_2';
import Footer from './Components/Footer';
import Vehicle from './Vehicle/Vehicle';
import { BrowserRouter as Router, Routes ,Route  } from 'react-router-dom';
function App() {
  return (
    <div>
    
      <Header />
      <Main />
      <Main_2 />
       <Footer /> 

      
    </div>
   
  );
}

export default App;
