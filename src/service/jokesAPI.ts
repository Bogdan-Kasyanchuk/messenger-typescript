import axios from 'axios';

export async function getJokes(): Promise<string> {
  const response = await axios.get(`https://api.chucknorris.io/jokes/random`);
  if (response.status === 200) return response.data.value;
  throw new Error();
}
