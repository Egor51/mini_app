import type {FC} from "react";
interface HeadLineProps{
    title: string;
    balance: string | null; // Допускаем null
    max?: string;
    onclick?: () => void; // Допускаем функцию
}
export const HeadLine: FC<HeadLineProps> = ({title, balance,max,onclick}) => {
    const count = balance === null ? "0" : balance;
    return (
        <div className={'flex justify-between text-[12px] font-light p-1'}>
            <p className={''}>
                {title}
            </p>
            <div className={'flex gap-3'}>
                <p>
                    balance: {count.toString()}
                </p>
                <p onClick={onclick} className={'text-blue-300'}>
                    {max}
                </p>
            </div>
        </div>

    );
};