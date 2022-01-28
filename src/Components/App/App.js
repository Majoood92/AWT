
import * as React from 'react';
import './App.css';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import Typography from '@mui/material/Typography';


/* imports for separate components*/
import ResponsiveAppBar  from '../AppBar/AppBar.js';
import GoalSetterInput from '../GoalSetterInput/GoalSetterInput.js';
import UserLogIn from '../UserLogIn/UserLogIn.js';
import RecommendedPath from '../RecommendedPath/RecommendedPath.js'; 

//Set different views
//default view: UserLogIn 
//view 1: goal setter input form
//view 2: recommended path/ error



function App() {

 //logic to switch between different views 
  const [active, setActive] = React.useState();
  const SetView = (active) => {
    setActive(active);
  };

  const ActiveView = () => {
    switch (active) {
      case 1:
        return <GoalSetterInput SetView={SetView} />;
      case 2:
        return <RecommendedPath SetView={SetView} />;
      default:
        return <UserLogIn SetView={SetView} />;
    }
  };

  return (
   <div className="App">
     {/* Localization Provider: necessary for datepicker (in GoalSetterInput) */}
     <LocalizationProvider dateAdapter={AdapterDateFns}>

     {/* navigation component - imported from folder AppBar*/}
     <ResponsiveAppBar />

      {/* static header and sub header, wrapped in one mui typography element each*/}
      <Typography
      variant="h2"
      component="div"
      mb = {2}
      mt = {2}>
        Learning Path Recommender
      </Typography>
      <Typography
      variant="h4"
      component="div"
      mb = {4}
      mt = {2}>
        Your path to success!
      </Typography>

      {/*current active input - logic above*/}
      {ActiveView()}
      {/* <GoalSetterInput /> */}

    </LocalizationProvider>
   </div>
  );
}

export default App;
