import { useState } from 'react';
import './App.css';
// import Functional from './components/Functional'
import ProductList from './components/products';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <h1>React js </h1>
        {/* <Functional/> */}
        <ProductList name="Ankit" city="ABC"/>
      </div>
    </>
  );
}

export default App;
