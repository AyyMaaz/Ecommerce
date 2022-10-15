
import './App.css';
import Home from './components/Home';
import SignUp from './components/SignUp';
import Login from './components/Login';
import Navbar from './components/Navbar';
import  AddProducts from './components/AddProduct';
import {auth,fs} from './config/config'
import React,{useState, useEffect} from 'react'
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import { Cart } from './components/Cart';

function App() {
   // getting current user function
   function GetCurrentUser(){
    const [user, setUser]=useState(null);
    useEffect(()=>{
        auth.onAuthStateChanged(user=>{
            if(user){
                fs.collection('users').doc(user.uid).get().then(snapshot=>{
                    setUser(snapshot.data().FullName);
                })
            }
            else{
                setUser(null);
            }
        })
    },[])
    return user;
}

const user = GetCurrentUser();
// console.log(user);

  return (
    <div className="App">
    <Router>
    <Navbar user={user}/>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/signup' element={<SignUp/>}></Route>
        <Route path='/login' element={<Login/>}></Route>
        <Route path='/addproduct' element={<AddProducts/>}></Route>
        <Route path='/cart' element={<Cart user={user}/>}></Route>
      </Routes>
    </Router>
    
    
    </div>
  );
}

export default App;
