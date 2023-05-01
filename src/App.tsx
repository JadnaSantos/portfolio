import { ToastContainer } from 'react-toastify';
import { defaultTheme } from './styles/theme/theme';
import { GlobalStyle } from './styles/global';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { Router } from './routes';
import 'react-toastify/dist/ReactToastify.min.css';



function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <BrowserRouter>
        <GlobalStyle />
        <Router />
        <ToastContainer />
      </BrowserRouter>
    </ThemeProvider>
  );
}

export { App };
