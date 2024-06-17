import { ConnectWallet } from "@thirdweb-dev/react";
import styles from "../styles/Home.module.css";
import { NextPage } from "next";

const Home: NextPage = () => {
  return (
    <main className={styles.main}>
      <div className={styles.container}>
        <ConnectWallet 
        // Customize actual button
        btnTitle="Login"
        className={styles.connectWalletBtn}

        modalSize="compact"
        />
      </div>
    </main>
  );
};

export default Home;
