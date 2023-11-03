import { metamaskSDKOptions, wagmiConfig } from "@/config";
import { useConnect } from "wagmi";
import { injected } from "wagmi/connectors";

const ConnectWalletButton: React.FC = () => {
  const { connectAsync } = useConnect();

  const handleConnect = async () => {
    try {
      console.log(metamaskSDKOptions);
      await connectAsync({
        connector: injected(), // TODO: Should be able to pass metamaskSDKOptions here
      });
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <button
      className="px-4 py-2 rounded-lg bg-orange-400 font-bold text-white hover:bg-orange-600 focus:ring-1"
      onClick={handleConnect}
    >
      Connect Wallet
    </button>
  );
};

export default ConnectWalletButton;
