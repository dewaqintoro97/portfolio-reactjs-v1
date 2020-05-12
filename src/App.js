import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import './App.css';
import Home from './components/index'
import Resume from './components/Resume';

function App() {
  return (
    <>
      <CssBaseline />
        <Home/> 
        <Resume/>
    </>
  );
}

export default App; 
