import React, { useCallback, useEffect } from 'react'
import styled from 'styled-components'
import { useWallet } from 'use-wallet'
import useModal from '../../../hooks/useModal'
import Button from '../../Button'
import WalletProviderModal from '../../WalletProviderModal'
import AccountModal from './AccountModal'
import { useCakePrice } from '../../../hooks/useTokenBalance'

interface AccountButtonProps {}

const AccountButton: React.FC<AccountButtonProps> = (props) => {
  const [onPresentAccountModal] = useModal(<AccountModal />)
  const [onPresentWalletProviderModal] = useModal(
    <WalletProviderModal />,
    'provider',
  )

  const { account, connect, status } = useWallet()

  const cakePrice = useCakePrice()

  const handleUnlockClick = useCallback(() => {
    onPresentWalletProviderModal()
  }, [onPresentWalletProviderModal])


  return (
    <StyledAccountButton>
      {!account ? (
        <Button onClick={handleUnlockClick} size="sm" text="Unlock Wallet" />
      ) : (
        <Button onClick={onPresentAccountModal} size="sm" text="My Wallet" />
      )}
    </StyledAccountButton>
  )
}


const PriceTag = styled.div`
  position: absolute;
  font-size: 14px;
  color: #7645D9;
  font-weight: 100;
  width: 160px;
  text-align: right;
  right: 0;
  b {
    color: ${(props) => props.theme.colors.primary};
  }
`

const StyledAccountButton = styled.div`
  position:  relative;
`

export default AccountButton
