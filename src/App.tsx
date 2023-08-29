import React from 'react';
import logo from './logo.svg';
import './App.css';
import InnerApp from './innerApp'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { StyledEngineProvider } from "@mui/material/styles";
// import { Route, Router, Routes } from 'react-router-dom';
import { Box } from '@mui/material';
function App() {
  const renderRoute = () =>{
    return(
      <>
      <Routes>
<Route path='/*' element={<InnerApp/>}/>

      </Routes>
      </>
    )
  }
  return (
<>
<StyledEngineProvider injectFirst>
        <Box className="page_wrapper">
          <Router>{renderRoute()}</Router>
        </Box>
      </StyledEngineProvider>
</>
  );
}

export default App;
