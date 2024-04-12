// this should be in an env as a secret, but its for public test data so nbd
const auth = btoa('simplyrets:simplyrets');

export async function getListings() {
  const response = await fetch('https://api.simplyrets.com/properties', {
    method: 'GET',
    mode: 'cors',
    cache: 'default',
    headers: {
      'Content-Type': 'application/json',
      Authorization: 'Basic ' + auth,
    },
  });
  return response.json();
}
