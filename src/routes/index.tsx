import { Button } from "@mui/material"
import {  Route, Routes } from "react-router-dom"

import { useDrawerContext } from "../shared/contexts"
import { useEffect } from "react"


export const AppRoutes = () =>{
    const {toggleDrawerOpen,setDrawerOptions} = useDrawerContext()

    useEffect(() =>{
        setDrawerOptions([
            {
                label: 'Página Inicial',
                path: '/pagina-inicial',
                icon: 'home'
            }
        ])
    },[])
    
    return(
        <Routes>
            <Route path="/pagina-inicial" element={<Button variant='contained' color='primary' onClick={() => toggleDrawerOpen()} >toggleDrawer</Button>} />

           { /*<Route path="*" element={<Navigate to="/pagina-inicial" />}/> */}
        </Routes>
    )
}