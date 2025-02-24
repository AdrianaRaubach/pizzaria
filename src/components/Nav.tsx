import {Link} from 'react-router-dom'
import { IoHomeOutline } from "react-icons/io5";
import { MdRestaurantMenu } from "react-icons/md";
import { IoCartOutline } from "react-icons/io5";
import { useState, useEffect } from 'react';
import axios from 'axios';


const Nav = () => {

  const [cartCont, setCartCont] = useState(0)

  useEffect(() => {
    axios.get('http://localhost:3000/carrinho')
      .then(function (response) {
        setCartCont(response.data.length)
      })
      .catch(function (error) {
        console.error('Erro ao buscar os dados:', error)
      })
  }, [cartCont])

  return (
    <nav>
      <ul className='bg-amber-600 text-2xl text-white flex flex-col md:flex-row justify-around p-5 fixed w-full items-center'>
        <li className="hover:text-red-900 cursor-pointer duration-300 ease-in-out"><Link to='/' className='flex gap-2 items-center'>Home<IoHomeOutline /></Link></li>
        <li className="hover:text-red-900 cursor-pointer duration-300 ease-in-out"><Link to='menu' className='flex gap-2 items-center'>Cardápio digital<MdRestaurantMenu /></Link></li>
        <li className="hover:text-red-900 cursor-pointer duration-300 ease-in-out"><Link to='cart' className='flex gap-2 items-center'>Carrinho de compras<IoCartOutline /><div className='rounded-xl bg-red-700 text-sm w-5 h-5 text-center -ml-4 -mt-4'>{cartCont}</div></Link></li>
      </ul>
    </nav>
  )
}

export default Nav
