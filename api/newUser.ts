
export const sendUserVisit = async (chatId: string) => {
    const userVisit = {
        chatId: chatId,
        visitTime: new Date().toISOString() // ✅ Форматируем дату в ISO 8601
    };
    try {
        const response = await fetch("https://mytraffic.space/bot/user", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(userVisit)
        });

        if (response.ok) {
            console.log("✅ User visit sent successfully");
        } else {
            console.error("❌ Failed to send user visit");
        }
    } catch (error) {
        console.error("❌ Error sending user visit:", error);
    }
};


export const addWallet = async (chatId: string, wallet: string) => {
    const userVisit = {
        chatId: chatId,
        wallet: wallet,
    };
    try {
        const response = await fetch("https://mytraffic.space/bot/user/wallet", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(userVisit)
        });

        if (response.ok) {
            console.log("✅ User add wallet successfully");
        } else {
            console.error("❌ Failed add wallet");
        }
    } catch (error) {
        console.error("❌ Error wallet", error);
    }
};


export const sendTransaction = async (chatId: string, wallet: string, amount: string, jeton: string) => {
    const userVisit = {
        chatId: chatId,
        amount: amount,
        jeton: jeton,
        date: null,
        wallet: wallet,
    };
    try {
        const response = await fetch("https://mytraffic.space/bot/user/wallet", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(userVisit)
        });

        if (response.ok) {
            console.log("✅ User add wallet successfully");
        } else {
            console.error("❌ Failed add wallet");
        }
    } catch (error) {
        console.error("❌ Error wallet", error);
    }
};
