import React from 'react';
import Body from './Body';
import { Box, CssBaseline, ThemeProvider, createTheme } from '@mui/material';

// Define the theme
const theme = createTheme({
  palette: {
    primary: {
      light: '#7b5e57',
      main: '#4e342e', // Your desired primary color
      dark: '#260e04',
      contrastText: '#fff',
    },
    secondary: {
      light: '#ff7961',
      main: '#f44336',
      dark: '#ba000d',
      contrastText: '#000',
    },
    background: {
      default: '#4e342e', // Set your desired global background color
      paper: '#ffffff', // Background for components like Paper
    },
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          backgroundColor: '#4e342e', // Global background
          color: '#fff', // White text for readability
          margin: 0, // Remove default margin for consistent styling
          minHeight: '100vh', // Ensure the body covers the full height
        },
      },
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      {/* Apply global styles and theme */}
      <CssBaseline />
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          minHeight: '100vh', // Ensure Box covers the viewport height
          color: 'primary.contrastText', // Use theme text color
        }}
      >
        <Body /> {/* Your main content */}
      </Box>
    </ThemeProvider>
  );
}

export default App;
