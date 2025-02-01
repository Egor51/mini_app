
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

