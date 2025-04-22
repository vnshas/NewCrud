import { Avatar, Box, Divider, Drawer, Icon, List, ListItemButton, ListItemIcon, ListItemText, useMediaQuery, useTheme } from "@mui/material"


import React, { ReactNode} from "react"
import { useDrawerContext } from "../../contexts"


interface IMenuLateralProps{
    children: ReactNode
}

export const MenuLateral: React.FC<IMenuLateralProps>= ({children}) =>{
    const theme = useTheme()
    const smDown = useMediaQuery(theme.breakpoints.down('sm'))

    const {isDrawerOpen,toggleDrawerOpen} = useDrawerContext()
    
    return(
        <>
        <Drawer open={isDrawerOpen}  variant={smDown ? 'temporary' : 'permanent'} onClose={toggleDrawerOpen}>
            <Box width={theme.spacing(28)} height='100%' display='flex' flexDirection='column'>

            <Box width='100%' height={theme.spacing(20)} display='flex' alignItems='center' justifyContent='center'>
                <Avatar sx={{fontSize:theme.spacing(6),height:theme.spacing(12) ,width:theme.spacing(12) ,bgcolor: theme.palette.secondary.main }}>N</Avatar>
            </Box>

            <Divider variant='middle' sx={{bgcolor: theme.palette.secondary.main}}/>

            <Box flex={1} sx={{color:theme.palette.secondary.main}}>
                <List component="nav">
                    <ListItemButton>
                        <ListItemIcon sx={{color:theme.palette.secondary.main}}>
                            <Icon>home</Icon>
                        </ListItemIcon>
                        <ListItemText  primary='Página Inicial'/>
                    </ListItemButton>
                </List>
            </Box>


            </Box>
        </Drawer>

        <Box height='100vh' marginLeft={smDown ? 0 : theme.spacing(28)}>{children}</Box>
        </>
    )
}