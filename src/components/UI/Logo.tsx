import type {FC} from "react";
import {publicUrl} from "@/helpers/publicUrl.ts";
interface LogoProps{
    url: string;
    title: string;
}
export const Logo: FC<LogoProps> = ({ url, title }) => {
    return(
            <div>
                <div className={'flex items-center gap-1'}>
                    <img className={'h-10 w-10 p-1'} src={publicUrl(url)}/>
                    <p>{title}</p>
                </div>
            </div>

    );
};