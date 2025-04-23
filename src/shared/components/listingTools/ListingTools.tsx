import { Box, Button, Icon, Paper, TextField, useTheme } from "@mui/material";

interface IListingToolsProps{
    textoDaBusca?: string
    mostrarInputBusca?: boolean
    aoMudarTextoBusca?: (novoTexto: string) => void
    textoBotaoNovo?: string
    mostrarBotaoNovo?: boolean
    aoClicarEmNovo?: () => void
}

export const ListingTools: React.FC<IListingToolsProps> = ({
  textoDaBusca = '',
  aoMudarTextoBusca,
  mostrarInputBusca = false,
  aoClicarEmNovo,
  textoBotaoNovo = 'Novo',
  mostrarBotaoNovo = true
}) => {
  const theme = useTheme();
  return (
    <Box
      height={theme.spacing(5)}
      marginX={1}
      padding={1}
      paddingX={2}
      gap={1}
      display="flex"
      alignItems="center"
      component={Paper}
    >
     
     {mostrarInputBusca && ( <TextField
        value={textoDaBusca}
        onChange={(e) => aoMudarTextoBusca?.(e.target.value)}
        size="small"
        placeholder="Pesquisar..."
      />)}


      <Box display="flex" flex={1} justifyContent="end">
       {mostrarBotaoNovo && ( <Button
          disableElevation
          sx={{ background: theme.palette.secondary.main }}
          variant="contained"
          onClick={aoClicarEmNovo}
          endIcon={<Icon>add</Icon>}
        >
         {textoBotaoNovo}
        </Button>)}
      </Box>
    </Box>
  );
};
