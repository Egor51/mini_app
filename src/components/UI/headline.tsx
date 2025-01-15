import type {FC} from "react";
interface HeadLineProps{
    title: string;
    balance: number;
    max?: string;
}
export const HeadLine: FC<HeadLineProps> = ({title, balance,max}) => {
    const count = balance === null ? null : balance;
    return (
        <div className={'flex justify-between text-[12px] font-light p-1'}>
            <p className={''}>
                {title}
            </p>
            <div className={'flex gap-3'}>
                <p>
                    balance: {count}
                </p>
                <p>
                    {max}
                </p>
            </div>
        </div>

    );
};