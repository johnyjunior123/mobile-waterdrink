import { useEffect, useState } from 'react';
import { FlatList, View, Text } from 'react-native';
import { EnterpriseItem } from '../components/enterprise/enterprise-item';
import { getAllEnterprises } from '../services/enterprises';

export function EnterprisesScreen({ navigation }) {
  const [enterprises, setEnterprises] = useState([]);

  useEffect(() => {
    getAllEnterprises().then((enterprises) => {
      setEnterprises(enterprises);
    });
  }, []);

  return (
    <FlatList
      data={enterprises}
      renderItem={({ item }) => (
        <EnterpriseItem navigation={navigation} enterprise={item} />
      )}
    />
  );
}
