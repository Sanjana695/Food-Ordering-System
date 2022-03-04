import React,{useState,useEffect} from 'react';
import { Route, Routes } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import './Style/style.css';
import NavBar from './Components/support/NavBar';
import Menu from './Components/support/Menu';
import Home from './Components/support/Home';
import Login from './Components/support/Login';
import Registration from './Components/support/Registration';
import Cart from './Components/support/Cart';
import Notfound from './Components/support/Notfound';
import Dashboard from './Components/support/Dashboard';
import PostMenu from './Components/support/PostMenu';

function App() {
  const [show, setShow] = useState(true);
  const [cart, setCart] = useState([]);
  const count=0;

  function handleClick(item) {
     console.log(item);
    if (cart.indexOf(item) !== -1) return;
    setCart([...cart, item]);
  console.log(cart)
  }

  function handleChange(item, d) {
    const ind = cart.indexOf(item);
    
  //setCart({...cart )
   const arr = cart;
   if(isNaN(arr[ind].amount))
   {
    arr[ind].amount = d;
   }
   else
   arr[ind].amount += d;
   console.log(arr[ind].amount)
    if (arr[ind].amount === 0) arr[ind].amount = 1;
    setCart([...arr]);
    console.log(cart)
    // console.log("item: " ,item)
    console.log("inc " ,d)
     console.log("index", ind)
    // console.log("arr: ", arr[ind].amount);
  }

  useEffect(() => {
    // console.log("cart chnage")
  }, [cart])
  return (
    <>
      <NavBar setShow={setShow} size={cart.length} />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/menu' element={<Menu handleClick={handleClick} />} />
        <Route path='/cart' element={<Cart cart={cart} setCart={setCart} handleChange={handleChange} />} />
        <Route path='/login' element={<Login />} />
        <Route path='/registration' element={<Registration />} />
        <Route path='/dashboard' element={<Dashboard />} />
        <Route path='/postMenu' element={<PostMenu />} />
        <Route path='*' element={<Notfound />} />
      </Routes>

     
    </>
  );
}
export default App;

