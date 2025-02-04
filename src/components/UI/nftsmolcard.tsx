import React from 'react';
import {publicUrl} from "@/helpers/publicUrl.ts";
import {Button} from "@/components/UI/button.tsx";
import {Link, useNavigate} from "react-router-dom";

interface NFTCardProps {
    id: string;
    imageUrl: string;
    title: string;
    address: string;
    param: string [];
    price: string;
    onBuy?: () => void;
}

export const NFTCard: React.FC<NFTCardProps> = ({imageUrl, title, address, param, price,id}) => {


    return (

            <Link to={`/apartment/${id}`}>
            <div className="flex items-center mx-auto my-4">
                {/* Image Section */}
                <img src={publicUrl(imageUrl)} alt={title} className="h-full w-24 rounded-lg mr-4"/>
                {/* Details Section */}
                <div className="flex-1">
                    <p className="text-sm font-bold">{title}</p>
                    <p className=" text-sm font-light text-secondary/60">{address}</p>
                    <div className={'flex gap-2 my-1'}>
                       <p className=" text-[12px] text-secondary/60 border inline-block py-1 px-2 rounded-lg">{param[0]}</p>
                       <p className=" text-[12px] text-secondary/60 border inline-block py-1 px-2 rounded-lg">{param[1]}</p>
                    </div>
                    <p className="text-sm font-medium text-blue-300">price: {price}</p>
                </div>
            </div>
            </Link>
    );
};
