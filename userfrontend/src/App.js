import './App.css';
import Navbar from './Components/Navbar';
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Home from './Components/Home'
import Cart from './Components/Cart';
import About from './Components/About';
import ProductsDetails from './Components/ProductsDetails';
import UserRegisteration from './Components/UserRegistration';
import UserLogin from './Components/UserLogin';
// import Login from './Components/Login';
// import Contact from './Components/Contact';
// import Order from './Components/Order';
// import Signup from './Components/Signup';
// import About from './Components/About';
// import Cart from './Components/Cart';
// import Category from './Components/category/Category';
// import Products from './Components/Products';
// import AddProducts from './Components/AddProducts';
import { counterContext } from './Context/Context';
import { useState } from 'react';
import Order from './Components/Order';
import ProfilePage from './Components/ProfilePage';

function App() {
 
   const[count,setCount] = useState(0)

  return (
    <div className="App">

<counterContext.Provider value={{count,setCount}}>
  <BrowserRouter>
      <Navbar/>
    <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/cart' element={<Cart/>}></Route>
      <Route path='/about' element={<About/>}></Route>
      <Route path='/productDetails/:id' element={<ProductsDetails/>}></Route>
      <Route path='/userRegistration' element={<UserRegisteration/>}></Route>
      <Route path='/userLogin' element={<UserLogin/>}></Route>
      <Route path='/orders' element={<Order/>}></Route>
      <Route path='/userProfile' element={<ProfilePage/>}></Route>
      {/* <Route path='/login' element={<Login/>}></Route>
      <Route path='/contact' element={<Contact/>}></Route>
      <Route path='/signup' element={<Signup/>}></Route>
      <Route path='/addCategory' element={<Category/>}></Route>
      <Route path='/products' element={<Products/>}></Route>
      <Route path='/addProduct' element={<AddProducts/>}></Route>
      <Route path='/getProduct' element={<Products/>}></Route>
      <Route path='/updateProduct' element={<Products/>}></Route>
      <Route path='/deleteProduct' element={<Products/>}></Route> */}
    </Routes>
  </BrowserRouter>
  </counterContext.Provider>
    
    </div>
  );
}

export default App;
