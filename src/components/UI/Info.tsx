import { FC } from "react";

export const Info: FC = () => {
    const advantages = [
        "Buy and sell real estate like a boss and make that sweet profit.",
        "Get involved in building projects and shape the city's future.",
        "Rent out your properties for some solid passive income.",
        "Every property is a unique NFT that earns you $Capital over time.",
        "Fully integrated with the TON blockchain for fast and secure transactions.",
        "Play anywhere—mobile or desktop, your city never stops growing.",
    ];

    return (
        <div>
            {/*<div className={'w-[90%] h-36 bg-blue-600 mx-auto rounded-xl my-3'}></div>*/}

            <div className="w-[90%] mx-auto my-6">
                <h1 className="text-lg font-bold text-blue-600 mb-4">About</h1>
                <p className="text-md mb-4">
                    <strong>Capital City</strong> is the ultimate economic strategy game where you become the real
                    estate tycoon you always dreamed of. Buy, sell, and rent properties, or invest in building epic
                    skyscrapers. The twist? Every piece of real estate is an NFT that earns you real $Capital tokens
                    while you chill.
                </p>
                <div>
                    <h2 className="text-md font-semibold mb-2">Why This Game Slaps</h2>
                    <ul className="list-disc pl-6">
                        {advantages.map((advantage, index) => (
                            <li key={index} className="mb-2">
                                {advantage}
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="mt-4">
                    <h2 className="text-md font-semibold mb-2">Why Capital City is a Game-Changer</h2>
                    <p className="">
                        Capital City isn’t just a game—it’s a lifestyle. You’re not just playing; you’re investing in
                        NFTs that bring passive income straight to your wallet in $Capital. It’s a mix of strategy,
                        business, and the thrill of building your empire in a decentralized economy. This game hits
                        different, and your inner mogul will thank you for playing.
                    </p>
                </div>
            </div>
        </div>
    );
};
