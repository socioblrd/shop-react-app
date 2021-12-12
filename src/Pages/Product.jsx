import React from 'react';
import { Container, SubTitle, Info, But} from './styles';
const Product = ({ product, AddtoBasket}) => {
  const handleAddToCart  = () => AddtoBasket(product.id, 1);
    return (
      <Container>
        <SubTitle src={product.image.url} title={product.name} />
            <Info >{product.name}</Info>
            <Info>{product.price.formatted_with_symbol}</Info>
          <Info dangerouslySetInnerHTML={{ __html: product.description }} variant="body2" color="textSecondary" component="p"/>
          <But onClick={handleAddToCart}>
            <img src='https://cdn.icon-icons.com/icons2/1580/PNG/128/2849824-basket-buy-market-multimedia-shop-shopping-store_107977.png' width="50" height="50"/>
          </But>
      </Container>
    );
  };
  
  export default Product;
  
  