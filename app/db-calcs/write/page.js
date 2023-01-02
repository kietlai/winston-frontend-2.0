//inputs from frontend ------------------
let name = "nate"   //name to be saved in database
//---------------------------------------

import PocketBase from 'pocketbase'; //node module import for database

//Data stored for each user
const datablank = {
    "name": name,
    "data":[
        {
          "class": [],
          "givenGrade": [],
          "maxGrade": [],
          "name": [],
          "weight": []
        }
    ],
    "final": {
        "perc": [],
        "class": []
    },
    "profile":{
        "GPA": null,
        "WGPA": null,
        "level":0,
        "system":0
    },
    "classes":{
        "num": [],
        "name": [],
        "weight": []
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