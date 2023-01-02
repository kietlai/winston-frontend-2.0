//inputs from frontend ------------------
let name = "nate"; //name saved in database
let q = 1; //quarter selection, 1-4 (0 is final)
let classNum = 2; //class number to pull data from
// --------------------------------------

import PocketBase from "pocketbase"; //node module import for database

export default async function Page() {
  const pb = new PocketBase("http://127.0.0.1:8090"); //start database on local port

  //get data from database using user's name
  let record = await pb
    .collection("posts")
    .getFirstListItem('name="' + name + '"', {
      expand: "relField1,relField2.subRelField",
    });

  //define places for sorted data to go (for class specifications)
  let removed = {
    name: [],
    givenGrade: [],
    maxGrade: [],
    weight: [],
    class: [],
  };
  let finalRemoved = {
    perc: [],
    class: [],
  };
  //function to read and sort data
  function readClass() {
    //if quarter 1-4 selected
    if (q > 0) {
      if (record["data"][q - 1] == undefined) {
        return `${q} is not a valid grading section`;
      }
      //console.log("p1")

      //find instances of class we are looking for
      let index = record["data"][q - 1]["class"].indexOf(classNum);
      if (index > -1) {
        //add that listing's data to storage defined above
        removed["name"].push(
          record["data"][q - 1]["name"].splice(index, 1).toString()
        );
        removed["givenGrade"].push(
          parseInt(record["data"][q - 1]["givenGrade"].splice(index, 1))
        );
        removed["maxGrade"].push(
          parseInt(record["data"][q - 1]["maxGrade"].splice(index, 1))
        );
        removed["weight"].push(
          parseInt(record["data"][q - 1]["weight"].splice(index, 1))
        );
        removed["class"].push(
          parseInt(record["data"][q - 1]["class"].splice(index, 1))
        );
      }
      //if more, re-do function untill all data is collected
      if (record["data"][q - 1]["class"].includes(classNum)) {
        readClass();
      }
      //return required data in array form
      return removed;

      //if final is selected
    } else if (q == 0) {
      //console.log("p2")

      //find instances of class we are looking for
      let index = record["final"]["class"].indexOf(classNum);
      if (index > -1) {
        //add that listing's data to storage defined above
        finalRemoved["class"].push(
          parseInt(record["final"]["class"].splice(index, 1))
        );
        finalRemoved["perc"].push(
          parseInt(record["final"]["perc"].splice(index, 1))
        );
      }
      //if more, re-do function untill all data is collected
      if (record["final"]["class"].includes(classNum)) {
        readClass();
      }
      //return required data in array form
      return finalRemoved;
    }
  }
  //console.log(readClass())
  return (
    <div>
      <div>{JSON.stringify(readClass())}</div>
    </div>
  );
  // ^ output to next.js frontend (will not output large multi-step arrays, must be a single array or datapoint)
}
