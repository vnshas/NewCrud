
import {  Navigate, Route, Routes } from "react-router-dom"

import { useDrawerContext } from "../shared/contexts"
import { useEffect } from "react"
import { DashBoard } from "../pages/dashboard/Dashboard"


export const AppRoutes = () =>{
    const {setDrawerOptions} = useDrawerContext()

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
            <Route path="/pagina-inicial" element={<DashBoard />} />

           <Route path="*" element={<Navigate to="/pagina-inicial" />}/> 
        </Routes>
    )
}