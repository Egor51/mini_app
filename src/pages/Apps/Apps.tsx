import {FC, useEffect, useState} from 'react';
import {publicUrl} from "@/helpers/publicUrl.ts";
import {Jetton} from "@/components/UI/Jetton.tsx";
import {Page} from "@/components/Page.tsx";
import {TonConnectButton, useTonWallet} from "@tonconnect/ui-react";
import {Main} from "@/components/Main/Main.tsx";
import {Nft} from "@/components/UI/Nft.tsx";
import {Info} from "@/components/UI/Info.tsx";


export const Apps: FC = () => {
    const [isLoading, setIsLoading] = useState<boolean>(true); // Добавлено состояние для загрузки
    const wallet = useTonWallet();
    const [activeComponent, setActiveComponent] = useState<string>("jetton"); // Начальное состояние

    const handleButtonClick = (component: string) => {
        console.log('Switching component to:', component ? 'NFT' : 'Jetton');
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

    if (!wallet) {
        console.log('Rendering Main Component');
        return (
            <Main/>
        );
    }

    return (
        <Page>
            <TonConnectButton className="ton-connect-page__button"/>
            <div className={' mx-auto w-[90%]  my-6'}>
                <div className={'flex items-center gap-3'}>
                    <img className={'h-16'} src={publicUrl('logo.png')}/>
                    <div>
                        <p className={'text-xl font-bold '}>Capital City</p>
                        <p className={''}> Build, trade, and conquer the city’s real estate market.</p>
                    </div>
                </div>
            </div>

            <div className="flex justify-between items-center mx-auto max-w-[90%] ">
                <button
                    className={`w-1/3 text-secondary text-lg text-center py-2 ${
                        activeComponent === 'nft' ? 'text-blue-600 border-b-2 border-blue-600' : ''
                    }`}
                    onClick={() => handleButtonClick('nft')}
                >
                    Nft
                </button>
                <button
                    className={`w-1/3 text-secondary text-lg text-center py-2 ${
                        activeComponent === 'jetton' ? 'text-blue-600 border-b-2 border-blue-600' : ''
                    }`}
                    onClick={() => handleButtonClick('jetton')}
                >
                    Jettons
                </button>
                <button
                    className={`w-1/3 text-secondary text-lg text-center py-2 ${
                        activeComponent === 'info' ? 'text-blue-600 border-b-2 border-blue-600' : ''
                    }`}
                    onClick={() => handleButtonClick('info')}
                >
                    Info
                </button>
            </div>


            <div>
                {activeComponent === 'jetton' && <Jetton/>}
                {activeComponent === 'nft' && <Nft/>}
                {activeComponent === 'info' && <Info/>}
            </div>
        </Page>
    );
};
