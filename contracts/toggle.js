export const CONTRACT_ADDRESS = "0xf58dE4dB89E9D0ea1F5d5FC5e24Bca62e5661A29";
export const CONTRACT_ABI = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "user",
        type: "address",
      },
      {
        indexed: false,
        internalType: "bool",
        name: "status",
        type: "bool",
      },
    ],
    name: "statusChange",
    type: "event",
  },
  {
    inputs: [],
    name: "status",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bool",
        name: "val",
        type: "bool",
      },
    ],
    name: "toggle",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];
