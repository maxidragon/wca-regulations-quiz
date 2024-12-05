import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { createTheme } from '@mui/material/styles';
import { ThemeProvider } from '@mui/material/styles';
import { CssBaseline } from '@mui/material';

const darkTheme = createTheme({
  palette: {
    mode: "dark",
  },
});


createRoot(document.getElementById('root')!).render(
  <>
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <App />
    </ThemeProvider>
  </>,
)
