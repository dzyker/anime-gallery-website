import { BackgroundContextProvider } from "./BackgroundContext";
import { FavoritesContextProvider } from "./FavoritesContext";
import { LanguageContextProvider } from "./LanguageContext"

export function AppProvider({children}) {
    return (
        <BackgroundContextProvider>
            <FavoritesContextProvider>
                <LanguageContextProvider>
                    {children}
                </LanguageContextProvider>
            </FavoritesContextProvider>
        </BackgroundContextProvider>
    )
}