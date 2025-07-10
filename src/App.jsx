import { useState } from 'react'
import { Outlet, Link } from 'react-router-dom'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import cartImage from './assets/cart-variant.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <nav className='flex justify-center gap-x-8'>
        <Link to="/">Homepage</Link>
        <Link to="shop">Shop</Link>
        <Link to="cart" className='ml-auto'>
          <img src={cartImage} alt='shopping cart' className='size-10'/>
        </Link>
      </nav>
      <main>
        <Outlet />
      </main>
    </>
  )
}

export default App
