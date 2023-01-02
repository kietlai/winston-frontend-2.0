let name = "nate";
let className = "GYM"
let weight = 2 //1=ST 2=H 3=GT 4=IB 5=AP (GT IB & AP have same weight rankings (BCPS))

let stat = 0; //debug

import PocketBase from 'pocketbase'; //node module import for database

export default async function Page(){
    const pb = new PocketBase('http://127.0.0.1:8090'); //start database on local port
    let record = await pb.collection('posts').getFirstListItem('name="' + name + '"', {
        expand: 'relField1,relField2.subRelField',
    });
    if(!(record.classes.name.includes(className))){
        record.classes.name.push(className)
        record.classes.weight.push(weight)
        record.classes.num.push((Math.max(...record.classes.num))+1)
        console.log(record.classes)
        let pushData = {
            "classes":{
                "num":  record.classes.num,
                "name": record.classes.name,
                "weight": record.classes.weight
            }
        }
        let record1 = await pb.collection('posts').update(record['id'], pushData);
    }else{
        stat = ": class already exists"
    }
    return(
        <div>
            <div>addClass {className}{stat}</div>
        </div>
    );
}