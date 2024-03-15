import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './src/pages/home';
import { RegisterScreen } from './src/pages/register';
import { useEffect, useState } from 'react';
import { InitalScreen } from './src/pages/initial';
import { EnterprisesScreen } from './src/pages/enterprisesScreen';
import { ProductsScreen } from './src/pages/products';
import ProductDetailPurchase from './src/pages/productDetailScreen';
import { OrdersScreen } from './src/pages/orders';

const Stack = createNativeStackNavigator();

export default function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false); // Estado para controlar se o usuário está logado ou não

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem('user'));
    if (user) {
      setIsLoggedIn(true);
    }
  });

  return (
    <NavigationContainer>
      <Stack.Navigator>
        {!isLoggedIn ? (
          <>
            <Stack.Screen name="login" component={HomeScreen} />
            <Stack.Screen name="Register" component={RegisterScreen} />
          </>
        ) : (
          <>
            <Stack.Screen name="Initial" component={InitalScreen} />
            <Stack.Screen name="enterprises" component={EnterprisesScreen} />
            <Stack.Screen name="orders" component={OrdersScreen} />
            <Stack.Screen name="products" component={ProductsScreen} />
            <Stack.Screen
              name="productdetail"
              component={ProductDetailPurchase}
            />
          </>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
}
