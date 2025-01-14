import {FC, useEffect, useState} from 'react';
import {Page} from "@/components/Page.tsx";
import {Logo} from "@/components/UI/Logo.tsx";
import {Input} from "@/components/UI/input.tsx";
import {HeadLine} from "@/components/UI/headline.tsx";
import {Card} from "@/components/UI/Card.tsx";
import {Button} from "@/components/UI/button.tsx";
import {toNano} from "@ton/core";
import {TonConnectButton, useTonWallet} from "@tonconnect/ui-react";
import {useSwapContract} from "@/hooks/useMainContract.ts";
import {useTonConnect} from "@/hooks/useTonConnect.ts";
import {Placeholder, Text} from "@telegram-apps/telegram-ui";
import {publicUrl} from "@/helpers/publicUrl.ts";

export const Apps: FC = () => {
    const wallet = useTonWallet();
    const { sendSwapJetton } = useSwapContract(); // Вызов безусловно
    const { sender } = useTonConnect(); // Вызов безусловно
    const [inputValue, setInputValue] = useState<string>("");
    const [jettonAmount, setJettonAmount] = useState<number>(0);
    const [isLoading, setIsLoading] = useState<boolean>(true); // Добавлено состояние для загрузки
    useEffect(() => {
        // Эмуляция задержки для загрузки страницы
        const timeout = setTimeout(() => {
            setIsLoading(false); // Отключаем индикатор загрузки
        }, 1500); // Устанавливаем время загрузки 1.5 секунды

        return () => clearTimeout(timeout); // Чистим таймаут при размонтировании
    }, []);
    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const value = parseFloat(event.target.value); // Преобразуем строку в число
        setInputValue(event.target.value);
        setJettonAmount(value * 100); // Умножаем на 100
    };

    const submitHandler = () => {
        const handleSwap = async () => {
            try {
                const walletAddress = wallet?.account?.address || ''; // Безопасный доступ
                await sendSwapJetton(sender, toNano(inputValue), walletAddress);
            } catch (error) {
                console.error("Error during swap transaction:", error);
            }
        };
        const value = parseFloat(inputValue);
        if(value <= 0){
            alert("Jetton amount must be greater than 0")
        } else{
            handleSwap()
        }
        console.log("Input Value:", inputValue);
    };


    if (isLoading) {
        return (
            <div className="flex items-center justify-center h-screen">
                <img src={publicUrl('logo.png')} alt="Loading..." className="h-24 w-24" />
            </div>
        );
    }
    if (!wallet) {
        return (
            <Page>
                <Placeholder
                    className="ton-connect-page__placeholder"
                    header="MyTraffic"
                    description={
                        <>

                            <Text>
                                To display the data related to the TON Connect, it is required to connect your
                                wallet
                            </Text>
                            <TonConnectButton className="ton-connect-page__button" />
                        </>
                    }
                />
            </Page>
        );
    }

    return (
        <Page>
            <TonConnectButton className="ton-connect-page__button" />
            <div className={'mx-auto max-w-96'}>
                <Card>
                    <HeadLine
                        title={'Send'}
                        balance={'3.9908'}
                        max={'Max'}
                    />
                    <div className={'flex gap-3 items-center justify-between'}>
                        <Logo
                            url={'logo.png'}
                            title={'Ton'}
                        />
                        <Input
                            type={'number'}
                            className={'max-w-32 h-12 text-xl text-end'}
                            value={inputValue}
                            onChange={handleInputChange}
                        />
                    </div>
                </Card>
                <Card>
                    <HeadLine
                        title={'Receive'}
                        balance={'0'}
                    />
                    <div className={'flex items-center justify-between'}>
                        <Logo
                            url={'logo.png'}
                            title={'Traffic'}
                        />
                        <p className={'mr-3 text-xl'}>{jettonAmount}</p>
                    </div>
                </Card>
                <div className="flex justify-center mt-4">
                    <Button className={'w-[90%] h-12 bg-blue-600 hover:bg-blue-900'}
                            onClick={submitHandler} >Swap</Button>
                </div>
            </div>
        </Page>
    );
};
