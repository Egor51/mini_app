// telegram.d.ts
interface TelegramWebApp {
    initData: string;
    initDataUnsafe: Record<string, any>;
    version: string;
    platform: string;
    colorScheme: string;
    themeParams: Record<string, any>;
    isExpanded: boolean;
    viewportHeight: number;
    viewportStableHeight: number;
    headerColor: string;
    backgroundColor: string;
    BackButton: {
        isVisible: boolean;
        onClick(callback: () => void): void;
        show(): void;
        hide(): void;
    };
    MainButton: {
        text: string;
        color: string;
        textColor: string;
        isVisible: boolean;
        isActive: boolean;
        setText(text: string): void;
        onClick(callback: () => void): void;
        show(): void;
        hide(): void;
        enable(): void;
        disable(): void;
    };
    HapticFeedback: {
        impactOccurred(style: 'light' | 'medium' | 'heavy'): void;
        notificationOccurred(type: 'error' | 'success' | 'warning'): void;
        selectionChanged(): void;
    };
    sendData(data: string): void;
    ready(): void;
}

interface Window {
    Telegram: {
        WebApp: TelegramWebApp;
    };
}
