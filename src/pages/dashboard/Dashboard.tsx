import {  ListingTools } from "../../shared/components/listingTools/ListingTools"
import { LayOutBasePagina } from "../../shared/layouts/LayOutBasePagina"

export const DashBoard = () =>{
    return(
        <LayOutBasePagina  titulo="Página Inicial" barraDeFerramentas={(<ListingTools mostrarInputBusca />)}>
            Testando
        </LayOutBasePagina>
    )
}