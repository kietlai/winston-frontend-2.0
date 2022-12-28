//inputs from frontend ------------------
let name = "greg"; //name saved in database
let q = 1; //quarter selection, 1-4 (5 is final)
let assignNum = 2; //what assignment is being edited
let mode = 3; //modes, 1 = add, 2 = modify, 3 = delete
let assignName = "SWYK 15"; //the new name of the assignment to be edited/added
let maxGrade = 25; //the max points of the assignment to be edited/added
let givenGrade = 22; //the points you earned on the assignment to be edited/added
let assignClassNum = 2; //the class number of the assignment to be edited/added
let assignWeight = 7; //the weight of the assignment(major/minor) to be edited/added
// --------------------------------------

import PocketBase from "pocketbase"; //node module import for database

export default async function Page() {
  const pb = new PocketBase("http://127.0.0.1:8090"); //start database on local port

  //read database for any data saved under the user's name
  let record1 = await pb
    .collection("posts")
    .getFirstListItem('name="' + name + '"', {
      expand: "relField1,relField2.subRelField",
    });
  //add data
  if (mode == 1) {
    //add the new data to the database data
    record1["q" + q]["name"].push(assignName);
    record1["q" + q]["givenGrade"].push(givenGrade);
    record1["q" + q]["maxGrade"].push(maxGrade);
    record1["q" + q]["weight"].push(assignWeight);
    record1["q" + q]["class"].push(assignClassNum);

    //put data into format that database can read
    let qtr = "q" + q.toString();
    let data = {
      [qtr]: {
        name: record1["q" + q]["name"],
        givenGrade: record1["q" + q]["givenGrade"],
        maxGrade: record1["q" + q]["maxGrade"],
        weight: record1["q" + q]["weight"],
        class: record1["q" + q]["class"],
      },
    };
    //upload data to database
    let record2 = await pb.collection("posts").update(record1["id"], data);
    //edit data
  } else if (mode == 2) {
    //edit data to allign with data input by user
    record1["q" + q]["name"][assignNum] = assignName;
    record1["q" + q]["givenGrade"][assignNum] = givenGrade;
    record1["q" + q]["maxGrade"][assignNum] = maxGrade;
    record1["q" + q]["weight"][assignNum] = assignWeight;
    record1["q" + q]["class"][assignNum] = assignClassNum;

    //put data into format that database can read
    let qtr = "q" + q.toString();
    let data = {
      [qtr]: {
        name: record1["q" + q]["name"],
        givenGrade: record1["q" + q]["givenGrade"],
        maxGrade: record1["q" + q]["maxGrade"],
        weight: record1["q" + q]["weight"],
        class: record1["q" + q]["class"],
      },
    };
    //upload data to database
    const record2 = await pb.collection("posts").update(record1["id"], data);
    //remove data
  } else if (mode == 3) {
    //remove data that is specified by user
    record1["q" + q]["name"].splice(assignNum - 1, 1);
    record1["q" + q]["givenGrade"].splice(assignNum - 1, 1);
    record1["q" + q]["maxGrade"].splice(assignNum - 1, 1);
    record1["q" + q]["weight"].splice(assignNum - 1, 1);
    record1["q" + q]["class"].splice(assignNum - 1, 1);
    console.log(record1["q" + q]["name"]);

    //put data into format that the database can read
    let qtr = "q" + q.toString();
    let data = {
      [qtr]: {
        name: record1["q" + q]["name"],
        givenGrade: record1["q" + q]["givenGrade"],
        maxGrade: record1["q" + q]["maxGrade"],
        weight: record1["q" + q]["weight"],
        class: record1["q" + q]["class"],
      },
    };
    //upload data to database
    const record2 = await pb.collection("posts").update(record1["id"], data);
  } else {
    //if edit mode is incorrect
    console.log(`"${mode}" is not a valid edit mode`);
  }

  return (
    <div>
      <div>Pocketbase Edit Function, mode# {mode}</div>
    </div>
  );
  // ^ output to next.js frontend (will not output large multi-step arrays, must be a single array or datapoint)
}
