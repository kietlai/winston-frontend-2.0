//inputs from frontend ------------------
let name = "nate"           //name saved in database
let q = 2                   //quarter selection, 1-4
let assignNum = 1           //what assignment is being edited
let mode = 3                //modes, 1 = add, 2 = modify, 3 = delete
let assignName = "SWYK 16"  //the new name of the assignment to be edited/added
let maxGrade = 25           //the max points of the assignment to be edited/added
let givenGrade = 22         //the points you earned on the assignment to be edited/added
let assignClassNum = 2      //the class number of the assignment to be edited/added
let assignWeight = 7        //the weight of the assignment(major/minor) to be edited/added
// --------------------------------------

import PocketBase from 'pocketbase'; //node module import for database

export default async function Page() {
    const pb = new PocketBase('http://127.0.0.1:8090'); //start database on local port

    //read database for any data saved under the user's name
    let record = await pb.collection('posts').getFirstListItem('name="' + name + '"', {
        expand: 'relField1,relField2.subRelField',
    });
    //add data
    if(mode == 1){
        //add the new data to the database data
        record["data"][q-1]["name"].push(assignName)
        record["data"][q-1]["givenGrade"].push(givenGrade)
        record["data"][q-1]["maxGrade"].push(maxGrade)
        record["data"][q-1]["weight"].push(assignWeight)
        record["data"][q-1]["class"].push(assignClassNum)
        //put data into format that database can read
        let data = {
            "data": record["data"]
        }
        //upload data to database
        let record2 = await pb.collection('posts').update(record['id'], data);
    //edit data
    }else if(mode == 2){
        //edit data to allign with data input by user
        record["data"][q-1]["name"][assignNum] = assignName
        record["data"][q-1]["givenGrade"][assignNum] = givenGrade
        record["data"][q-1]["maxGrade"][assignNum] = maxGrade
        record["data"][q-1]["weight"][assignNum] = assignWeight
        record["data"][q-1]["class"][assignNum] = assignClassNum

        //put data into format that database can read
        let data = {
            "data": record["data"]
        }
        //upload data to database
        let record3 = await pb.collection('posts').update(record['id'], data);
    //remove data
    }else if (mode == 3){
        //remove data that is specified by user
        record["data"][q-1]["name"].splice((assignNum-1), 1)
        record["data"][q-1]["givenGrade"].splice((assignNum-1), 1)
        record["data"][q-1]["maxGrade"].splice((assignNum-1), 1)
        record["data"][q-1]["weight"].splice((assignNum-1), 1)
        record["data"][q-1]["class"].splice((assignNum-1), 1)
        
        //put data into format that the database can read
        let data = {
            "data": record["data"]
        }
        //upload data to database
        const record4 = await pb.collection('posts').update(record['id'], data);
    }else{
        //if edit mode is incorrect
        console.log(`"${mode}" is not a valid edit mode`)
    }

    return(
        <div>
            <div>Pocketbase Edit Function, mode# {mode}</div>
        </div>
    );
    // ^ output to next.js frontend (will not output large multi-step arrays, must be a single array or datapoint)
}