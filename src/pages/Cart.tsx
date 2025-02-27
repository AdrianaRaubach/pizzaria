import { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { removeProductsToCart, removeAllProductsToCart, plusProducts, minusProducts } from '../store/actions/cart';
import { BsPlusSquareFill } from "react-icons/bs";
import { BsFillDashSquareFill } from "react-icons/bs";

type CartProps = {
  id: number;
  name: string;
  value: string;
  qtd: number;
}

const Cart = () => {

  const dispath = useDispatch()

  const [arrayPrices, setArrayPrices] = useState<number[]>([])

  const cartProducts: CartProps[] = useSelector(state => state.cartProducts)

  useEffect(() => {
    const prices = cartProducts.map(item => Number(item.value))
    setArrayPrices(prices)
  }, [cartProducts])

  const total = arrayPrices.reduce((accumulator, currentValue) => accumulator + currentValue, 0)

  return (
    <div className='flex flex-col bg-amber-100 p-3 md:px-20 lg:px-40 xl:px-70 border border-amber-500 mb-2'>
      <h2 className='font-bold text-2xl my-5'>Carrinho</h2>
      {
        cartProducts.length > 0 ? (
          cartProducts.map((item:CartProps) => 
            <div className='flex gap-5' key={item.id}>
              <div className='flex w-full justify-between bg-amber-200 p-3 border border-amber-500 rounded-md mb-2'>
                <div>{item.name}</div>
                <div className='flex gap-2 items-center'>
                  <div className='mr-4'>R$ {item.value}</div>
                    <div className='text-red-600 cursor-pointer'
                      onClick={() => dispath(minusProducts(item))}><BsFillDashSquareFill />
                    </div>
                    <div className='bg-gray-100 w-10 text-center text-gray-700'>{item.qtd}</div>
                    <div className='text-green-700 cursor-pointer'
                      onClick={() => dispath(plusProducts(item))}><BsPlusSquareFill />
                    </div>
                </div>
              </div>
                <button className='cursor-pointer bg-red-400 p-2 mb-2 mt-2 rounded-md text-sm h-9' onClick={() => dispath(removeProductsToCart(item.id))}>Remover</button>
            </div>
          )
        ) : (
          <p>Seu carrinho está vazio, acesse nosso cardápio digital para fazer o seu pedido</p>
        )
      }
      {cartProducts.length > 0 && 
      <div className='flex justify-end items-center my-10'>
        <p className='flex mr-20 text-3xl'>Total: R$ {total.toFixed(2)}</p>
        <button className='cursor-pointer bg-red-400 p-2 mb-2 mt-2 rounded-md text-sm h-9' 
          onClick={() => dispath(removeAllProductsToCart([]))}>Esvaziar carrinho
        </button> 
      </div>
      }
    </div>
  )
}

export default Cart
