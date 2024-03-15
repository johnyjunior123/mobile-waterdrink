import { useEffect, useState } from 'react';
import { FlatList } from 'react-native';

export function OrdersScreen() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    try {
      getOrders().then((data) => {
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
