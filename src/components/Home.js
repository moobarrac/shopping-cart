import React, { useContext } from 'react'
import { CartContex } from '../context/Context'
import Filters from './Filters'
import SingleProduct from './SingleProduct'
import './styles.css'

const Home = () => {
  const {
    state: {products},
    productState: {byStock, byFastDelivery, byRating, sort, searchQuery}
  } = useContext(CartContex);

  const transformProducts = () => {
    let sortedProducts = products;

    if(sort) {
      sortedProducts = sortedProducts.sort((a, b) => 
        sort === 'lowToHigh' ? 
          a.price - b.price : 
          b.price - a.price
      );
    }

    if (byRating) {
      sortedProducts = sortedProducts.filter((item) => 
        item.ratings === byRating
      );
    }

    if (!byStock) {
      sortedProducts = sortedProducts.filter((item) => 
        item.inStock
      );
    }

    if (byFastDelivery) {
      sortedProducts = sortedProducts.filter((item) =>
        item.fastDelivery
      );
    }

    if (searchQuery) {
      sortedProducts = sortedProducts.filter(item =>
        item.name.toLowerCase().includes(searchQuery)
      );
    }

    return sortedProducts
  }

  return (
    <div className='home'>
      <Filters/>
      <div className='productContainer'>
        {
          transformProducts().map(product => {
            return <SingleProduct key={product.id} product={product}/>
          })
        }
      </div>
    </div>
  )
}

export default Home