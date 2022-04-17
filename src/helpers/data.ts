import { getAddresses, getContractAddress } from 'helpers/api'
import { proxy } from 'valtio'

const data = proxy({
  contractAddress: getContractAddress(),
  addresses: getAddresses(),
})

export function refreshData() {
  data.addresses = getAddresses()
}

export default data
