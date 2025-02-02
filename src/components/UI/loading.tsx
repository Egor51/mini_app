import {publicUrl} from "@/helpers/publicUrl.ts";

export const Loading = () => {
    return (
        <div className={'bg-background h-lvh w-full flex items-center justify-center '}>
              <img src={publicUrl('city.png')} className={'h-32 rounded-full'}/>
        </div>
    );
};