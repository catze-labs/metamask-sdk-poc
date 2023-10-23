import ConnectWalletButton from "@/components/ConnectWalletButton";
import ConnectInformation from "@/components/ConnectionInformation";
import DisconnectWalletButton from "@/components/DisconnectWalletButton";
import { useAccount } from "wagmi";

export default function Home() {
  const { isConnected } = useAccount();
  return (
    <main className="flex flex-col gap-2 items-center justify-center w-screen h-screen">
      {!isConnected && <ConnectWalletButton />}
      {isConnected && <DisconnectWalletButton />}
      <ConnectInformation />
    </main>
  );
}
