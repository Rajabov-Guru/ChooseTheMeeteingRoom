import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import { MantineProvider, ColorSchemeProvider, ColorScheme, MantineThemeOverride } from '@mantine/core';
import App from './App';
import './index.css';

const myTheme: MantineThemeOverride = {
  colorScheme: 'dark',
  primaryColor: 'yellow',
};
function Main() {
  const [colorScheme, setColorScheme] = useState<ColorScheme>('dark');
  const toggleColorScheme = (value?: ColorScheme) =>
    setColorScheme(value || (colorScheme === 'dark' ? 'light' : 'dark'));

  return (
    <ColorSchemeProvider colorScheme={colorScheme} toggleColorScheme={toggleColorScheme}>
      <MantineProvider theme={{ ...myTheme, colorScheme }} withGlobalStyles withNormalizeCSS>
        <App />
      </MantineProvider>
    </ColorSchemeProvider>
  );
}

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(<Main />);
