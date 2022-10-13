import { useContractRead, useContractEvent } from "wagmi";
import Web3ToggleWrite from "./Web3ToggleWrite";
import { CONTRACT_ABI, CONTRACT_ADDRESS } from "../contracts/toggle.js"
import { useState } from "react";


export default function Web3ToggleRead() {
  const [status, setStatus] = useState<boolean | null>(null)

  useContractEvent({
    addressOrName: CONTRACT_ADDRESS,
    contractInterface: CONTRACT_ABI,
    eventName: 'statusChange',
    listener(node, label, owner) {
      setStatus(node[1])
    },
  });

  useContractRead({
    addressOrName: CONTRACT_ADDRESS,
    contractInterface: CONTRACT_ABI,
    functionName: "status",
    onSuccess(data) {
      console.log(data)
      setStatus(!!data)
    }
  });



  return (

    <div>
      {typeof status === "boolean" && <p>Toggle Status: {status ? 'true' : 'false'}</p>}
      {typeof status === "boolean" && <Web3ToggleWrite status={status} />}
    </div>
  );
}
