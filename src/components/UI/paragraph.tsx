import type {FC} from "react";
import {publicUrl} from "@/helpers/publicUrl.ts";
interface ParagraphProps {

}
export const Paragraph: FC<ParagraphProps> = () => {
    return(
        <div className={'w-[90%] mx-auto my-10'}>
            <img src={publicUrl('logo.png')} className="w-12 h-12 mr-4 float-left" alt="Image description"/>
            <p className={'font-light'}>
                This is some text that wraps around the image. The image is floated to the left, and the text flows
                smoothly around it.
                You can add more content here to see the full effect of the text wrapping around the image.
            </p>
        </div>

    );
};