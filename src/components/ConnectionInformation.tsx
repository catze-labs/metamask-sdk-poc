import clsx from "clsx";
import { useAccount, useChainId } from "wagmi";

const ConnectInformation: React.FC = () => {
  const { address, isConnected, isConnecting } = useAccount();
  const chainId = useChainId();
  return (
    <article
      className={clsx([
        "border-2 transition-colors p-4 rounded-xl duration-150 max-w-xs w-full",
        !isConnected && "border-gray-300 bg-gray-100",
        isConnected && "border-orange-400",
      ])}
    >
      {isConnected && (
        <dl className="flex flex-col gap-3">
          <div>
            <dt className="font-bold text-xs">Address</dt>
            <dd className="font-mono text-sm break-all p-1.5 bg-gray-100 rounded-md">
              {address}
            </dd>
          </div>
          {/* <div>
            <dt className="font-bold text-xs">Connected network id</dt>
            <dd className="font-mono text-sm break-all p-1.5 bg-gray-100 rounded-md">
              {chainId}
            </dd>
          </div> */}
        </dl>
      )}
      {!isConnected && !isConnecting && (
        <p className="font-bold text-center">Please connect wallet</p>
      )}
      {!isConnected && isConnecting && (
        <p className="animate-pulse font-bold text-center">
          Connecting....
          <br />
          Please check your wallet
        </p>
      )}
    </article>
  );
};

export default ConnectInformation;
