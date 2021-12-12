import React, { useState, useEffect } from 'react';
import { commerce } from './Pages/commerce';
import Products from './Pages/Products';
import Bar from './Pages/Bar';
import Basket from './Pages/Basket';
import Checkout from './Pages/Checkout';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
 const App = () => {
  const [prod, makeProducts] = useState([{id: 1, name:'e', description: 'vtv', price: '7', image: 'https://nashzelenyimir.ru/wp-content/uploads/2016/07/%D0%91%D0%B0%D0%BD%D0%B0%D0%BD-%D1%84%D0%BE%D1%82%D0%BE.jpg'},{id: 2, name:'e', description: 'vtv', price: '7', image: 'https://nashzelenyimir.ru/wp-content/uploads/2016/07/%D0%91%D0%B0%D0%BD%D0%B0%D0%BD-%D1%84%D0%BE%D1%82%D0%BE.jpg'}]);
  const [basket, makeBasket] = useState({});
  const ProductsListed = async () => {
    const { data } = await commerce.products.list();
    makeProducts(data);
  };
  const BasketList = async () => {
    makeBasket(await commerce.cart.retrieve());
  };
  const AddToBasket = async (ID, quan) => {
    const {cart} = await commerce.cart.add(ID, quan);

    makeBasket(cart);
  };
  const BasketRenew = async (ID, quan) => {
    const {cart} = await commerce.cart.update(   ID    , { quan });

    makeBasket(cart);
  };

  const RemoveFromBasket = async (ID) => {
    const {cart} = await commerce.cart.remove(ID);

    makeBasket(cart);
  };

  const EmptyBasket = async () => {
    const {cart} = await commerce.cart.empty();

    makeBasket(cart);
  };
  useEffect(() => {
    ProductsListed();
    BasketList();
  }, []);
  //RemoveFromBasket('item_1ypbroE658n4ea');
  console.log(prod);
  console.log(basket);
  return (
   
  
      <Router>
        <div>
      <Bar totalItems={basket.total_items}  />
      <Routes>
      <Route exact path="/" element={<Products products={prod} AddtoBasket={AddToBasket}/>} >
          </Route>
          <Route exact path="/cart" element={ <Basket cart = {basket}  onUpdateCartQty={BasketRenew} onRemoveFromCart={RemoveFromBasket} onEmptyCart={EmptyBasket}/>}>
          </Route>
          <Route path="/checkout" exact element={<Checkout />}/>
          </Routes>
          </div>
          </Router>
    

    
  );
};
export default App;


/*import Main from "./Pages/Main";

const App = () => {
  return <Main />;
};

export default App;*/