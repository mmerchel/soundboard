import { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: 'Segoe UI', Roboto, 'Helvetica Neue', sans-serif;
    background: linear-gradient(135deg, #1a1a1a 0%, #0a0a0a 100%);
    color: #ffffff;
    min-height: 100vh;
  }

  button {
    cursor: pointer;
    border: none;
    outline: none;
  }

  @keyframes neonPulse {
    0% {
      box-shadow: 0 0 5px rgba(255, 255, 255, 0.5),
                0 0 10px currentColor;
    }
    50% {
      box-shadow: 0 0 10px rgba(255, 255, 255, 0.8),
                0 0 20px currentColor,
                0 0 30px currentColor;
    }
    100% {
      box-shadow: 0 0 5px rgba(255, 255, 255, 0.5),
                0 0 10px currentColor;
    }
  }
`
