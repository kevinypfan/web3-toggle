import { useEnsName, useAccount } from "wagmi";
import type { AppProps } from 'next/app';


export default function EnsProfile() {
  const { address } = useAccount();

  const { data, isError, isLoading } = useEnsName({
    address: address,
  });
  console.log(data);
  console.log(address);

  if (isLoading) return <div>Fetching name…</div>;
  if (isError) return <div>Error fetching name</div>;
  return (
    <div>
      <p>address: {address}</p>
      <p>Name: {data}</p>
    </div>
  );
}
