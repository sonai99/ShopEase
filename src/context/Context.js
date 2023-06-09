import { createContext, useContext, useReducer } from "react";
import { cartReducer } from './Reducers';
import { productReducer } from './Reducers';
import productsData from '../db/data'

const Cart = createContext();

const Context = ({children}) => {      
    const products = productsData;

      const [state, dispatch] = useReducer(cartReducer,{
        products:products,
        cart:[],
      })

      const[productState, productDispatch] = useReducer(productReducer,{
        byStock:false,
        byFastDelivery:false,
        byRating:0,
        searchQuery:""
      })

      console.log(productState)

    return (
        <Cart.Provider value={{ state,dispatch,productState,productDispatch }}>
            {children}
        </Cart.Provider>
    )
}

export const CartState = () => {
    return useContext(Cart);
}

export default Context;