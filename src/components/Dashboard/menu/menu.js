import React from 'react'
import CryptoContext from './CryptoContext';
import { AppBar,
    Container,
    MenuItem,
    Select,
    Toolbar,
    Typography,MenuItem, ThemeProvider} from "@mui/material"
function menu() {
    const classes = useStyles();
    const { coins, setCoins} = CryptoState();
  
    const history = useHistory();
    const useStyles = makeStyles((theme) => ({
        title: {
          flex: 1,
          color: "gold",
          fontFamily: "Montserrat",
          fontWeight: "bold",
          cursor: "pointer",
        },
      }));
      
      const darkTheme = createTheme({
        palette: {
          primary: {
            main: "#fff",
          },
          type: "dark",
        },
      });
  return (
    <ThemeProvider theme={Theme}>
      <AppBar color="transparent" position="static">
        <Container>
          <Toolbar>
            <Typography
              onClick={() => history.push(`/`)}
              variant="h6"
              className={classes.title}
            >
            
            </Typography>
            {/* <Button color="inherit">Login</Button> */}
            <Select
              variant="outlined"
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={coins}
              style={{ width: 100, height: 40, marginLeft: 15 }}
              onChange={(e) => setCoins(e.target.value)}
            >
              <MenuItem value={"USD"}>USD</MenuItem>
              <MenuItem value={"INR"}>INR</MenuItem>
            </Select>
          </Toolbar>
        </Container>
      </AppBar>
    </ThemeProvider>
  )
}

export default menu