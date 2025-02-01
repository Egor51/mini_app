import {FC} from "react";
import {Paragraph} from "@/components/UI/paragraph.tsx";
import {NFTCard} from "@/components/UI/nftsmolcard.tsx";
import {CardInfo} from "@/components/UI/CardInfo.tsx";
import {publicUrl} from "@/helpers/publicUrl.ts";

const paragraphTexts = [
    "Discover the future of real estate with NFT technology. Each property in Capital City is a unique, blockchain-backed NFT that you truly own. Invest in apartments, lofts, or commercial spaces, and turn your virtual assets into real income in $Capital.",
    // "Owning an NFT property in Capital City isn’t just about style—it’s about strategy. Rent out your properties for passive income, sell them when the market peaks, or hold them as valuable long-term investments. The city’s growth is your growth!",
    // "Take your first step into the decentralized economy. Explore, buy, and trade NFT properties today and secure your place in the ever-expanding world of Capital City. The future is digital, and you’re at the forefront."
];

export const Nft: FC = () => {
    const nftProperties = [
        {
            imageUrl: "ofice.png",
            title: "Luxury Apartment",
            address: "Downtown City Center",
            param: "2 Rooms, 120 sqm",
            price: "120,000"
        },
        {
            imageUrl: "house-lux.png",
            title: "Modern Loft",
            address: "Uptown District 12, 1A 4/12",
            param: "1 Room, 80 sqm",
            price: "120,000"
        },
        {
            imageUrl: "house-lux2.png",
            title: "Penthouse Suite",
            address: "Skyline Tower, Level 42",
            param: "3 Rooms, 200 sqm",
            price: "120,000"
        }
    ];

    return (
        <div className={'mx-auto w-[90%]'}>
            <CardInfo
                // className={'my-3'}
                title={'NFT Marketplace'}
                description={'The NFT Marketplace will be live soon! Get ready to explore, buy, and trade unique properties to\n' +
                    '                    grow your virtual real estate empire.'}/>
            <div className={'h-10 w-full border-[0.5px] border-secondary/30 rounded-lg mt-3 flex justify-between px-3 items-center'}
            >
                    <p className={'text-[12px] text-secondary/30'}>Adds: {nftProperties.length} count</p>
                    <img src={publicUrl('filter.png')} className={'h-4'}/>
            </div>
            {nftProperties.map((property, index) => (
                <NFTCard
                    key={index}
                    imageUrl={property.imageUrl}
                    title={property.title}
                    address={property.address}
                    param={property.param}
                    price={property.price}
                />
            ))}

            {paragraphTexts.map((text, index) => (
                <Paragraph key={index} img={'paragraf.png'} text={text}/>
            ))}        </div>
    );
}