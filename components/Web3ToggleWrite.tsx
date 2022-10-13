import { useContractWrite, usePrepareContractWrite } from "wagmi";
import {CONTRACT_ABI, CONTRACT_ADDRESS} from "../contracts/toggle.js"

interface Props {
  status: boolean;
}

export default function Web3ToggleWrite({status}: Props) {
  const { config } = usePrepareContractWrite({
    addressOrName: CONTRACT_ADDRESS,
    contractInterface: CONTRACT_ABI,
    functionName: "toggle",
    args: [!status],
  });

  const { data, isLoading, isSuccess, write } = useContractWrite(config);

  //   if (isLoading) return <div>Fetching name…</div>;
  //   if (isSuccess) return <div>OK</div>;
  return (
    <div>
      <button disabled={!write && isLoading} onClick={() => write?.()}>
        toggle
      </button>
      {isLoading && <div>Check Wallet</div>}
      {isSuccess && <div>Transaction: {JSON.stringify(data)}</div>}
    </div>
  );
}
