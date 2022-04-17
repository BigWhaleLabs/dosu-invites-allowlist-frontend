import { HeaderText } from 'components/Text'
import AddAddress from 'components/AddAddress'
import Addresses from 'components/Addresses'
import ContractAddress from 'components/ContractAddress'
import SuspenseWithError from 'components/SuspenseWithError'

export default function MainBlock() {
  return (
    <>
      <HeaderText>Dosu Invites admin panel</HeaderText>
      <SuspenseWithError error="Error fetching contract address!">
        <ContractAddress />
      </SuspenseWithError>
      <AddAddress />
      <SuspenseWithError error="Error fetching allowlist!">
        <Addresses />
      </SuspenseWithError>
    </>
  )
}
