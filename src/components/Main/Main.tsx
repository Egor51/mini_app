import {FC} from "react";
import {TonConnectButton} from "@tonconnect/ui-react";

export const Main: FC = () => {
    return (
        <div className={'w-[90%] mx-auto'}>

            <div className={'h-36 bg-blue-600 mt-14 rounded-lg'}></div>
            <p className={'text-sm mt-3'}>
                To display the data related to the TON Connect, it is required to connect your
                wallet
                To display the data related to the TON Connect, it is required to connect your
                wallet
            </p>
            <div className="flex items-center justify-center mt-3">
                <TonConnectButton className="ton-connect-page__button"/>
            </div>
            <div className={'h-14 border mt-3 rounded-lg'}></div>
            <div className={'h-14 border mt-3 rounded-lg'}></div>
            <div className={'h-14 border mt-3 rounded-lg'}></div>
            <div className={'h-14 border mt-3 rounded-lg'}></div>

        </div>
    );
}