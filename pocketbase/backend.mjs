import PocketBase from 'pocketbase' ;
const pb = new PocketBase('http://127.0.0.1:8090') ;

//Remonter les donnee d'un user en passant son id en param depuis reves
export async function allDreamUser() {
    const record =  await pb.collection('maison').getFullList(
        { expand: 'agent',
    }) ;
    return record ;
}