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
                        <p className={''}>This is some text that wraps around the image.
                            The image is floated to</p>
                    </div>
                </div>
            </div>

            <div className="flex space-x-2 justify-around items-center mx-auto max-[90%]">
                {/* Кнопка для переключения на Jetton */}
                <button
                    className={`text-secondary ${
                        activeComponent === 'jetton' ? 'text-blue-600 border-b-2 border-blue-600 rounded-0' : ''
                    }`}
                    onClick={() => handleButtonClick('jetton')}
                >
                    Jettons
                </button>
                {/* Кнопка для переключения на NFT */}
                <button
                    className={`text-secondary ${
                        activeComponent === 'nft' ? 'text-blue-600 border-b-2 border-blue-600 rounded-0' : ''
                    }`}
                    onClick={() => handleButtonClick('nft')}
                >
                    NftMarket
                </button>
                <button
                    className={`text-secondary ${
                        activeComponent === 'info' ? 'text-blue-600 border-b-2 border-blue-500 rounded-0' : ''
                    }`}
                    onClick={() => handleButtonClick('info')}
                >
                    InfoProject
                </button>
            </div>
            <div className={'w-[90%] h-36 bg-blue-600 mx-auto rounded-xl my-3'}></div>


            <div>
                {activeComponent === 'jetton' && <Jetton/>}
                {activeComponent === 'nft' && <Nft/>}
                {activeComponent === 'info' && <Info/>}
            </div>
        </Page>
    );
};
