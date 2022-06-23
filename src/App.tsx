import { ThemeProvider } from 'styled-components';
import light from './styles/themes/light';

function App() {
  return (
    <ThemeProvider theme={light}>
      <div className="App">
        <h1>helloo</h1>
      </div>
    </ThemeProvider>
  );
}

export default App;
