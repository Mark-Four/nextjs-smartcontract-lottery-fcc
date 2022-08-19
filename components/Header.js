import { ConnectButton } from "web3uikit"
import { useMoralis } from "react-moralis"

export default function Header() {
    const { account, isWeb3Enabled } = useMoralis()
    return (
        <div className="p-5 border-b-2 flex flex-row">
            <h1 className="py-4 font-bold text-3xl">Decentralized Lottery</h1>
            <div className="ml-auto py-4 px-2">
                <ConnectButton moralisAuth={false} />
            </div>
        </div>
    )
}
