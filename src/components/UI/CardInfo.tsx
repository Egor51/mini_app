import {FC, useState} from "react";
import {cn} from "@/lib/utils.ts";
import {publicUrl} from "@/helpers/publicUrl.ts";

interface CardInfoProps {
    title: string;
    description: string;
    className?: string;
}

export const CardInfo: FC<CardInfoProps> = ({title, description, className}) => {

    const [active, setActive] = useState<boolean>(true);
    const activate = () => {
        if (!active) {
            setActive(true)
        } else {
            setActive(false)
        }
    };


    if (!active) {
        return null;
    }
    return (
        <div
            className={cn('mx-auto rounded-xl  shadow-black  px-3 py-3 bg-gradient-to-r from-blue-500 to-blue-800 relative', className)}>
            <p className="text-sm font-semibold text-white">{title}</p>
            <p className="text-[12px] mt-1 text-white">
                {description}
            </p>
            <button className={'absolute right-1 top-1 p-1'}
                    onClick={activate}
            >
                <img src={publicUrl('close.png')} className={'h-4'}/>
            </button>
        </div>

    );
};