import { createWeb3Modal, defaultWagmiConfig } from '@web3modal/wagmi/react'

import { WagmiConfig } from 'wagmi'
import { bsc, arbitrum, mainnet } from 'wagmi/chains'

const projectId = process.env.NEXT_PUBLIC_WC_ID || 'e72d746a6792f5d3428e42892f52a725'

const metadata = {
  name: 'Web3Modal',
  description: 'Web3Modal Example',
  url: 'https://web3modal.com',
  icons: ['https://avatars.githubusercontent.com/u/37784886']
}

const chains = [bsc, mainnet, arbitrum]
const wagmiConfig = defaultWagmiConfig({ chains, projectId, metadata })

createWeb3Modal({ wagmiConfig, projectId, chains })

export function Web3ModalProvider({ children }) {
  return (
    <WagmiConfig config={wagmiConfig}>
        {children}
    </WagmiConfig>
  )
}