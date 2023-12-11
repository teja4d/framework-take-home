        import './App.css';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Section from './components/Section';

function App() {

  return (
    <div className="App container mx-auto p-4 font-sans">
      <Navbar brandName='Cottage retreate'/>
      <Section/>
      <Footer/>
    </div>
  ); 
}

export default App;
