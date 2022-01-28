import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
// import Menu from '@mui/material/Menu';
// import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
// import Avatar from '@mui/material/Avatar';
// import Button from '@mui/material/Button';
// import Tooltip from '@mui/material/Tooltip';
// import MenuItem from '@mui/material/MenuItem';

/*Navigation Bar at the top of the page 
ToDo: 
Logo: Make more impressive
AppBar: another Backgroundcolor? overall theme quite boring at the moment
Avatar: 
* Goal: Make the Avatar a button that will open a menu: (Log Out, Profile)
** Log Out should lead to a log in page
** Profile should open a drawer in which the profile can be seen
** Tool Tip necessary?
* nice to have: Get picture to work or make background color fancier (theme?)
*/

/*const settings = ['Profile', 'Logout']; */

function ResponsiveAppBar() {
  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters
        display="flex"
        >
          
          {/*the Logo */}
            <div>
            <img src="/images/logo2.png" alt='' height={60} width={60} />
            </div>
           {/* end of the Logo */}




          {/*Logo start 
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{fontWeight: 'bold', mr: 2, display: { xs: 'none', md: 'flex' } }}
          >
            LPR
          </Typography> 
           Logo end */}

          {/* User Avater start */}
           {/* <Avatar
          alt = 'Example User'
          sx = {{position: "absolute", right: "0"}}>


           </Avatar> */}
          {/* User Avatar end */}
        
          </Toolbar>
      </Container>
    </AppBar>
  );
};
export default ResponsiveAppBar;