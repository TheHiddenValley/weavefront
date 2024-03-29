import React from "react";
import styles from "./index.module.css";
import Image from 'next/image';
import SingleCrossSwapInput from "@/components/inputs/singleCrossPayment/singleCrossSwapInput";
import SingleCrossSwapOutput from "@/components/inputs/singleCrossPayment/SingleCrossSwapOutput";
import ConnectWalletPage from "@/components/connectWalletPage";
import { useAddress } from "@thirdweb-dev/react";
import FirstNetworkModal from "@/components/modal/firstNetworkModalPage";
import SecondNetworkModal from "@/components/modal/secondNetworkModal";
import CoinPrice from "@/components/coinPrice/Coinprice";


const OneSVG = () => <Image src="/recent 1.svg" alt="One SVG" width={30} height={30} />;
const Cog6ToothSVG = () => <Image src="/cog-6-tooth.svg" alt="Cog 6 Tooth SVG" width={20} height={20} />;

const ArrowsRightLeft = () => (
  <button type="button" onClick={handleClick} style={{ width: '100%', display: 'flex', justifyContent: 'space-evenly' }}>
    <Image src="/arrows-right-left.svg" alt="Cog 6 Tooth SVG" width={30} height={30} />
  </button>
);
const handleClick = () => {
  // Handle button click event
};

export default function SwapContainer() {
  const address = useAddress();
  if (!address)
    return (
      <div>
        <ConnectWalletPage />
      </div>
    );

  return (
    <div className={styles.SwapContainer}>
      {/* <h1 className={styles.crossChain_Header}>Cross Chain Swap</h1> */}

      <div className={styles.coinDetailsTag}>
      </div>
      <div className={styles.crossChainSection}>
        <section className={`${styles.crossChain_Header}`}>
          {/* <h4></h4> */}
        </section>
        <div>
          <section>
            <div className={styles.SwapDropDown}>
              <h1 className={styles.crossChain_Header}>Swap</h1>
              <div className="Frame15" style={{alignItems: 'center', gap: 16, display: 'inline-flex'}}>
              <OneSVG />
              <Cog6ToothSVG />
              </div>
            </div>

            <div>
              <SingleCrossSwapInput />
            </div>
            <ArrowsRightLeft />
            <div>
              <SingleCrossSwapOutput />
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
