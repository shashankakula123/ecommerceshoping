
import './App.css';
import { useState} from 'react';
import { useEffect } from 'react';
import Navbar from './Components/Navbar/Navbar';
import ProductsPage from './Components/ProductsPage';
import Axios from "axios";
import AddProduct from './Components/AddProduct';
import { Routes, Route} from 'react-router-dom';
function App() {

  const [list,setList]=useState([]);
  

    useEffect(()=>{
      const getProducts=async()=>{
        Axios.get("https://my-json-server.typicode.com/shashankakula123/ecommerce-app/products").then(res=>{console.log(res.data,"lists");
        setList(res.data);
    }
        );
          }
      console.log("Im innnnnn");
      getProducts()},[]);
  return (
    <div className="App">
    
      <Navbar count={list.length} />
<Routes>
        <Route  path='/' element={<ProductsPage list={list} setList={setList} />} />
        <Route path='/productspage' element={<ProductsPage  list={list} setList={setList} />} />
        <Route  path='/addproduct' element={<AddProduct/>} />
</Routes>
      {/* <div className='sectiontwo' style={{backgroundColor:"#E5E5E5"}}>
      <ProductsPage list={list} setList={setList} />
     

      </div> */}
    </div>
  );
}

export default App;
