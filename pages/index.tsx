import { ConnectButton } from '@rainbow-me/rainbowkit';
import type { NextPage } from 'next';
import styles from '../styles/Home.module.css';
import dynamic from 'next/dynamic'

const DynamicEnsProfile = dynamic(() => import('../components/EnsProfile'), {
  ssr: false,
})

const DynamicWeb3ToggleRead = dynamic(() => import('../components/Web3ToggleRead'), {
  ssr: false,
})

const Home: NextPage = () => {

  return (
    <div className={styles.container}>
      <ConnectButton />
      <DynamicEnsProfile />
      <DynamicWeb3ToggleRead />
    </div>
  );
};

export default Home;
