let name = 'nate'

import PocketBase from 'pocketbase'; //node module import for database
export default async function Page() {
    const pb = new PocketBase('http://127.0.0.1:8090'); //start database on local port
    let record = await pb.collection('posts').getFirstListItem('name="' + name + '"', {
        expand: 'relField1,relField2.subRelField',
    });

    let data = {
        "data": record.data,
    }

    let newData = {
          "class": [],
          "givenGrade": [],
          "maxGrade": [],
          "name": [],
          "weight": []
        }

    data.data.push(newData)
    //console.log(data)

    let record1 = await pb.collection('posts').update(record['id'], data);
    return(
        <div>
            <div>addSemester</div>
        </div>
    );
}