import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material';
import Button from '@mui/material/Button';
import DrawerToggle from './DrawerToggle.jsx';
import { useLocation, Link } from 'react-router-dom'; // Import Link
import './componentStyles/navbar.css';


const logoTheme = createTheme({
  typography: {
    fontFamily: [
      'Lemon',
      'serif',
    ].join(','),
  },
});


export default function ButtonAppBar() {

  const location = useLocation(); // Get current location

  return (
    <AppBar className='Appbar' position="relative" sx={{ backgroundColor: "transparent", boxShadow: 'none', width: '100%' }}>
      <Toolbar>


        {/*keeps buttons to the right of nav bar*/}
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }} />
        

        <div className='navTabs'>
          <Link to="/qc" style={{ textDecoration: 'none', color: 'inherit' }}>                          {/*style prop keeps the button white*/}
            <Button color="inherit" sx={{ fontSize: '1.2rem', fontWeight: 'bold' }}>Contact Me</Button>         {/*sx prop changes text properties*/}
          </Link>
        </div>

      
        <div id='toggle'>
          <DrawerToggle />
        </div>

        
      </Toolbar>
    </AppBar>
  );
}
