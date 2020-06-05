import React from 'react';
import './App.css';
import { ThemeProvider, CSSReset } from '@chakra-ui/core'
import customTheme from './CustomTheme';
import {OnboardingForm} from './OnboardinForm';

function App() {
  return (
    <ThemeProvider theme={customTheme}>
      <CSSReset />
      <OnboardingForm />      
      
    </ThemeProvider>
  );
}

export default App;
