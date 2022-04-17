import { BodyText, CodeText, Link, SubheaderText } from 'components/Text'
import { useSnapshot } from 'valtio'
import MerkleTree from 'merkletreejs'
import classnames, {
  listStylePosition,
  listStyleType,
  whitespace,
  wordBreak,
} from 'classnames/tailwind'
import data from 'helpers/data'
import keccak256 from 'keccak256'

const list = classnames(
  listStyleType('list-decimal'),
  listStylePosition('list-inside')
)

function AddressesList() {
  const { addresses } = useSnapshot(data)
  return (
    <BodyText>
      <ol className={list}>
        {addresses.map((address) => (
          <li key={address}>
            <Link url={`https://ropsten.etherscan.io/address/${address}`}>
              {address}
            </Link>
          </li>
        ))}
      </ol>
    </BodyText>
  )
}

const merkleTreeString = classnames(
  whitespace('whitespace-pre-wrap'),
  wordBreak('break-all')
)

function MerkleTreeVisualization() {
  const { addresses } = useSnapshot(data)
  const merkleTree = new MerkleTree([...addresses], keccak256, {
    sortPairs: true,
    hashLeaves: true,
  })
  return (
    <>
      <SubheaderText>Merkle tree:</SubheaderText>
      <div className={merkleTreeString}>
        <CodeText>{merkleTree.toString()}</CodeText>
      </div>
    </>
  )
}

export default function Addresses() {
  const { addresses } = useSnapshot(data)
  return (
    <>
      <SubheaderText>Allowed addresses:</SubheaderText>
      {addresses.length ? (
        <>
          <AddressesList />
          <MerkleTreeVisualization />
        </>
      ) : (
        <BodyText>No addresses allowed yet.</BodyText>
      )}
      <BodyText></BodyText>
    </>
  )
}
