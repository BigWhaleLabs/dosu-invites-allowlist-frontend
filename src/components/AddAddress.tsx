import { BodyText, SubheaderText } from 'components/Text'
import { addAddress, updateMerkleRoot } from 'helpers/api'
import { refreshData } from 'helpers/data'
import { toast } from 'react-toastify'
import { useEffect, useState } from 'react'
import Button from 'components/Button'
import classnames, {
  alignItems,
  display,
  flexDirection,
  flexGrow,
  justifyContent,
  margin,
  padding,
  space,
} from 'classnames/tailwind'

const form = classnames(
  display('flex'),
  flexDirection('flex-row'),
  justifyContent('justify-center'),
  alignItems('items-center'),
  space('space-x-4')
)

const textField = classnames(padding('p-2'), flexGrow('grow'), margin('my-2'))

export default function () {
  const [addresses, setAddresses] = useState('')
  const [addressIsValid, setAddressIsValid] = useState(false)
  const [loading, setLoading] = useState(false)
  const [status, setStatus] = useState('')
  useEffect(() => {
    setAddressIsValid(
      /^(0x[a-fA-F0-9]{40})(,0x[a-fA-F0-9]{40})*$/.test(addresses)
    )
  }, [addresses])
  return (
    <>
      <SubheaderText>Add addresses</SubheaderText>
      <BodyText>(comma-separated)</BodyText>
      <div className={form}>
        <input
          className={textField}
          type="text"
          placeholder="Address"
          onChange={(e) => setAddresses(e.currentTarget.value)}
          value={addresses}
          disabled={loading}
        />
        <Button
          onClick={async () => {
            setLoading(true)
            try {
              setStatus('Adding address...')
              await addAddress(addresses)
              setStatus('Updating the merkle root...')
              await updateMerkleRoot()
              setAddresses('')
              refreshData()
            } catch (error) {
              toast(String(error), { type: 'error' })
            } finally {
              setStatus('')
              setLoading(false)
            }
          }}
          title="Add the addresses"
          disabled={!addressIsValid}
          loading={loading}
        />
      </div>
      {status && <BodyText>{status}</BodyText>}
    </>
  )
}
