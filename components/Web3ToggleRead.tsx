import { useContractRead } from "wagmi";
import Web3ToggleWrite from "./Web3ToggleWrite";
import {CONTRACT_ABI, CONTRACT_ADDRESS} from "../contracts/toggle.js"


export default function Web3ToggleRead() {
  const { data, isError, isLoading } = useContractRead({
    addressOrName: CONTRACT_ADDRESS,
    contractInterface: CONTRACT_ABI,
    functionName: "status",
    watch: true,
  });
  if (isLoading) return <div>Fetching name…</div>;
  if (isError) return <div>Error fetching name</div>;
  return (
    
    <div>
      {typeof data === "boolean" && <p>Toggle Status: {data? 'true': 'false'}</p>}
      {!isLoading && typeof data === "boolean" && <Web3ToggleWrite status={data} />}
    </div>
  );
}
