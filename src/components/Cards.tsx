import Btn from './Btn'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart } from '@fortawesome/free-solid-svg-icons'
import { useDispatch } from 'react-redux'
import { addProductsToCart } from '../store/actions/cart'

const heart = <FontAwesomeIcon icon={faHeart} />

type CardsProps = {
    name: string;
    description: string;
    value: string;
    srcImg: string;
    favorites: boolean;
    id:number;
    qtd: number;
}
const Cards = ({name, description, value, srcImg, favorites, id, qtd=1}: CardsProps) => {

  const dispath = useDispatch()
  
  return (
    <div className='border-border border-2 bg-dark-20 flex flex-col w-70 items-center text-center gap-5 rounded-xl mt-12 shadow-2xl px-2'>
        {favorites && <div className='mr-4 -mt-4 self-end text-red-500 bg-red-200 px-1.5 py-0.5 border-2 rounded-lg'>{heart}</div>}
        {!favorites && <div className='mr-4 -mt-4 px-1.5 py-0.5 border-2 invisible'>{heart}</div>}
        <img className="-mt-24" src={srcImg} alt="pizza"/>
        <h3 className='font-inter font-semibold text-xl '>{name}</h3>
        <p className='font-inter'>{description}</p>
        <p className='mb-8 text-3xl font-semibold font-inter'>R$ {Number(value).toFixed(2)}</p>
        <span className='-mb-3'>
          <Btn value='Adicionar ao carrinho' 
            addedToCart={() => dispath(addProductsToCart({name, description, value, srcImg, favorites, id, qtd}))}>
          </Btn>
        </span>
      </div>
  )
}

export default Cards
