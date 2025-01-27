import type {FC} from "react";
import {publicUrl} from "@/helpers/publicUrl.ts";
interface ParagraphProps {
img: string;
text: string;
}
export const Paragraph: FC<ParagraphProps> = ({img, text}) => {
    return(
        <div className={' mx-auto my-10'}>
            <img src={publicUrl(img)} className="w-12 h-12 mr-4 float-left" alt="Image description"/>
            <p className={'font-light text-sm'}>
                {text}
            </p>
        </div>

    );
};