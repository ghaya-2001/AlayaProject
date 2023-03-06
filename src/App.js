import './App.scss';
import  './sass/global.scss';
import Product from './Components/Product/Product';
import Categories from './Components/Categories/Categories';
import Price from './Components/Price/Price';
import Overview from './Components/Overview/Overview';
import  Activity from './Components/Activity/Activity'
import Logs from './Components/Logs/Logs';
import Leftside from './Components/Leftside/Leftside';

function App() {
  return (
    
    <div className="App">
      <div className='leftside'>
      <Leftside/>
      </div>
      <div className='rightside'>
      <div className='first'>
      <Overview/>
      <Categories/>
      <Product/>
      </div>
      <div className='second'>
      <Activity/>
      <Price/>
      </div>
      <Logs/>



      </div>
      
     
    </div>
  );
}

export default App;
