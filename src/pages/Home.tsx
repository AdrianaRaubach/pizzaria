import Btn from '../components/Btn'
import Image from '../images/image.png'
import axios from 'axios'
import { useEffect, useState } from 'react'
import Cards from '../components/Cards'

const Home = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
      
      const urls = [
        'http://localhost:3000/pizzas-doces',
        'http://localhost:3000/pizzas-salgadas',
        'http://localhost:3000/bebidas-refrigerantes',
        'http://localhost:3000/bebidas-quentes'
      ];
  
      Promise.all(urls.map(url => axios.get(url)))
        .then(responses => {
          const allProducts = responses.flatMap(response => response.data);
          setProducts(allProducts)
        })
        .catch(error => {
          console.error('Erro ao buscar os dados:', error);
        });
    }, []);

  return (
    <section>
        <div className='flex flex-col text-center bg-home p-5 md:p-20'>
            <h2 className='font-semibold font-inter text-3xl md:text-5xl p-10'>Mais vendidas</h2>
            <div className='flex justify-center gap-10 flex-wrap items-start'>
                {
                    products.filter(product => (product.favorites)).map((product) => 
                        <Cards key={product.id} id={product.id} name={product.title} description={product.description} value={product.price} srcImg={product.image} favorites={product.favorites}/>
                    )
                }
            </div>
        </div>
        <div className='flex bg-dark-20 w-full p-5 md:p-15 gap-20 justify-center flex-wrap lg:flex-nowrap'>
            <img className='flex' src={Image}alt="image" />
            <div className='lg:w-3/7 flex flex-col justify-evenly items-start text-start gap-10 lg:gap-0'>
                <h2 className='text-4xl font-inter font-semibold text-dark-10'>Sobre a La P<span className='text-amber-500'>i</span><span className='text-red-500'>z</span><span className='text-green-600'>z</span>a</h2>
                <p className='text-dark-10 font-inter font-medium text-lg'>Bem-vindo ao "La Pizza", o seu refúgio acolhedor para uma experiência de pizzaria autêntica. Em nosso pequeno oásis italiano, cada pedaço de pizza é uma obra-prima artesanal. Sinta-se em casa enquanto o aroma sedutor de massa fresca assa no forno, criando as pizzas mais deliciosas da cidade.</p>
                <Btn value='LER MAIS SOBRE' routeLink='/'></Btn>
            </div>
        </div>
    </section>
  )
}

export default Home
