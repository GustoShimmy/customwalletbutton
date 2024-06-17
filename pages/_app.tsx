import type { AppProps } from "next/app";
import { ThirdwebProvider } from "@thirdweb-dev/react";
import "../styles/globals.css";

// This is the chain your dApp will work on.
// Change this to the chain your app is built for.
// You can also import additional chains from `@thirdweb-dev/chains` and pass them directly.
const activeChain = "ethereum";

function MyApp({ Component, pageProps }: AppProps) {
const smartWalletConfig = {
  factoryAddress: "0xbA308A4b323cAc54AC5B9dEd590A065507B642e9",
   gasless: true,
}
  
  return (
    <ThirdwebProvider 
      clientId= "9f448afbd669ef9fa8f744c35ff52fcb"
      activeChain={activeChain} 
    supportedWallets={[
     embeddedWallet(),
     smartWallet(metamaskWallet(), smartWalletConfig),
     smartWallet(walletConnect(), smartWalletConfig), 
     smartWallet(coinbaseWallet(), smartWalletConfig),
     localWallet(),
    ] }
    >
      <Component {...pageProps} />
    </ThirdwebProvider>  
  );
}

export default MyApp;
