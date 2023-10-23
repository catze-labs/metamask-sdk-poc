import { useDisconnect } from "wagmi";

const DisconnectWalletButton: React.FC = () => {
  const { disconnectAsync } = useDisconnect();

  const handleDisconnect = async () => {
    try {
      await disconnectAsync();
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <button
      className="px-4 py-2 rounded-lg bg-orange-400 font-bold text-white hover:bg-orange-600 focus:ring-1"
      onClick={handleDisconnect}
    >
      Disconnect
    </button>
  );
};

export default DisconnectWalletButton;
