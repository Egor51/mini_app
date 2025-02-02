import React from 'react';
import {publicUrl} from "@/helpers/publicUrl.ts";
import {Button} from "@/components/UI/button.tsx";
import {useNavigate} from "react-router-dom";

interface NFTCardProps {
    id: string;
    imageUrl: string;
    title: string;
    address: string;
    param: string;
    price: string;
    onBuy?: () => void;
}

export const NFTCard: React.FC<NFTCardProps> = ({imageUrl, title, address, param, price,id}) => {

    const navigate = useNavigate();

    return (
        <>
            <div className="flex items-center mx-auto my-4">
                {/* Image Section */}
                <img src={publicUrl(imageUrl)} alt={title} className="h-full w-24 rounded-lg mr-4"/>
                {/* Details Section */}
                <div className="flex-1">
                    <p className="text-sm font-bold">{title}</p>
                    <p className="font-light text-secondary/60">{address}</p>
                    <p className="text-secondary/60">{param}</p>
                    <p className="text-sm font-medium text-blue-300">price: {price} $CAP</p>
                </div>
            </div>
            <div className={'flex gap-3'}>
                <Button variant="outline" className="w-full" onClick={() => navigate(`/apartment/${id}`)}>
                    About {title}
                </Button>            <Button variant={'outline'} ><img className={'w-6'} src={publicUrl('love.png')}/></Button>
            </div>
        </>
    );
};
