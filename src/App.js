import './App.scss';
import  './sass/global.scss';
import Product from './Components/Product/Product';
import Categories from './Components/Categories/Categories';
import Test from './Components/Test/Test';

function App() {
  return (
    <div className="App">
      <Product/>
      <Categories/>
      <Test/>
    </div>
  );
}

export default App;
