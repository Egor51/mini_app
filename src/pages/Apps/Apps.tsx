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
            <div className={'bg-background w-full'}>
            <TonConnectButton className="ton-connect-page__button"/>
            <div className={' mx-auto w-[90%]  mt-4'}>
                <div className={'flex items-start gap-3'}>
                    {/*<img className={'h-10 mt-1'} src={publicUrl('logo.png')}/>*/}
                    <div className={'h-12 w-12 bg-blue-600 mt-1 rounded'}></div>
                    <div>
                        <p className={'text-sm font-bold '}>Capital City</p>
                        <p className={'text-[12px] w-2/3 text-secondary/50'}> Build, trade, and conquer the city’s real estate market</p>
                    </div>
                </div>
            </div>

            <div className="flex justify-between items-center mx-auto max-w-[90%] mt-3 mb-1">
                <button
                    className={`w-1/3 text-secondary/30 text-lg text-center  ${
                        activeComponent === 'nft' ? 'text-secondary/50 border-b-2 border-secondary/50 ' : ''
                    }`}
                    onClick={() => handleButtonClick('nft')}
                >
                    Nft
                </button>
                <button
                    className={`w-1/3 text-secondary/30 text-lg text-center  ${
                        activeComponent === 'jetton' ? 'text-secondary/50 border-b-2 border-secondary/50 ' : ''
                    }`}
                    onClick={() => handleButtonClick('jetton')}
                >
                    Jettons
                </button>
                <button
                    className={`w-1/3 text-secondary/30 text-lg text-center  ${
                        activeComponent === 'info' ? 'text-secondary/50 border-b-2 border-secondary/50 ' : ''
                    }`}
                    onClick={() => handleButtonClick('info')}
                >
                    Info
                </button>
            </div>

            </div>
            <div className={'bg-background'}>
                {activeComponent === 'jetton' && <Jetton/>}
                {activeComponent === 'nft' && <Nft/>}
                {activeComponent === 'info' && <Info/>}
            </div>
        </Page>
    );
};
