//inputs from frontend ------------------
let name = "nate"; //name saved in database
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
  let MajPerc = 0;
  let MinPerc = 0;
  let finalPerc = 0;
  //function to read and sort data
  let percs = [];
  function getMaj(q) {
    //if quarter 1-4 selected
    let perc = 0;
    //find instances of class we are looking for
    let index = record["data"][q]["weight"].indexOf(7);
    if (index > -1) {
      //add that listing's data to storage defined above
      record["data"][q]["weight"].splice(index, 1);
      perc =
        parseInt(record["data"][q]["givenGrade"].splice(index, 1)) /
        parseInt(record["data"][q]["maxGrade"].splice(index, 1));
    }
    if (index > -1) {
      percs.push(perc);
    }

    //if more, re-do function untill all data is collected
    if (record["data"][q]["weight"].includes(7)) {
      getMaj(q);
    }
    return percs;
  }
  for (let step = 0; step < record.data.length; step++) {
    if (record.data.length - 1 == step) {
      getMaj(step);
    } else {
      MajPerc =
        getMaj(step).reduce(
          (accumulator, currentValue) => accumulator + currentValue,
          0
        ) / getMaj(step).length;
    }
  }
  //-------------------------------------------
  let percs2 = [];
  function getMin(q) {
    //if quarter 1-4 selected
    let perc = 0;
    //find instances of class we are looking for
    let index = record["data"][q]["weight"].indexOf(3);
    if (index > -1) {
      //add that listing's data to storage defined above
      record["data"][q]["weight"].splice(index, 1);
      perc =
        parseInt(record["data"][q]["givenGrade"].splice(index, 1)) /
        parseInt(record["data"][q]["maxGrade"].splice(index, 1));
    }
    if (index > -1) {
      percs2.push(perc);
    }

    //if more, re-do function untill all data is collected
    if (record["data"][q]["weight"].includes(3)) {
      getMin(q);
    }
    return percs2;
  }
  for (let step = 0; step < record.data.length; step++) {
    if (record.data.length - 1 == step) {
      getMin(step);
    } else {
      MinPerc =
        getMin(step).reduce(
          (accumulator, currentValue) => accumulator + currentValue,
          0
        ) / getMin(step).length;
    }
  }
  finalPerc =
    (Math.round(MajPerc * 100) * 3 + Math.round(MinPerc * 100) * 7) / 10;

  function GPA(perc) {
    if (perc > 92) {
      return 4.0;
    } else if (perc > 89) {
      return 3.7;
    } else if (perc > 86) {
      return 3.3;
    } else if (perc > 82) {
      return 3.0;
    } else if (perc > 79) {
      return 2.7;
    } else if (perc > 76) {
      return 2.3;
    } else if (perc > 72) {
      return 2.0;
    } else if (perc > 69) {
      return 1.7;
    } else if (perc > 66) {
      return 1.3;
    } else if (perc > 65) {
      return 1.0;
    } else {
      return 0.0;
    }
  }

  return (
    <div>
      <div>Your GPA: {GPA(finalPerc)}</div>
    </div>
  );
}
