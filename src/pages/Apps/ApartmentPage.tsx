import {FC, useState} from "react";
import { useParams} from "react-router-dom";
import {publicUrl} from "@/helpers/publicUrl.ts";
import {Button} from "@/components/UI/button.tsx";
import {nftProperties} from "@/components/UI/Nft.tsx";

// Данные для теста (можно заменить на API-запрос)


export const ApartmentPage: FC = () => {
    const {id} = useParams(); // Получаем id апартаментов из URL
    const property = nftProperties.find((p) => p.id === id);
    const [isExpanded, setIsExpanded] = useState(false);

    if (!property) {
        return <p className="text-center text-red-500">Apartment not found!</p>;
    }

    return (
        <div className="mx-auto">
            <div className={'relative'}>
                <img src={publicUrl(property.imageUrl)} alt={property.title} className="w-full mb-4"/>
                <div className={'absolute top-2 right-3 bg-gray-300 h-10 w-40 rounded-lg'}></div>
                <Button className={'absolute top-2 left-3 bg-gray-300 h-10 rounded-lg'} onClick={() => window.history.back()}> back </Button>
            </div>
            <div className={'w-[90%] mx-auto'}>
            <p className="text-lg font-semibold text-blue-300">Price: {property.price} $CAP</p>
            <h1 className="text-xl font-bold">{property.title}</h1>
                <div className={'h-[1px] w-full bg-secondary/30 my-2'}></div>
            <p className="text-secondary">{property.address}</p>
            <p className="text-secondary/60 border rounded-lg px-2 inline-block my-2">{property.param}</p>
                <div className="text-secondary relative">
                    <p className={`overflow-hidden ${isExpanded ? "" : "line-clamp-2"}`}>
                        {property.description}
                    </p>
                    <button
                        className="text-secondary/30 mt-1"
                        onClick={() => setIsExpanded(!isExpanded)}
                    >
                        {isExpanded ? "Скрыть" : "Читать ещё"}
                    </button>
                </div>            <div className="flex gap-3 mt-4">
                <Button className="w-full">Buy Now</Button>
            </div>
            </div>
        </div>
    );
};
