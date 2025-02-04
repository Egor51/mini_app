import {FC, useEffect, useState} from "react";
import {useNavigate, useParams} from "react-router-dom";
import {publicUrl} from "@/helpers/publicUrl.ts";
import {Button} from "@/components/UI/button.tsx";
import {nftProperties} from "@/components/UI/Nft.tsx";
import {backButton} from "@telegram-apps/sdk-react";

export const Apartment: FC = () => {
    const {id} = useParams(); // Получаем id апартаментов из URL
    const property = nftProperties.find((p) => p.id === id);
    const [isExpanded, setIsExpanded] = useState(false);
    const navigate = useNavigate();

    if (!property) {
        return <p className="text-center text-red-500">Apartment not found!</p>;
    }
    useEffect(() => {
        backButton.show(); // Показываем кнопку "Назад" в Telegram

        const handleBackClick = () => navigate(-1);
        backButton.onClick(handleBackClick);

        return () => {
            backButton.offClick(handleBackClick); // Убираем обработчик при размонтировании
            backButton.hide(); // Скрываем кнопку "Назад"
        };
    }, []);

    return (
        <div className="mx-auto mb-3">
            <div className={'relative'}>
                <img src={publicUrl(property.imageUrl)} alt={property.title} className="w-full mb-4"/>
                {/*<div className={'absolute top-3 left-3 bg-gray-200 rounded-lg px-2'}>*/}
                {/*    <p className={'text-blue-500 text-sm font-bold  '}>Доход по объекту</p>*/}
                {/*    <p className={'text-black text-sm my-1'}>{property.income}</p>*/}
                {/*</div>*/}
                <div className={'absolute bottom-2 right-3 w-40 rounded-lg px-2'}>
                    <div className={'flex items-center justify-around'}>
                        <Button size={'icon'} className={'my-1'}>
                            <img src={publicUrl('Фон-3.png')} className={'h-6'}/>
                        </Button>
                        <Button size={'icon'} className={'my-1'}>
                            <img src={publicUrl('Фон-4.png')} className={'h-6'}/>
                        </Button>
                        <Button size={'icon'} className={'my-1'}>
                            <img src={publicUrl('Фон-5.png')} className={'h-6'}/>
                        </Button>
                    </div>
                </div>
            </div>
            <div className={'w-[90%] mx-auto'}>
                <p className="text-lg font-semibold text-blue-300">Price: {property.price}</p>
                <h1 className="text-xl font-bold">{property.title}</h1>
                <div className={'h-[1px] w-full bg-secondary/30 my-2'}></div>
                <p className="text-secondary"><span className={'text-secondary/30'}>Address: </span>{property.address}
                </p>

                <div className="flex flex-wrap gap-2 my-2">
                    {property.param.map((item, index) => (
                        <span key={index} className="text-secondary/60 border rounded-lg px-2 py-1 inline-block">
            {item.trim()} {/* Убираем лишние пробелы */}
        </span>
                    ))}
                </div>

                <div className="text-secondary relative">
                    <p className={`overflow-hidden ${isExpanded ? "" : "line-clamp-2"}`}>
                        <span className={'text-secondary/30'}>Description: </span>

                        {property.description}
                    </p>
                    <button
                        className="text-secondary/30 mt-1"
                        onClick={() => setIsExpanded(!isExpanded)}
                    >
                        {isExpanded ? "Скрыть" : "Читать ещё"}
                    </button>
                </div>
                <div className="flex gap-3 mt-4">
                    <Button
                        className="w-full bg-blue-600 text-white"
                        onClick={() => {
                            alert("The marketplace is still under development. Join our Telegram channel, and we will notify you about the launch!");
                            window.open("https://t.me/my_traffic_group", "_blank");
                        }}
                    >
                        Buy Now
                    </Button>
                </div>
            </div>
        </div>
    );
};
