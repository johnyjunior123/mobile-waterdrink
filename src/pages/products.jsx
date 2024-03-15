import { ProductItem } from '../components/products/product.item';
import { useState, useEffect } from 'react';
import { getAllProductsOfgetAllEnterprise } from '../services/enterprises';
import { FlatList } from 'react-native';

export function ProductsScreen({ navigation, route }) {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    try {
      getAllProductsOfgetAllEnterprise(route.params.enterprise).then((data) => {
        setProducts(data);
      });
    } catch (e) {
      console.log('empresa sem itens');
    }
  }, []);

  return (
    <FlatList
      data={products}
      renderItem={({ item }) => (
        <ProductItem
          key={item.id}
          navigation={() => navigation.navigate('productdetail', { item })}
          item={item}
        />
      )}
    />
  );
}
