import { createContext, ReactNode, useCallback, useContext, useMemo, useState } from "react";
import { ThemeProvider } from "@emotion/react"
import { LightTheme } from "../theme";
import { DarkTheme } from "../theme";
import { Box } from "@mui/system";
interface IThemeContextData{
    themeName: 'light' | 'dark'
    toggleTheme: () => void
}

interface IThemeProviderProps{
    children: ReactNode
}

const ThemeContext = createContext({} as IThemeContextData)

export const useAppThemeContext = () =>{
    return useContext(ThemeContext)
}

export const AppThemeProvider : React.FC<IThemeProviderProps> = ({children}) =>{
    const [themeName,setThemeName] = useState<'light' | 'dark'>('light')    

    const toggleTheme = useCallback(() =>{
        setThemeName(oldThemeName => oldThemeName === 'light' ? 'dark' : 'light')
    },[])

    const theme = useMemo(() =>{
        if(themeName === 'light') return LightTheme

        return DarkTheme
    },[themeName])
    
    return(
        <ThemeContext.Provider value={{themeName, toggleTheme}}>
            <ThemeProvider theme={DarkTheme}>
            <Box width='100vw' height='100vh' bgcolor={theme.palette.background.default}>{children}</Box>
            </ThemeProvider>
           
        </ThemeContext.Provider>
    )
}



