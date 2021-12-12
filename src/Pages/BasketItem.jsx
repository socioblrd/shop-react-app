import React from 'react';
import { Container, SubTitle, Info, But} from './styles';
const BasketItem = ({item, onUpdateCartQty, onRemoveFromCart }) => {

  

  return (
    <Container >
<img src={item.image.url} alt={item.name} />
        <Info >{item.name}</Info>
        <Info >{item.line_total.formatted_with_symbol}</Info>
          <But size="small" onClick={() => onUpdateCartQty(item.id, item.quantity - 1)}>-</But>
          <Info>&nbsp;{item.quantity}&nbsp;</Info>
          <But  size="small" onClick={() => onUpdateCartQty(item.id, item.quantity + 1)}>+</But>
        <But onClick={() => onRemoveFromCart(item.id)}>Убрать из корзины</But>
    </Container>
  );
};

export default BasketItem;
