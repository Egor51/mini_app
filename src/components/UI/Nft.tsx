import {FC} from "react";
import {Paragraph} from "@/components/UI/paragraph.tsx";
import {NFTCard} from "@/components/UI/nftsmolcard.tsx";
import {CardInfo} from "@/components/UI/CardInfo.tsx";
import {publicUrl} from "@/helpers/publicUrl.ts";

const paragraphTexts = [
    "Discover the future of real estate with NFT technology. Each property in Capital City is a unique, blockchain-backed NFT that you truly own. Invest in apartments, lofts, or commercial spaces, and turn your virtual assets into real income in $Capital.",
    "Owning an NFT property in Capital City isn’t just about style—it’s about strategy. Rent out your properties for passive income, sell them when the market peaks, or hold them as valuable long-term investments. The city’s growth is your growth!",
    "Take your first step into the decentralized economy. Explore, buy, and trade NFT properties today and secure your place in the ever-expanding world of Capital City. The future is digital, and you’re at the forefront."
];

export const nftProperties = [
    {
        id: "1",
        imageUrl: "officebuilding.webp",
        title: "Modern Office Building",
        address: "DevCap Business District",
        param: ["5 floors", "40 offices", "2600 sqm"],
        description: "This modern 5-story office building is located in the bustling DevCap Business District. It features 40 office spaces with a contemporary design and a total area of 2600 sqm. The building is newly renovated and offers excellent daily income of 1000 $CAP. Ideal for businesses seeking a premium location.",
        price: "100,000 $CAP",
        income: "1000 $CAP/day"
    },
    {
        id: "2",
        imageUrl: "house.webp",
        title: "Luxury Family House",
        address: "Luxury Residential Area",
        param: ["5 rooms", "2 bathrooms", "1 pool", "210 sqm"],
        description: "This beautiful 2-story family home is located in the cozy Luxury Residential Area. With 5 spacious rooms, 2 bathrooms, and a private pool, the house offers 210 sqm of modern living space. Recently renovated, it's perfect for families seeking comfort and tranquility. Daily income: 100 $CAP.",
        price: "5,000 $CAP",
        income: "100 $CAP/day"
    },
    {
        id: "3",
        imageUrl: "building.webp",
        title: "PalmLuxury Residential Complex",
        address: "Luxury Residential Area",
        param: ["15 floors", "25 apartments", "1 penthouse", "2100 sqm"],
        description: "This premium 15-story residential complex, PalmLuxury, offers 25 luxurious apartments and a stunning penthouse. The building includes a stylish lobby on the ground floor and covers a total area of 2100 sqm. Located in a serene neighborhood, it generates an impressive daily income of 1200 $CAP.",
        price: "300,000 $CAP",
        income: "1200 $CAP/day"
    },
    {
        id: "4",
        imageUrl: "luxapartment.webp",
        title: "OceanLuxury Penthouse",
        address: "Luxury Residential Area",
        param: ["320 sqm", "6 rooms", "3 bathrooms", "1 pool", "bar", "cinema"],
        description: "This premium-class penthouse is part of the OceanLuxury complex, offering an unmatched living experience. Spanning 320 sqm, it features 6 spacious rooms, 3 bathrooms, a private pool, a bar, and a cinema. Recently renovated, it's located in the peaceful Luxury Residential Area. Daily income: 500 $CAP.",
        price: "100,000 $CAP",
        income: "500 $CAP/day"
    }
];


export const Nft: FC = () => {

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
                    id = {property.id}
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