export async function Login({ email, password }) {
  const result = await fetch(`http://localhost:3000/login`, {
    method: 'POST',
    body: JSON.stringify({ email, password }),
  });
  const user = await result.json();
  console.log(user);
  localStorage.setItem('user', JSON.stringify(user));
}

export async function Register({ name, email, password }) {
  const result = await fetch(`http://localhost:3000/user`, {
    method: 'POST',
    body: JSON.stringify({ name, email, password }),
    headers: {
      'Content-Type': 'application/json',
    },
  });
  return await result.json();
}
