export async function getAllEnterprises() {
  const result = await fetch('http://localhost:3000/enterprises');
  const enterprises = await result.json();
  if (!enterprises) {
    throw new Error('empresas não encontradas');
  }
  return enterprises;
}

export async function getAllProductsOfgetAllEnterprise(enterprise) {
  const result = await fetch(
    `http://localhost:3000/enterprise/products/${enterprise.id}`
  );
  const products = await result.json();
  if (!products) {
    throw new Error('produtos não encontrados');
  }
  return products;
}

export async function purchaseProduct(product) {
  const jwt = await JSON.parse(localStorage.getItem('user'));
  const authorization = `Bearer ${jwt.token}`;
  try {
    const result = await fetch(`http://localhost:3000/order`, {
      method: 'POST',
      headers: {
        authorization: authorization,
      },
      body: JSON.stringify(product),
    });
    if (result.status !== 200) {
      throw new Error('compra falhou');
    }
  } catch (e) {
    return;
  }
}

export async function getOrders() {
  const jwt = await JSON.parse(localStorage.getItem('user'));
  const authorization = `Bearer ${jwt.token}`;
  const result = await fetch(`http://localhost:3000/order`, {
    headers: { authorization: authorization },
  });
  const products = await result.json();
  if (!products) {
    throw new Error('produtos não encontrados');
  }
  return products;
}
