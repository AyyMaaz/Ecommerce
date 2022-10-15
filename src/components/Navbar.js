import React from 'react'
import {Link} from 'react-router-dom'
import logo from '../images/amazon.png'
import {auth} from '../config/config'
import {BsFillArchiveFill} from "react-icons/bs";

 const Navbar = ({user}) => {



    const handleLogout=()=>{
        auth.signOut().then(()=>{
      console.log('signedout')
        })
    }

    return (
        <div className='navbar'>
            <div className='leftside'>
                <div className='logo'>
                    <img  src={logo} alt="logo"/>
                </div>
             
            </div>
            
            <div className='rightside'>
            <div><Link className='navlink' to="/">Home</Link></div>


                {!user&&<>
                    <div><Link className='navlink' to="signup">SIGN UP</Link></div>
                    <div><Link className='navlink' to="login">LOGIN</Link></div>
                </>} 

                {user&&<>
                    <div><Link className='navlink' to="/cart">My cart</Link></div>
                    <div><Link className='navlink' to="/addproduct">Add Product</Link></div>
                    <div><Link className='navlink' to="/">{user}</Link></div>
                    <div className='cart-menu-btn'>
                        <Link className='navlink' to="/cart">
                        <BsFillArchiveFill size={20}/>
                        
                        </Link>
                        {/* <span className='cart-indicator'>{totalQty}</span> */}
                    </div>
                    <div className='btn btn-warning btn-md text-black font-bold'
                    onClick={handleLogout}>LOGOUT</div>
                </>}                     
                                
            </div>
        </div>

    )
}
export default Navbar