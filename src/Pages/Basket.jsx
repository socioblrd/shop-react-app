import React from 'react';
import { Link } from 'react-router-dom';
import BasketItem from './BasketItem';
import { Container, Info, But} from './styles';
const Basket = ({cart, onUpdateCartQty, onRemoveFromCart, onEmptyCart}) => {
  const EmptyCart = () => (
    <Info>
     <Link to="/"></Link>!
    </Info>
  );

  if (!cart.line_items) return 'Loading';

  const FilledBasket = () => (
    <>

      {cart.line_items.map((item) => (
            <BasketItem item = {item} onUpdateCartQty={onUpdateCartQty} onRemoveFromCart={onRemoveFromCart}/>
        ))}
      <div >
      <Info variant="h4">Subtotal: {cart.subtotal.formatted_with_symbol}</Info>
        <div>
          <But  onClick={onEmptyCart} >Очистить корзину</But>
          <But  component={Link} to="/checkout" >Оплатить</But>
        </div>
      </div>
    </>
  );

  return (
    <Container>
      { !cart.line_items.length ? <EmptyCart /> : <FilledBasket /> }
  </Container>
  );
};

export default Basket;
