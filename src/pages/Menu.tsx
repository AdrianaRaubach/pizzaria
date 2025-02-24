// import { FaSearch } from "react-icons/fa";
import Cards from '../components/Cards'
import axios from 'axios'
import { useEffect, useState } from 'react'

const Menu = () => {

    const [products, setProducts] = useState([])
    const [search, setSearch] = useState("")
    
    useEffect(() => {
        axios.get('http://localhost:3000/pizzas-salgadas')
            .then(function (response) {
                setProducts(response.data)
            }
        )
    },[])

    const handleClick = (name) => {
        axios.get(`http://localhost:3000/${name}`)
        .then(function (response) {
            setProducts(response.data)
        })
    }
    const handleSearch = (e) => {
        setSearch(e)
    }

  return (
    <>
      <div className='bg-brand flex flex-col md:flex-row p-3 md:p-0'>
        <ul className='flex w-full items-center md:justify-evenly flex-col md:flex-row'>
            <li className='hover:bg-amber-200 cursor-pointer px-6 py-3 duration-300 ease-in-out' onClick={(e) => {
                const name = e.currentTarget.getAttribute('name')
                handleClick(name)}} name="pizzas-doces">Pizzas doces
            </li>
            <li className='hover:bg-amber-200 cursor-pointer px-6 py-3 duration-300 ease-in-out' onClick={(e) => {
                const name = e.currentTarget.getAttribute('name')
                handleClick(name)}} name="pizzas-salgadas">Pizzas salgadas
            </li>
            <li className='hover:bg-amber-200 cursor-pointer px-6 py-3 duration-300 ease-in-out' onClick={(e) => {
                const name = e.currentTarget.getAttribute('name')
                handleClick(name)}} name="bebidas-refrigerantes">Bebidas refrigerantes
            </li>
            <li className='hover:bg-amber-200 cursor-pointer px-6 py-3 duration-300 ease-in-out' onClick={(e) => {
                const name = e.currentTarget.getAttribute('name')
                handleClick(name)}} name="bebidas-quentes">Bebidas quentes
            </li>
        </ul>
        <input type="text" name="search-bar" id="search-bar" className='bg-border w-8/10 md:w-3/10 h-8 self-center md:mr-8 rounded-lg p-3' placeholder='O que você procura?' onChange={(e) => {handleSearch(e.target.value)}}/>
      </div>
      <div className='flex justify-center gap-20 flex-wrap pt-20 items-start'>
        {
            products.filter(product => (product.title.toLowerCase()).includes(search.toLowerCase())).map((product) => 
                <Cards key={product.id} id={product.id} name={product.title} description={product.description} value={product.price} srcImg={product.image} favorites={product.favorites}/>
            )
        }
      </div>
    </>
  )
}

export default Menu
