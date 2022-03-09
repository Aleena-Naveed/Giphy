import Routes from './routes/Routing';
import { ThemeProvider, createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#fff'
    },
    text: {
      primary: '#000',
    },
    divider: '#fff',
  },
  MuiTextField: {
    root: {
      backgroundColor: '#fff',
      color: '#fff',
    }
  },
  typography: {
    body1: {
      color: '#fff'
    }
  }
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div>
        <Routes />
      </div>
    </ThemeProvider>

  );
}

export default App;
