import {FC, useEffect, useState} from 'react';
import {publicUrl} from "@/helpers/publicUrl.ts";
import {Jetton} from "@/components/UI/Jetton.tsx";
import {TonConnectButton} from "@tonconnect/ui-react";
import {initData, useSignal} from '@telegram-apps/sdk-react';

import {Nft} from "@/components/UI/Nft.tsx";
import {Info} from "@/components/UI/Info.tsx";
import {sendUserVisit} from "../../../api/newUser.ts";


const buttons = [
    { id: "nft", label: "Nft" },
    { id: "jetton", label: "Jettons" },
    { id: "info", label: "Info" }
];


export const Apps: FC = () => {
    const [isLoading, setIsLoading] = useState<boolean>(true); // Добавлено состояние для загрузки
    const [activeComponent, setActiveComponent] = useState<string>("jetton"); // Начальное состояние
    const initDataState = useSignal(initData.state);
    useEffect(() => {
        if (initDataState?.user) {
            const chatId = initDataState?.user?.id?.toString();
            console.log(chatId)
            if(chatId){
                sendUserVisit(chatId.toString());
            } else {
                console.log("No chatId")
            }

        }
    }, [initDataState?.user]);


    const handleButtonClick = (component: string) => {
        setActiveComponent(component); // Обновляем состояние
    };

    useEffect(() => {
        const timeout = setTimeout(() => {
            setIsLoading(false); // Отключаем индикатор загрузки
        }, 1500); // Устанавливаем время загрузки 1.5 секунды
        return () => clearTimeout(timeout); // Чистим таймаут при размонтировании
    }, []);


    if (isLoading) {
        return (
            <div className="flex items-center justify-center h-screen">
                <img src={publicUrl('logo.png')} alt="Loading..." className="h-24 w-24"/>
            </div>
        );
    }

    return (
        <div>
            <div className="flex items-center justify-center my-1">
                <TonConnectButton className="ton-connect-page__button"/>
            </div>
            <div className={' mx-auto w-[90%]  mt-4 '}>
                <div className={'flex items-start gap-3'}>
                    <img className={'h-12 w-12  mt-1 rounded'} src={publicUrl('city.png')}/>
                    <div>
                        <p className={'text-sm font-bold '}>Capital City</p>
                        <p className={'text-[12px] w-2/3 text-secondary/50'}> Build, trade, and conquer the city’s real estate market</p>
                    </div>
                </div>
            </div>
                {/*<ThemeToggleButton/>*/}
            <div className="flex justify-between items-center mx-auto max-w-[90%] mt-6 mb-1 text-secondary/30">
                {buttons.map((button) => (
                    <button
                        key={button.id}
                        className={`w-1/3 text-lg text-center ${
                            activeComponent === button.id ? "text-secondary border rounded-lg border-secondary" : ""
                        }`}
                        onClick={() => handleButtonClick(button.id)}
                    >
                        {button.label}
                    </button>
                ))}
            </div>
            <div className={'mt-3'}>
                {activeComponent === 'jetton' && <Jetton/>}
                {activeComponent === 'nft' && <Nft/>}
                {activeComponent === 'info' && <Info/>}
            </div>
        </div>
    );
};
