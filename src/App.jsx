import { useState, useEffect } from 'react'
import { Outlet, Link } from 'react-router-dom'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import cartImage from './assets/cart-variant.svg'
import './App.css'

function App() {
  const [products, setProducts] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const [cart, setCart] = useState([]);

  function onClick(product, amount) {
    if (amount !== 0) {
      if (cart.find((prod) => prod.title === product.title)) {
        setCart(cart.map((prod) => {
          return prod.title === product.title
          ? {...prod, quantity: prod.quantity + amount}
          : prod
        }))
      } else {
        setCart([...cart, {title: product.title, quantity: amount, price: product.price}])
      }
      
    }
  }

  useEffect(() => {
    console.log("Cart updated:", cart);
  }, [cart]);


  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://fakestoreapi.com/products?limit=12");
        const json = await response.json();
        setProducts(json);
      } catch (err) {
        setError(err);
        console.error(err);
      } finally {
        setLoading(false);
      }
    }
    fetchData();
  }, [])

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error occured</p>

  return (
    <>
      <nav className='flex justify-center gap-x-8 text-lg'>
        <Link to="/">Homepage</Link>
        <Link to="shop">Shop</Link>
        <Link to="cart" className='ml-auto'>
          <img src={cartImage} alt='shopping cart' className='size-10'/>
        </Link>
      </nav>
      <main>
        <Outlet context={{products, onClick}}/>
      </main>
    </>
  )
}

export default App
