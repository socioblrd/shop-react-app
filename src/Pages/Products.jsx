import React from 'react';
import { Container, SubTitle, Info, But} from './styles';

import Product from './Product';
//const products = [{id: 1, name:'e', description: 'vtv', price: '7', image: 'https://nashzelenyimir.ru/wp-content/uploads/2016/07/%D0%91%D0%B0%D0%BD%D0%B0%D0%BD-%D1%84%D0%BE%D1%82%D0%BE.jpg'},{id: 2, name:'e', description: 'vtv', price: '7', image: 'https://nashzelenyimir.ru/wp-content/uploads/2016/07/%D0%91%D0%B0%D0%BD%D0%B0%D0%BD-%D1%84%D0%BE%D1%82%D0%BE.jpg'}];
const Products = ( {products, AddtoBasket}) => {
  if (!products.length) return <p>Loading...</p>;
  return (
    <main>
      <Container container justify="center">
        {products.map((product) => (
            <Product product={product} AddtoBasket={AddtoBasket} />
        ))}
      </Container>
    </main>
  );
};

export default Products;
