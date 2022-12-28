//inputs from frontend ------------------
let name = "nate"   //name to be saved in database
//---------------------------------------

import PocketBase from 'pocketbase'; //node module import for database

//Data stored for each user
const datablank = {
    "name": name,
    "q1": {
        "name": [],
        "givenGrade": [],
        "maxGrade": [],
        "weight": [],
        "class": []
    },
    "q2": {
        "name": [],
        "givenGrade": [],
        "maxGrade": [],
        "weight": [],
        "class": []
    },
    "q3": {
        "name": [],
        "givenGrade": [],
        "maxGrade": [],
        "weight": [],
        "class": []
    },
    "q4": {
        "name": [],
        "givenGrade": [],
        "maxGrade": [],
        "weight": [],
        "class": []
    },
    "final": {
        "perc": [],
        "class": []
    }
}

export default async function Page() {
    const pb = new PocketBase('http://127.0.0.1:8090'); //start database on local port

    //write data to database
    const record = await pb.collection('posts').create(datablank);
    return(
        <div>
            <div>Pocketbase Write Function</div>
        </div>
    );
    // ^ output to next.js frontend
}