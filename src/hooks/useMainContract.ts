import { useEffect, useState } from "react";
import { Address, comment, toNano, Cell, OpenedContract } from "@ton/core";
import { useTonClient } from "./useTonClient.ts";
import { useTonConnect } from "./useTonConnect.ts";

import { Sender } from "@ton/core";
import {Swap} from "../contract/SimpleCounter.ts";

interface SwapJetton {
    $$type: "SwapJetton";
    to: Address;
    queryId: bigint;
    receiver: Address;
    responseDestination: Address;
    forwardAmount: bigint;
    forwardPayload: Cell | null;
}

export function useSwapContract() {
    const client = useTonClient();
    const {  connected } = useTonConnect();
    const [contract, setContract] = useState<OpenedContract<Swap> | null>(null);
    const contractAddress = "EQCwzeXtYpX-_Jys5VXCshpYd647BLospxBUmQCaGfh6g0Wq"; // Адрес контракта

    useEffect(() => {
        async function initializeContract() {
            if (!client) return;
            const contractInstance = await Swap.fromAddress(Address.parse(contractAddress));
            const openedContract = client.open(contractInstance) as OpenedContract<Swap>;
            setContract(openedContract);
        }
        initializeContract();
    }, [client, contractAddress]);

    const sendSwapJetton = async (
        sender: Sender,
        value: bigint,
        receiver: string
    ) => {
        if (!contract || !connected) {
            console.error("Contract or connection not initialized");
            return;
        }
       const  master_contract = "EQCctZVB2Y6cbtEuoXAKlcKEM-SG74-PEu_ErViaJM3A6V4v"
        const to = Address.parse(master_contract);
        const receiverAddr = Address.parse(receiver);

        const message: SwapJetton = {
            $$type: "SwapJetton",
            to: to,
            queryId: BigInt(Math.floor(Date.now() / 1000)),
            receiver: receiverAddr,
            responseDestination: receiverAddr,
            forwardAmount: toNano(0.01),
            forwardPayload: comment("swap_jetton"),
        };

        try {
            await contract.send(sender, { value, bounce: false }, message);
            console.log(`SwapJetton sent to ${receiverAddr.toString()}`);
        } catch (error) {
            console.error("Error during SwapJetton transaction:", error);
        }
    };

    return {
        sendSwapJetton
    };
}
