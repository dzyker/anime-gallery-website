import { useState, useEffect, createContext } from "react";

export const languageContext = createContext({})

const translations = {
    en: {
        home: "Home",
        gallery: "Gallery",
        favorites: "Favorites",
        settings: "Settings",
        loading: "Loading images",
        chooseImageType: "Choose type of image",
        chooseMode: "Mode",
        loadMoreImages: "Load more",
        clearGallery: "Clear gallery",
        changeBackground: "Change background",
        errorMessage: "Error",
        removeFavorite: "Remove from favorites",
        addFavorite: "Add to favorites",
        inFavorite: "In favorites",
        noFavoriteImages: "Unfortunately, there are no featured images 😔",
        clickLoadMore: 'Click "Load More" to add images',
    },
    ru: {
        home: "Главная",
        gallery: "Галерея",
        favorites: "Избранное",
        settings: "Настройки",
        loading: "Загрузка изображений...",
        chooseImageType: "Выберите тип изображения",
        chooseMode: "Режим",
        loadMoreImages: "Загрузить ещё",
        clearGallery: "Очистить галерею",
        changeBackground: "Сменить фон",
        errorMessage: "Ошибка",
        removeFavorite: "Удалить из избранного",
        addFavorite: "Добавить в избранное",
        inFavorite: "В избранном",
        noFavoriteImages: "К сожалению избранные изображения отсутствуют 😔",
        clickLoadMore: 'Нажмите "Загрузить еще" для добавления изображений',
    }
}

export function LanguageContextProvider({children}) {
    
    const [language, setLanguage] = useState(() => {
        const lang = localStorage.getItem("language")
        return lang || "en"
    })

    useEffect(() => {
        localStorage.setItem("language", language)
    }, [language])

    function getTranslation(key) {
        return translations[language]?.[key] || key
    }

    return (
        <languageContext.Provider value={{language, setLanguage, getTranslation}}>
            {children}
        </languageContext.Provider>
    )
}