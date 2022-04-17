import { getAddresses, getContractAddress } from 'helpers/api'
import { proxy } from 'valtio'

export default proxy({
  contractAddress: getContractAddress(),
  addresses: getAddresses(),
})
