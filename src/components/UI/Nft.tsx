import {FC} from "react";
import {Paragraph} from "@/components/UI/paragraph.tsx";
import {publicUrl} from "@/helpers/publicUrl.ts";
import {NFTCard} from "@/components/UI/nftsmolcard.tsx";


export const Nft: FC = () => {
    return (
        <div className={'mx-auto w-[90%]'}>
            <div className={'mx-auto rounded-xl my-3 border px-3 py-3'}>
                <p className="text-lg font-semibold">NFT Marketplace </p>
                <p className="text-sm">
                    The NFT Marketplace will be live soon! Get ready to explore, buy, and trade unique properties to grow your virtual real estate empire.
                </p>
            </div>            <NFTCard
                imageUrl='nft-appartmaents.jpg'
                title="Luxury Apartment"
                address="Downtown City Center"
                param="2 Rooms, 120 sqm"
                price="$CAP120,00"
            />
            <NFTCard
                imageUrl= 'nft-appartmaents.jpg'
                title="Modern Loft"
                address="Uptown District 12, 1A 4/12"
                param="1 Room, 80 sqm"
                price="$CAP120,00"
            />
            <NFTCard
                imageUrl="nft-appartmaents.jpg"
                title="Penthouse Suite"
                address="Skyline Tower, Level 42"
                param="3 Rooms, 200 sqm"
                price="$CAP120,00"
            />
            <Paragraph img={'logo.png'} text={'Discover the future of real estate with NFT technology. Each property in Capital City is a unique, blockchain-backed NFT that you truly own. Invest in apartments, lofts, or commercial spaces, and turn your virtual assets into real income in $Capital."'}/>
            <Paragraph img={'logo.png'} text={'Owning an NFT property in Capital City isn’t just about style—it’s about strategy. Rent out your properties for passive income, sell them when the market peaks, or hold them as valuable long-term investments. The city’s growth is your growth!'}/>
            <Paragraph img={'logo.png'} text={'Take your first step into the decentralized economy. Explore, buy, and trade NFT properties today and secure your place in the ever-expanding world of Capital City. The future is digital, and you’re at the forefront.'}/>
        </div>
    );
}