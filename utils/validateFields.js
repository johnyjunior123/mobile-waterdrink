function verifyFields(obj) {
  for (let key in obj) {
    if (!obj[key]) {
      alert(`o campo ${key} é obrigatorio`);
      return false;
    }
    if (typeof obj[chave] === 'object' && obj[chave] !== null) {
      verifyFields(obj[chave]);
    }
  }
}
