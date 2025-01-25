import {FC} from "react";
import {Placeholder, Text} from "@telegram-apps/telegram-ui";
import {TonConnectButton} from "@tonconnect/ui-react";
import {Page} from "@/components/Page.tsx";

export const Main: FC = () => {
    return (
        <Page>
            <Placeholder
                className="ton-connect-page__placeholder"
                header="MyTraffic"
                description={
                    <>

                        <Text>
                            To display the data related to the TON Connect, it is required to connect your
                            wallet
                        </Text>
                        <TonConnectButton className="ton-connect-page__button"/>
                    </>
                }
            />
        </Page>
    );
}