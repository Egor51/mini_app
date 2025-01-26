import type {FC} from "react";
interface CardProps{
    children: React.ReactNode;
}
export const Card: FC<CardProps> = ({ children }) => {
    return(
        <div className={'my-3 p-3  border rounded-xl mx-auto'}>
            {children}
        </div>

    );
};