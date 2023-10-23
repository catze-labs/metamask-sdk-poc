import { metamaskSDKOptions, wagmiConfig } from "@/config";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { WagmiProvider } from "wagmi";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { MetaMaskProvider } from "@metamask/sdk-react";

const queryClient = new QueryClient();

export default function App({ Component, pageProps }: AppProps) {
  return (
    <WagmiProvider config={wagmiConfig}>
      <QueryClientProvider client={queryClient}>
        <MetaMaskProvider sdkOptions={metamaskSDKOptions}>
          <Component {...pageProps} />
        </MetaMaskProvider>
      </QueryClientProvider>
    </WagmiProvider>
  );
}
