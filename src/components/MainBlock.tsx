import { HeaderText } from 'components/Text'
import Addresses from 'components/Addresses'
import ContractAddress from 'components/ContractAddress'
import Loading from 'components/Loading'
import SuspenseWithError from 'components/SuspenseWithError'

export default function MainBlock() {
  return (
    <>
      <HeaderText>Dosu Invites admin panel</HeaderText>
      <SuspenseWithError
        error="Error fetching contract address!"
        loading={<Loading />}
      >
        <ContractAddress />
      </SuspenseWithError>
      <SuspenseWithError
        error="Error fetching allowlist!"
        loading={<Loading />}
      >
        <Addresses />
      </SuspenseWithError>
    </>
  )
}
