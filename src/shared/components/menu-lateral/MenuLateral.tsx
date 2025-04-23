import { Avatar, Box, Divider, Drawer, Icon, List, ListItemButton, ListItemIcon, ListItemText, useMediaQuery, useTheme } from "@mui/material"


import React, { ReactNode} from "react"
import { useAppThemeContext, useDrawerContext } from "../../contexts"
import { useMatch, useNavigate, useResolvedPath } from "react-router-dom"


interface IMenuLateralProps{
    children: ReactNode
}

interface IListItemLinkProps{
    to: string
    icon: string
    label: string
    onClick: (() => void) | undefined
}



export const MenuLateral: React.FC<IMenuLateralProps>= ({children}) =>{
  const theme = useTheme();

  const ListItemLink: React.FC<IListItemLinkProps> = ({
    to,
    icon,
    label,
    onClick,
  }) => {
    const navigate = useNavigate();

    const resolvedPath = useResolvedPath(to);
    const match = useMatch({ path: resolvedPath.pathname, end: false });

    const handleClick = () => {
      navigate(to);
      onClick?.();
    };

    

    return (
      <ListItemButton selected={!!match} onClick={handleClick}>
        <ListItemIcon sx={{ color: theme.palette.secondary.main }}>
          <Icon>{icon}</Icon>
        </ListItemIcon>
        <ListItemText primary={label} />
      </ListItemButton>
    );
  };

  const smDown = useMediaQuery(theme.breakpoints.down("sm"));

  const {toggleTheme} =useAppThemeContext()
  const { isDrawerOpen, toggleDrawerOpen, drawerOptions } = useDrawerContext();


  return (
    <>
      <Drawer
        open={isDrawerOpen}
        variant={smDown ? "temporary" : "permanent"}
        onClose={toggleDrawerOpen}
      >
        <Box
          width={theme.spacing(28)}
          height="100%"
          display="flex"
          flexDirection="column"
        >
          <Box
            width="100%"
            height={theme.spacing(20)}
            display="flex"
            alignItems="center"
            justifyContent="center"
          >
            <Avatar
              sx={{
                fontSize: theme.spacing(6),
                height: theme.spacing(12),
                width: theme.spacing(12),
                bgcolor: theme.palette.secondary.main,
              }}
            >
              N
            </Avatar>
          </Box>

          <Divider
            variant="middle"
            sx={{ bgcolor: theme.palette.secondary.main }}
          />

          <Box flex={1} sx={{ color: theme.palette.secondary.main }}>
            <List component="nav">
              {drawerOptions.map((drawerOption) => (
                <ListItemLink
                  key={drawerOption.path}
                  icon={drawerOption.icon}
                  label={drawerOption.label}
                  to={drawerOption.path}
                  onClick={smDown ? toggleDrawerOpen : undefined}
                />
              ))}
            </List>
          </Box>
          <Box  sx={{ color: theme.palette.secondary.main }}>
            <List component="nav">
              <ListItemButton onClick={toggleTheme}>
                <ListItemIcon>
                    <Icon sx={{ color: theme.palette.secondary.main }}>
                        contrast
                    </Icon>
                </ListItemIcon>
                <ListItemText primary="Alternar Tema"/>
              </ListItemButton>
              
            </List>
          </Box>
        </Box>
      </Drawer>

      <Box height="100vh" marginLeft={smDown ? 0 : theme.spacing(28)}>
        {children}
      </Box>
    </>
  );
}