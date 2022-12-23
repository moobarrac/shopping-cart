import { createContext, useReducer } from "react";
import { faker } from '@faker-js/faker';
import { CartReducer, ProductReducer } from "./Reducers";


export const CartContex = createContext()
const ContextProvider = ({children}) => {
  faker.seed(99)

  const products = [...Array(20)].map(() => ({
    id: faker.datatype.uuid(),
    name: faker.commerce.productName(),
    price: faker.commerce.price(),
    image: faker.image.image(),
    inStock: faker.helpers.arrayElement([0, 3, 5, 6, 7]),
    fastDelivery: faker.datatype.boolean(),
    ratings: faker.helpers.arrayElement([1, 2, 3, 4, 5]),
  }));

  const [state, dispatch] = useReducer(CartReducer, {
    products: products,
    cart: []
  })

  const [productState, productDispatch] = useReducer(ProductReducer, {
    byStock: false,
    byFastDelivery: false,
    byRating: 0,
    searchQuery: ""
  });


  return (
    <CartContex.Provider value={{state, dispatch, productState, productDispatch}}>
      {children}
    </CartContex.Provider>
  );
}

export default ContextProvider