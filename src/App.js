import './App.css';
import Body from './components/body/Body';
import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import TopBar from './components/topBar/TopBar';
// check from here product and sortby element

function App() {
  return (
    <div className="App">
      <TopBar/>
      <div className='header-body-footer-container'>
       <Header/> 
       <Body/>
      </div>

      <Footer/>

      
    </div>
  );
}

export default App;
