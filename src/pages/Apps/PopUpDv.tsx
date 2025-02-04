import { FC, useState, useEffect } from "react";
import {Button} from "@/components/UI/button.tsx";

export const DevelopmentPopup: FC = () => {
    const [isPopupVisible, setPopupVisible] = useState(false);

    useEffect(() => {
        // Показываем попап через 15 секунд
        const timer = setTimeout(() => {
            setPopupVisible(true);
        }, 15000);

        return () => clearTimeout(timer); // Удаляем таймер при размонтировании компонента
    }, []);

    const handleClose = () => {
        setPopupVisible(false);
    };

    return (
        <>
            {isPopupVisible && (
                <div className="fixed top-0 left-0 w-full h-full bg-black/50 flex items-center justify-center z-50">
                    <div className="bg-white rounded-lg shadow-lg p-6 max-w-md w-[90%]">
                        <h2 className="text-xl font-bold text-blue-600 mb-4">Welcome to Capital City!</h2>
                        <p className="text-md text-gray-700 mb-4">
                            We’re thrilled to have you here at the very start of our journey! 🚀 This game is in the early stages of development, and your feedback can shape its future.
                        </p>
                        <Button
                            onClick={handleClose}
                            className="bg-blue-600 text-white px-4 py-2 rounded-lg w-full font-semibold">
                            Close
                        </Button>

                        <Button
                            className="w-full bg-blue-600 text-white my-2"
                            onClick={() => {
                                alert("The marketplace is still under development. Join our Telegram channel, and we will notify you about the launch!");
                                window.open("https://t.me/my_traffic_group", "_blank");
                            }}
                        >
                            Join Community
                        </Button>
                    </div>
                </div>
            )}
        </>
    );
};
