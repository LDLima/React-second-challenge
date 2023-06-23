import { BrowserRouter } from 'react-router-dom'
import { Router } from './Routers/Router'

import { ThemeProvider } from 'styled-components'
import { defaultTheme } from './styles/themes/default'
import { GlobalStyle } from './styles/global'

export function App() {
  return (
    // Needs the Theme provider around all defining the theme
    <ThemeProvider theme={defaultTheme}>
      <BrowserRouter>
        <Router />
      </BrowserRouter>
      <GlobalStyle />
      {/* Fix issue */}
    </ThemeProvider>
  )
}
