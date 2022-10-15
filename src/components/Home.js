import React,{useState, useEffect} from 'react'
import { Products } from './Products'
import {auth,fs} from '../config/config'
import Slider from './Slider';
import ReactPaginate from 'react-paginate'


 const Home = (props) => {
    const [products, setProducts]=useState([]);
    console.log(products)
    const [inp,setInp]=useState()

    // gettin current user uid
    function GetUserUid(){
        const [uid, setUid]=useState(null);
        useEffect(()=>{
            auth.onAuthStateChanged(user=>{
                if(user){
                    setUid(user.uid);
                }
            })
        },[])
        return uid;
    }

    const uid = GetUserUid();


    
    // console.log(user);
    
    // state of products
 

    // getting products function
    const getProducts = async ()=>{
        const products = await fs.collection('Products').get();
        const productsArray = [];
        for (var snap of products.docs){
            var data = snap.data();
            data.ID = snap.id;
            productsArray.push({
                ...data
            })
            if(productsArray.length === products.docs.length){
                setProducts(productsArray);
            }
        }
    }

    useEffect(()=>{
        getProducts();
    },[])
    
    let Product;
    const addToCart = (product)=>{
        if(uid!==null){
            // console.log(product);
            Product=product;
            Product['qty']=1;
            Product['TotalProductPrice']=Product.qty*Product.price;
            fs.collection('Cart ' + uid).doc(product.ID).set(Product).then(()=>{
                console.log('successfully added to cart');
            })

        }
        else{
            props.history.push('/login');
        }
        
    }
    
    return (
        <>
      
      
          
            <Slider/>
            <br></br>
            <br></br>
            <br></br>
            <div className='form'>
            <input width={200} type="text" className='form-control'
                onChange={(e)=>setInp(e.target.value)}></input>
                </div>


           
            {products.length > 0 && (
                
                <div className='container-fluid'>
                    <h1 className='text-center'>Products</h1>
                    <div className='products-box'>
                        <Products products={products} inp={inp} addToCart={addToCart}/>
                    </div>
                </div>
            )}
            {products.length < 1 && (
                <div className='container-fluid'>OOps u visiting wrong page</div>
            )}
        </>
    )
}
export default Home