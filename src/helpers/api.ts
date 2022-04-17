const baseUrl = import.meta.env.VITE_APP_BACKEND_URL

export function getContractAddress() {
  return fetch(`${baseUrl}/contract-address`).then((res) =>
    res.json()
  ) as Promise<{ address: string }>
}

export function getAddresses() {
  return fetch(`${baseUrl}/allowlist`).then((res) => res.json()) as Promise<
    string[]
  >
}

export function addAddress(addresses: string) {
  return fetch(`${baseUrl}/allowlist`, {
    method: 'POST',
    headers: {
      password: import.meta.env.VITE_APP_PASSWORD,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      addresses: addresses.split(','),
    }),
  })
}

export function updateMerkleRoot() {
  return fetch(`${baseUrl}/merkle-tree`, {
    method: 'PUT',
    headers: {
      password: import.meta.env.VITE_APP_PASSWORD,
    },
  })
}

export async function getUserCount() {
  const data = await (await fetch('https://stats.borodutch.com/count')).json()
  return data.count
}
