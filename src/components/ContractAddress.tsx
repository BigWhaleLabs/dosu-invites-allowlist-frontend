import { BodyText, Link, SubheaderText } from 'components/Text'
import { useSnapshot } from 'valtio'
import data from 'helpers/data'

export default function () {
  const {
    contractAddress: { address },
  } = useSnapshot(data)
  return (
    <>
      <SubheaderText>Contract address:</SubheaderText>
      <BodyText>
        <Link url={`https://rinkeby.etherscan.io/address/${address}`}>
          {address}
        </Link>
      </BodyText>
    </>
  )
}
