import { useEffect, useState } from 'react';
import {
  Text,
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Image,
  Picker,
} from 'react-native';
import { getPhoto } from '../../utils/getPhoto.js';
import { purchaseProduct } from '../services/enterprises.js';
import { useNavigation } from '@react-navigation/native';

export default function ProductDetailPurchase({ navigation, route }) {
  const navigate = useNavigation();
  const product = route.params.item;
  const [quantity, setQuantity] = useState(1);
  const [total, setTotal] = useState(product.price);
  const [type, setType] = useState('');
  const handleChange = (itemValue, itemIndex) => {
    setType(itemValue);
  };

  useEffect(() => {
    newTotal = product.price * quantity;
    setTotal(newTotal);
  }, [quantity]);

  const handlePurchase = async () => {
    try {
      await purchaseProduct({
        date: datePurchase(),
        ...product,
        quantity,
        total,
        type,
      });
      navigate.reset({ index: 0, routes: [{ name: 'Initial' }] });
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.containerInfo}>
        <Image
          style={{ width: '8em', height: '8em' }}
          source={getPhoto(product.photo)}
        />
        <View style={styles.containerInfoTwo}>
          <Text style={styles.title}>{product.name}</Text>
          <Text style={styles.price}>R$ {product.price}</Text>
        </View>
      </View>

      <View style={styles.buttonPurchase}>
        <View>
          <Text>Selecione uma Metódo de Pagamento:</Text>
          <Picker selectedValue={type} onValueChange={handleChange}>
            <Picker.Item label="Selecione..." value="" />
            <Picker.Item label="Dinheiro" value="money" />
            <Picker.Item label="Cartão de Crédito" value="credcard" />
          </Picker>
        </View>

        <View style={styles.buttonPurchase}>
          <Text
            style={{
              display: 'flex',
              flexDirection: 'row',
              gap: 5,
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            Total: R$
            <TextInput style={styles.quantity} editable={false} value={total} />
          </Text>
          <View>
            <Text>Digite a quantidade:</Text>
            <TextInput
              placeholder="Digite a quantidade"
              keyboardType="numeric"
              onChange={(event) => {
                setQuantity(event.target.value);
              }}
              value={quantity}
            />
          </View>
        </View>
      </View>
      <View>
        <TouchableOpacity
          title="Login"
          style={styles.button}
          onPress={handlePurchase}
        >
          <Text style={styles.textButton}>Comprar</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    width: '100%',
    height: '100%',
  },
  quantity: {
    fontSize: '1.3em',
    fontWeight: '700',
  },
  containerInfo: {
    display: 'flex',
    width: '100%',
    flexDirection: 'row',
    padding: '1em',
    alignItems: 'center',
    flexGrow: 2,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 5,
  },
  containerInfoTwo: {
    flexWrap: 'wrap',
    width: '70%',
    display: 'flex',
    gap: 15,
  },
  containerQuant: {},
  buttonPurchase: {
    padding: '1em',
    gap: 20,
    display: 'flex',
    alignItems: 'center',
    flexGrow: 2,
    fontWeight: '600',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 5,
  },
  title: {
    fontSize: '1.7em',
    fontWeight: '900',
  },
  price: {
    color: 'green',
    fontSize: '1.5em',
    fontWeight: '700',
  },
  button: {
    alignSelf: 'center',
    backgroundColor: 'red',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 5,
    padding: 12,
    margin: '1em',
    width: '60%',
  },
  textButton: {
    textAlign: 'center',
    color: 'white',
    fontWeight: '700',
  },
});

function datePurchase() {
  let date = new Date();
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0'); // O mês é base zero, então adicionamos 1
  const day = String(date.getDate()).padStart(2, '0');
  const formattedDate = `${year}-${month}-${day}`;
  return formattedDate;
}
