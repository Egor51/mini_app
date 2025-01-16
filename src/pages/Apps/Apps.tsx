import {FC, useEffect, useState} from 'react';
import {Page} from "@/components/Page.tsx";
import {Logo} from "@/components/UI/Logo.tsx";
import {Input} from "@/components/UI/input.tsx";
import {HeadLine} from "@/components/UI/headline.tsx";
import {Card} from "@/components/UI/Card.tsx";
import {Button} from "@/components/UI/button.tsx";
import { toNano} from "@ton/core";
import {TonConnectButton, useTonWallet} from "@tonconnect/ui-react";
import {useSwapContract} from "@/hooks/useMainContract.ts";
import {useTonConnect} from "@/hooks/useTonConnect.ts";
import {Placeholder, Text} from "@telegram-apps/telegram-ui";
import {publicUrl} from "@/helpers/publicUrl.ts";
import {Paragraph} from "@/components/UI/paragraph.tsx";

export const Apps: FC = () => {
    const wallet = useTonWallet();
    const { sendSwapJetton } = useSwapContract(); // Вызов безусловно
    const { sender } = useTonConnect(); // Вызов безусловно
    const [inputValue, setInputValue] = useState<string>("0");
    const [jettonAmount, setJettonAmount] = useState<number>(0);
    const [isLoading, setIsLoading] = useState<boolean>(true); // Добавлено состояние для загрузки
    const [balance, setBalance] = useState<number>(0);



    useEffect(() => {
        // Эмуляция задержки для загрузки страницы
        const timeout = setTimeout(() => {
            setIsLoading(false); // Отключаем индикатор загрузки
        }, 1500); // Устанавливаем время загрузки 1.5 секунды

        return () => clearTimeout(timeout); // Чистим таймаут при размонтировании
    }, []);

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const input = event.target.value.trim() || "0"; // Удаляем пробелы, устанавливаем "0" если пусто
        let value = parseFloat(input);
        if (isNaN(value) || value < 0) {
            value = 0; // Устанавливаем 0, если значение отрицательное или некорректное
        }
        setInputValue(value.toString()); // Обновляем значение в инпуте
        setJettonAmount(value * 100); // Обновляем JettonAmount
    };

    const submitHandler = async () => {
        const value = parseFloat(inputValue);
        if (isNaN(value) || value <= 0) {
            alert("Jetton amount must be greater than 0");
            return;
        }
        try {
            const walletAddress = wallet?.account?.address || ''; // Безопасный доступ
            await sendSwapJetton(sender, toNano(value.toString()), walletAddress); // Ожидаем выполнение транзакции
            console.log("Swap transaction successful");
        } catch (error) {
            console.error("Error during swap transaction:", error);
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
            <div className={'mx-auto max-[90%]'}>
                <p className={'w-[90%] mx-auto text-xl font-bold mt-3'}>Buy Jetton</p>
                <p className={'w-[90%] mx-auto '}>This is some text that wraps around the image.
                    The image is floated to the left</p>
                <div className={'w-[90%] h-64 bg-blue-600 mx-auto rounded-xl my-3'}></div>
                <div className={'relative'}>
                    <Card>
                        <HeadLine
                            title={'Send'}
                            balance={balance}
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
                    <div className="absolute left-1/2 transform -translate-x-1/2 -translate-y-[calc(50%+6px)] h-6 w-6 rounded-full bottom border-primary bg-secondary">
                        <img src={publicUrl('exchange.png')} alt="Ton" className="w-6 h-6 p-1" onClick={()=> {
                            alert("Listing plane to 10.01.2025");
                        }}/>
                    </div>
                    <Card>
                        <HeadLine
                            title={'Receive'}
                            balance={balance}
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
                    <Button className={'w-[90%] h-12 bg-blue-600 hover:bg-blue-900'}
                            onClick={submitHandler}>Swap</Button>
                </div>
                <Paragraph/>
                <Paragraph/>
                <Paragraph/>
            </div>
        </Page>
    );
};
