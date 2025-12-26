import { createContext, useState, useEffect } from "react";

export const favoritesContext = createContext({})

export function FavoritesContextProvider({children}) {

    const [favorites, setFavorites] = useState(() => {
        const saved = localStorage.getItem("favorites")
        return saved ? JSON.parse(saved) : []
    })

    useEffect(() => {
        localStorage.setItem("favorites", JSON.stringify(favorites))
    }, [favorites])

    function addToFavorites(url) {
        setFavorites((prev) => {
            if (!prev.includes(url)) {
                return [...prev, url]
            } 
            return prev
        })
    }

    function removeFromFavorites(url) {
        setFavorites(prev => prev.filter(item => item !== url))
    }

    function toggleFavorite(url) {
        if (isFavorite(url)) {
            removeFromFavorites(url)
        } else {
            addToFavorites(url)
        }
    }

    function isFavorite(url) {
        return favorites.includes(url)
    }

    return (
        <favoritesContext.Provider value={{favorites, toggleFavorite, isFavorite}}>
            {children}
        </favoritesContext.Provider>
    )
}