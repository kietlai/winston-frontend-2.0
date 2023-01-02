//inputs from frontend ------------------
let name = "nate"   //name saved in database
// --------------------------------------

import PocketBase from 'pocketbase'; //node module import for database

export default async function Page() {
    
    
    let WGPA = 0; //Important output number
    
    
    const pb = new PocketBase('http://127.0.0.1:8090'); //start database on local port
    let record = await pb.collection('posts').getFirstListItem('name="' + name + '"', {
        expand: 'relField1,relField2.subRelField',
    });
    let GPAs = [];
    let classes = Math.max(...record.classes.num);
    for (let classNum = 1; classNum <= classes; classNum++) {
        let max = 0;
        let giv = 0;
        let classData = {
            "max": [],
            "giv": [],
            "weight": []
        }
        for(let q = 0; q < record.data.length; q ++){
            function search1(){ //classnumber search
                let index = record["data"][q]["class"].indexOf(classNum);
                if (index > -1) {
                    classData.max.push(parseInt((record.data[q].maxGrade).splice(index, 1)))
                    classData.giv.push(parseInt((record.data[q].givenGrade).splice(index, 1)))
                    classData.weight.push(parseInt((record.data[q].weight).splice(index, 1)))
                    record.data[q].class.splice(index, 1)
                    if(record.data[q].class.includes(classNum)){
                        search1()
                    }
                }
            }
            search1()
        }
        for(let A = 0; A < classData.max.length; A++){
            if(classData.weight[A] == 3){
                max += (classData.max[A])*3
                giv += (classData.giv[A])*3
            }else if(classData.weight[A] == 7){
                max += (classData.max[A])*7
                giv += (classData.giv[A])*7
            }
        }

        let perc = Math.round((giv/max)*100);
        if(record.classes.weight[classNum-1] == 1){
            if(perc >= 90){
                GPAs.push(4)
            }else if(perc >= 80){
                GPAs.push(3)
            }else if(perc >= 70){
                GPAs.push(2)
            }else if(perc >= 60){
                GPAs.push(1)
            }else if(perc >= 50){
                GPAs.push(0)
            }
        }else if(record.classes.weight[classNum-1] == 2){
            if(perc >= 90){
                GPAs.push(5)
            }else if(perc >= 80){
                GPAs.push(4)
            }else if(perc >= 70){
                GPAs.push(3)
            }else if(perc >= 60){
                GPAs.push(1)
            }else if(perc >= 50){
                GPAs.push(0)
            }
        }else if(record.classes.weight[classNum-1] >= 3){
            if(perc >= 90){
                GPAs.push(6)
            }else if(perc >= 80){
                GPAs.push(5)
            }else if(perc >= 70){
                GPAs.push(4)
            }else if(perc >= 60){
                GPAs.push(1)
            }else if(perc >= 50){
                GPAs.push(0)
            }
        }
    }
    WGPA = (Math.round(((GPAs.reduce((accumulator, currentValue) => accumulator + currentValue, 0))/GPAs.length)*100))/100
    return(
        <div>
            <div>Your Weighted GPA: {WGPA}</div>
        </div>
    );
}