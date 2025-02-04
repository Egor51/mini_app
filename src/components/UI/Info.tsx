import { FC } from "react";
import {Button} from "@/components/UI/button.tsx";

export const Info: FC = () => {
    return (
        <div className="w-[90%] mx-auto my-6">
            <h1 className="text-2xl font-bold text-blue-600 mb-4">Welcome to Capital City</h1>
            <p className="text-md mb-6">
                <strong>Capital City</strong> is the ultimate real estate management game where you build your empire, one property at a time! Buy, sell, and upgrade properties as NFTs, earn daily income, and become the top real estate tycoon.
            </p>

            <h2 className="text-lg font-semibold text-blue-500 mb-3">Your Journey</h2>
            <p className="text-md mb-6">
                Start by purchasing properties as NFTs: houses, apartments, office buildings, or land plots, all using the in-game currency $CAP. Each property generates daily income, helping you grow your wealth and expand your portfolio.
            </p>

            <h2 className="text-lg font-semibold text-blue-500 mb-3">Key Features</h2>
            <div className="mb-6">
                <h3 className="text-md font-semibold mb-2">1. Real Estate Investment</h3>
                <ul className="list-disc pl-6 mb-4">
                    <li>Acquire various properties (residential, commercial, and land).</li>
                    <li>Earn passive daily income based on the type and value of your properties.</li>
                    <li>Upgrade buildings to increase their revenue potential.</li>
                    <li>Construct new buildings on land plots to unlock additional income streams.</li>
                </ul>

                <h3 className="text-md font-semibold mb-2">2. Renting and Leasing</h3>
                <ul className="list-disc pl-6 mb-4">
                    <li>Not ready to buy? Rent properties to get started and ensure you have a place to live or run your business.</li>
                    <li>Earn extra income by leasing your properties to other players.</li>
                </ul>

                <h3 className="text-md font-semibold mb-2">3. Start Your Own Business</h3>
                <ul className="list-disc pl-6 mb-4">
                    <li>Open companies and earn additional revenue.</li>
                    <li>To start a business, you'll need an office space, which can be purchased or rented.</li>
                </ul>

                <h3 className="text-md font-semibold mb-2">4. Strategic Upgrades</h3>
                <ul className="list-disc pl-6">
                    <li>Improve the quality of your buildings, enhance facilities, and boost your earnings.</li>
                    <li>Develop a long-term strategy for maximizing your assets and revenue.</li>
                </ul>
            </div>

            <h2 className="text-lg font-semibold text-blue-500 mb-3">Community and Interaction</h2>
            <p className="text-md mb-6">
                Collaborate and compete with other players to dominate the real estate market. Engage in trades, share resources, and climb the leaderboards as you become a tycoon in Capital City!
            </p>

            <h2 className="text-lg font-semibold text-blue-500 mb-3">The Goal</h2>
            <p className="text-md">
                Build your dream empire, from cozy homes to bustling business centers. Whether you focus on residential properties, land development, or running a business, the choice is yours. The city is waiting for your vision!
            </p>

            <div className="mt-6">
                <h2 className="text-lg font-semibold text-blue-500 mb-3">Why Capital City?</h2>
                <p className="text-md">
                    Capital City isn’t just a game—it’s a lifestyle. You’re not just playing; you’re investing in NFTs that bring passive income straight to your wallet in $CAP. It’s a mix of strategy, business, and the thrill of building your empire in a decentralized economy.
                </p>
            </div>
            <Button
                className="w-full bg-blue-600 text-white my-6"
                onClick={() => {
                    alert("The marketplace is still under development. Join our Telegram channel, and we will notify you about the launch!");
                    window.open("https://t.me/my_traffic_group", "_blank");
                }}
            >
                Join Community
            </Button>
        </div>
    );
};
