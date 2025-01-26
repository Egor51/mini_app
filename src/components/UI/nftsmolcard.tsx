import React from 'react';
import {publicUrl} from "@/helpers/publicUrl.ts";
import {Button} from "@/components/UI/button.tsx";

interface NFTCardProps {
    imageUrl: string;
    title: string;
    address: string;
    param: string;
    price: string;
    onBuy?: () => void;
}

export const NFTCard: React.FC<NFTCardProps> = ({imageUrl, title, address, param, price, onBuy}) => {
    return (
        <>
            <div className="flex items-center mx-auto my-4">
                {/* Image Section */}
                <img src={publicUrl(imageUrl)} alt={title} className="h-full w-24 rounded-lg mr-4"/>
                {/* Details Section */}
                <div className="flex-1">
                    <p className="font-bold">{title}</p>
                    <p className="font-light">{address}</p>
                    <p className="">{param}</p>
                    <p className=" font-semibold">{price}</p>
                </div>
            </div>
            <Button variant={'outline'} className={'w-full'}>Buy</Button>
        </>
    );
};
