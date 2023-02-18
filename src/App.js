import './App.scss';
import  './sass/global.scss';
import Product from './Components/Product/Product';
import Categories from './Components/Categories/Categories';
import Price from './Components/Price/Price';
import Overview from './Components/Overview/Overview';

function App() {
  return (
    <div className="App">
      <div className='first'>
      <Overview/>
      <Categories/>
      <Product/>
      </div>
     


      <div className='second'>
      <Price/>

      </div>
     
    </div>
  );
}

export default App;
