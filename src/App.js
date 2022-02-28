import logo from './logo.svg';
import Main from './Components/main'
import { ThemeProvider, createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#fff'
    },
    text: {
      primary: '#000',
      // secondary: '#fff',
    },
    divider: '#fff',
  },
  MuiTextField: {
    root: {
      backgroundColor: '#fff',
      color: '#fff',
    }
  }
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div>
        <Main />
      </div>
    </ThemeProvider>

  );
}

export default App;
