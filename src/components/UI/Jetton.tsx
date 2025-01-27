import {FC, useEffect, useState} from 'react';
import {Page} from "@/components/Page.tsx";
import {Logo} from "@/components/UI/Logo.tsx";
import {Input} from "@/components/UI/input.tsx";
import {HeadLine} from "@/components/UI/headline.tsx";
import {Card} from "@/components/UI/Card.tsx";
import {Button} from "@/components/UI/button.tsx";
import {Address, toNano} from "@ton/core";
import {TonConnectButton, useTonWallet} from "@tonconnect/ui-react";
import {useSwapContract} from "@/hooks/useMainContract.ts";
import {useTonConnect} from "@/hooks/useTonConnect.ts";
import {publicUrl} from "@/helpers/publicUrl.ts";
import {Paragraph} from "@/components/UI/paragraph.tsx";
import {useTonClient} from "@/hooks/useTonClient.ts";
import {Main} from "@/components/Main/Main.tsx";


export const Jetton: FC = () => {
    const wallet = useTonWallet();
    const client = useTonClient()
    const {sendSwapJetton} = useSwapContract();
    const {sender} = useTonConnect(); // Вызов безусловно
    const [inputValue, setInputValue] = useState<string>("0");
    const [jettonAmount, setJettonAmount] = useState<number>(0);
    const [balance, setBalance] = useState<string | null>(null);

    useEffect(() => {
        const fetchBalance = async () => {
            if (!client || !wallet) return
            if (wallet) {
                try {
                    const walletAddress = wallet?.account?.address || ''
                    const balanceNano = await client.getBalance(Address.parse(walletAddress)); // Баланс в нанотонах
                    const balanceInTon = Number(balanceNano) / 1e9;
                    setBalance(balanceInTon.toFixed(4));
                } catch (error) {
                    console.error("Ошибка при получении баланса:", error);
                }
            }
        };
        fetchBalance();
    }, [wallet, client]);



    function extracted(input: string) {
        setInputValue(input); // Обновляем строковое значение
        const numericValue = parseFloat(input) || 0;
        // Преобразуем в число для вычислений
        setJettonAmount(numericValue * 100); // Обновляем jettonAmount
    }

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const input = event.target.value;
        if (/^\d*\.?\d*$/.test(input)) {
            extracted(input);
        }
    };
    function approve (value: number, ){
        return !(isNaN(value) || value <= 0 || value > Number(balance) || value <= 0.01);
    }
    const submitHandler = async () => {
        const value = parseFloat(inputValue);
        if (!approve(value)) {
            return;
        }
        try {
            const walletAddress = wallet?.account?.address || '';
            await sendSwapJetton(sender, toNano(value.toString()), walletAddress); // Ожидаем выполнение транзакции
            console.log("Swap transaction successful");
        } catch (error) {
            console.error("Error during swap transaction:", error);
        }
        console.log("Input Value:", inputValue);
    };


    return (
        <>
            <div className={'mx-auto max-w-[90%]'}>
                <div className={'mx-auto rounded-xl  shadow-black  px-3 py-3 bg-gradient-to-r from-blue-700 to-blue-900 my-6'}>
                    <p className="text-sm font-semibold">Jetton $Capital</p>
                    <p className="text-[12px] mt-1">
                        Current price: 0.5 TON. Early buyers get the best deal before the game launch!
                    </p>
                </div>
                <div className={'relative'}>
                    <Card>
                        <HeadLine
                            title={'Send'}
                            balance={balance}
                            max={'Max'}
                            onclick={() => {
                                if (balance) {
                                    // Применяем логику как в handleInputChange

                                    const bl = Number(balance) - 0.03
                                    if (bl <= 0) {
                                        extracted("0");
                                    }
                                    bl.toFixed(4)
                                    extracted(bl.toFixed(4).toString());
                                }
                            }
                            }
                        />
                        <div className={'flex gap-3 items-center justify-between'}>
                            <Logo
                                url={'ton.png'}
                                title={'Ton'}
                            />
                            <Input
                                type={'text'}
                                className={'max-w-32 h-12 text-2xl text-end font-bold'}
                                value={inputValue}
                                onChange={handleInputChange}
                            />

                        </div>
                    </Card>
                    <div
                        className="absolute left-1/2 transform -translate-x-1/2 -translate-y-[calc(50%+6px)] h-6 w-6 rounded-full bottom border-primary bg-secondary">
                        <img src={publicUrl('exchange.png')} alt="Ton" className="w-6 h-6 p-1" onClick={() => {
                            alert("Listing plane to 10.01.2025");
                        }}/>
                    </div>
                    <Card>
                        <HeadLine
                            title={'Receive'}
                            balance={"0"}
                        />
                        <div className={'flex items-center justify-between'}>
                            <Logo
                                url={'logo.png'}
                                title={'Traffic'}
                            />
                            <p className={'mr-3 text-xl '}>{jettonAmount}</p>
                        </div>
                    </Card>
                </div>
                <div className="flex justify-center mt-3">
                    <Button className={'w-full h-12 bg-blue-600 hover:bg-blue-900'}
                            onClick={submitHandler}
                            disabled={!approve(parseFloat(inputValue))}
                    >Swap</Button>
                </div>
                <Paragraph img={'logo.png'}
                           text={'Yo, getting in on $Capital now is like finding gold before everyone else shows up. Early birds snag tokens at a sweet discount, and once the game drops, demand’s gonna skyrocket. Translation: your $Capital could be worth way more.'}/>
                <Paragraph img={'logo.png'}
                           text={'Think of $Capital as your VIP pass to owning the game. You’ll use these tokens to buy exclusive NFT properties, fund big-time building projects, and rake in that passive income. Start stacking now, and future-you will thank you.'}/>
                <Paragraph img={'logo.png'}
                           text={'Here’s the deal—$Capital isn’t infinite. Early adopters get dibs on shaping the game’s economy. As more players join and the hype builds, token value could shoot up faster than a meme stock. Don’t sleep on this one.'}/>
            </div>
        </>
    );
};
