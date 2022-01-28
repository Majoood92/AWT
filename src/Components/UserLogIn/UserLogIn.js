import * as React from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Select, MenuItem, FormControl, InputLabel } from '@mui/material';
import Stack from '@mui/material/Stack';
import axios from 'axios';

//final goal: two options: User can register or log in
//new users need to register
//fill out form with name and e-mail
//send create user  json object to localhost:8000/user/create 
//with name, mail, occupation
//change view to goalsetterinput in main app

//existing users can send their name and mail to graphql server to 
//get verified and will then be logged in?

/*  options for 'current job' dropdown menu */
const CurrentJobOptions = [
    'Web Developer', 'Web Content Manager', 'Software Developer', 'SEO Optimization Expert', 'User Interface Designer'
   ];


//array for user after user creation. needs to be passed on to parent
let user = {}

function UserLogIn ({SetView}) {

    /*Data handling logic*/
    const [form, setForm] = React.useState({ name: "", email: "", occupations: [] });

    const handleChange = (e) => {
        console.log(e);
        setForm((prevForm) => ({ ...prevForm, [e.target.name]: e.target.value }));
    };

    const handleJobChange = (e) => {
        console.log(e);
        let n = [e.target.value]
        setForm((prevForm) => ({ ...prevForm, [e.target.name]: n }));
    };

    const handleSubmit = (e) => {
        
        e.preventDefault()
        axios.post(`http://localhost:8000/user/create`, form)      
        .then(res =>
            {   
                console.log(res)
                // object destructuring
                user = res.data.data.createUser;
            })
        //default .then event:
        //(res => console.log(res)) 
        .catch(err => console.log(err));
        
        //set app.js Active View to GoalSetterInput
        SetView(1);

        //pass user array to app.js -> passes user to goal setter input
        //passUser(user);
      };

      


    return (  
    
    <Stack 
    component="form"
    alignItems="center"
    spacing ={2}
    onSubmit={handleSubmit}
    sx={{
        '& .MuiTextField-root': { m: 1},
        }}
    >
        <div>
            {/* Form Header */}
            <Typography
            variant="h5"
            mb = {2}>
                Register now:
            </Typography>
        </div>

        <div>
            {/* Input for User Name */}
            <TextField
            id="userName"
            name="name"
            required
            label="Required"
            defaultValue="User Name"
            helperText="Please enter your name"
            onChange={handleChange}
            />
        
            {/* Input for User Mail */}
            <TextField
            id="userMail"
            name="email"
            required
            label="Required"
            defaultValue="Mail Address"
            helperText="Please enter your mail address"
            onChange={handleChange}
            />   
        
        </div>

        <div>   
            {/* DropDownMenu: Current Occupation Choices */}
            <FormControl>
                <InputLabel id="userOccupation">Current Occupation</InputLabel>
                <Select
                required
                label="current Occupation"
                onChange={handleJobChange}
                id="userOccupation"
                name="occupations"
                defaultValue=""
                sx={{width:300}}
                >
                    <MenuItem value={CurrentJobOptions[0]}>{CurrentJobOptions[0]}</MenuItem>
                    <MenuItem value={CurrentJobOptions[1]}>{CurrentJobOptions[1]}</MenuItem>
                    <MenuItem value={CurrentJobOptions[2]}>{CurrentJobOptions[2]}</MenuItem>
                    <MenuItem value={CurrentJobOptions[3]}>{CurrentJobOptions[3]}</MenuItem>
                    <MenuItem value={CurrentJobOptions[4]}>{CurrentJobOptions[4]}</MenuItem>
                </Select>
            </FormControl>
        </div>

        <div>
            <Button 
            type="submit" 
            variant="outlined"
            size="large">
                Register
            </Button>
        </div>
        
    </Stack>

    );
}

export default UserLogIn;
export {user};
