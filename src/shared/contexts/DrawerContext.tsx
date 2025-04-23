import { createContext, ReactNode, useCallback, useContext, useState } from "react";

interface IDrawerOptions{
    path: string
    label: string
    icon: string
}

interface IDrawerContextData{
    isDrawerOpen: boolean
    drawerOptions : IDrawerOptions[]
    setDrawerOptions: (newDrawerOptions : IDrawerOptions[]) => void
    toggleDrawerOpen : () => void
}

interface IDrawerProviderProps{
    children: ReactNode
}

const DrawerContext = createContext({} as IDrawerContextData)

export const useDrawerContext = () =>{
    return useContext(DrawerContext)
}

export const DrawerProvider : React.FC<IDrawerProviderProps> = ({children}) =>{
    const [isDrawerOpen,setIsDrawerOpen] = useState(false)    
    const [drawerOptions,setDrawerOptions] = useState<IDrawerOptions[]>([])    

    const toggleDrawerOpen = useCallback(() =>{
        setIsDrawerOpen(oldDrawerOpen => !oldDrawerOpen )
    },[])
    
    const handleSetDrawerOptions = useCallback((newDrawerOptions : IDrawerOptions[]) =>{
        setDrawerOptions(newDrawerOptions)
    },[])

  
   
    return(
        <DrawerContext.Provider value={{setDrawerOptions:handleSetDrawerOptions,drawerOptions,isDrawerOpen, toggleDrawerOpen}}>
            {children}
           
        </DrawerContext.Provider>
    )
}



