import { ThemeProvider } from 'styled-components';
import { CardTask } from './components/CardTask';
import light from './styles/themes/light';

function App() {
  return (
    <ThemeProvider theme={light}>
      <CardTask />
    </ThemeProvider>
  );
}

export default App;
