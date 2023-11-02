import { NewTransactionModal } from '../NewTransactionModal'
import { HeaderContainer, HeaderContent, NewTransactionButton } from './styles'
import * as Dialog from '@radix-ui/react-dialog'

export function Header() {
  return (
    <HeaderContainer>
      <HeaderContent>
        {/* <img src={} alt="" /> */}
        <span>💰</span>
        <Dialog.Root>
          <Dialog.Trigger asChild>
            <NewTransactionButton>New Transaction</NewTransactionButton>
          </Dialog.Trigger>
          <NewTransactionModal />
        </Dialog.Root>
      </HeaderContent>
    </HeaderContainer>
  )
}
