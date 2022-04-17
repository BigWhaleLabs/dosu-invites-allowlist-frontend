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

export async function getUserCount() {
  const data = await (await fetch('https://stats.borodutch.com/count')).json()
  return data.count
}
