import * as React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { path } from '../GoalSetterInput/GoalSetterInput.js';

//ToDo: Automatisierung der Listenerstellung mit gelieferten Infos
//Format der Infos?
//automatische Erstellung - Liste wird via for-loop oder map method

//Datenstruktur: mir werden nur uris zugesendet - kann man daraus einen Kurstitel kriegen?
//Fehlermeldung false: sollte irgendwie abgefangen werden 

//data should be passed to me from goal setter input axios result
//ToDo: pass it to this component

//dort wo sie ankommen: if else struktur: if true - render view with path data
//                                          else - render error message - how to?
// error message and path view should offer update parameters button

function RecommendedPath({SetView}) {

    console.log("LearningPath:", JSON.stringify(path, null, 4));

    const handleUpdate = () => {
        console.log("Update Path");
        SetView(1);
    };
    const handleAccept = () => {
        console.log("Accept Path");
        return (
            <div>
                Thank you for using our Path Recommender!
            </div>   
        );
    };

    //not sure if that works as intended, might need reworking
    //note: in future, use exporting instead of this complicated function passing stuff
    //const CourseUri = path.map(courses => <li key={path.id}>{path.courses.uri}</li>)

    return (
        <Stack>
             <div>
                {/* if course data gets passed via path: uncomment this */}
                {/* <ul>{CourseUri}</ul> */}
            </div>
            <div> 
                <Button onClick={handleUpdate}>
                    Update
                </Button>
            </div>

            <div>
                <Button onClick={handleAccept}>
                    Accept
                </Button>
            </div>

        </Stack>

    );
}

export default RecommendedPath;
