let name = "greg"

import PocketBase from 'pocketbase'; //node module import for database

export default async function Page() {
    const pb = new PocketBase('http://127.0.0.1:8090'); //start database on local port
    //return q+1;
    //get data from database using user's name
    let record = await pb.collection('posts').getFirstListItem('name="' + name + '"', {
        expand: 'relField1,relField2.subRelField',
    });
    //console.log(record)

    return(
        <div>
            <div>{JSON.stringify(record)}</div>
        </div>
    );
    // ^ output to next.js frontend (will not output large multi-step arrays, must be a single array or datapoint)
}