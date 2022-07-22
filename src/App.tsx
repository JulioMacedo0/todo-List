import { ToastContainer } from 'react-toastify';
import { ThemeProvider } from 'styled-components';
import { CardTask } from './components/CardTask';
import light from './styles/themes/light';
import 'react-toastify/dist/ReactToastify.css';
function App() {
  return (
    <ThemeProvider theme={light}>
      <CardTask />
      <ToastContainer bodyClassName="toastBody" limit={1} />
    </ThemeProvider>
  );
}

export default App;
