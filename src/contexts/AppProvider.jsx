import { BackgroundContextProvider } from "./BackgroundContext";
import { FavoritesContextProvider } from "./FavoritesContext";

export function AppProvider({children}) {
    return (
        <BackgroundContextProvider>
            <FavoritesContextProvider>
                {children}
            </FavoritesContextProvider>
        </BackgroundContextProvider>
    )
}