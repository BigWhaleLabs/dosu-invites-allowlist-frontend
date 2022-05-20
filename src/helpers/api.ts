import env from 'helpers/env'

const baseUrl = env.VITE_APP_BACKEND_URL
const password = env.VITE_APP_PASSWORD

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
      password,
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
      password,
    },
  })
}
