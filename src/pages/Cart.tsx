import axios from 'axios'
import { useState, useEffect } from 'react'

type CartProps = {
  id: string;
  title: string;
  description: string;
  price: string;
  image: string;
  favorites: boolean;
}

const Cart = () => {

  const [products, setProducts] = useState<CartProps[]>([])
  const [arrayPrices, setArrayPrices] = useState<number[]>([])

  useEffect(() => {
    axios.get('http://localhost:3000/carrinho')
      .then(function (response) {
        setProducts(response.data)

        const prices = response.data.map(element => Number(element.price))
        setArrayPrices(prices)
      })
      .catch(function (error) {
        console.error('Erro ao buscar os dados:', error)
      })
  }, [])

  const removeItem = (item: CartProps) => {
    axios.delete(`http://localhost:3000/carrinho/${item.id}`)
    .catch(function(error) {
      console.log(error)
    })
  }

  const total = arrayPrices.reduce((accumulator, currentValue) => accumulator + currentValue, 0)

  return (
    <div className='flex flex-col bg-amber-100 p-3 md:px-20 lg:px-40 xl:px-70 border border-amber-500 mb-2'>
      <h2 className='font-bold text-2xl my-5'>Carrinho</h2>
      {
        products.map((item) => 
          <div className='flex gap-5' key={item.id}>
            <div className='flex w-full justify-between bg-amber-200 p-3 border border-amber-500 rounded-md mb-2'>
              <div>{item.title}</div>
              <div>R$ {item.price}</div>
            </div>
              <button className='cursor-pointer bg-red-400 p-2 mb-2 mt-2 rounded-md text-sm h-9' onClick={()=> removeItem(item)}>Remover</button>
          </div>
        )
      }

      <p className='self-end mr-30'>Total: R$ {total.toFixed(2)}</p>
    </div>
  )
}

export default Cart
