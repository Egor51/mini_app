import type {FC} from "react";
import {publicUrl} from "@/helpers/publicUrl.ts";
import {cn} from "@/lib/utils";
interface LogoProps{
    url: string;
    title: string;
    className?: string;
}
export const Logo: FC<LogoProps> = ({ url, title, className }) => {
    return(
                <div className={cn('flex items-center gap-1',className)}>
                    <img className={'h-10 w-10 p-1'} src={publicUrl(url)}/>
                    <p>{title}</p>
                </div>
    );
};