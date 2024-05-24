import PocketBase from 'pocketbase'

const pb = new PocketBase('http://127.0.0.1:8090')
/*
export async function getDream() {
    const records = await pb.collection('reves').getFullList()
    return records
  }
  

  
  try {
    //debugger
    const records = await getUser()
    console.log(records)
  } catch (e) {
    console.error(e)
  }

  try {
    //debugger
    const records = await getDreamOnline()
    console.log(records)
  } catch (e) {
    console.error(e)
  }
  export async function oneDream(id) {
    const oneRecord = await pb.collection('reves').getOne(id)
  
    return oneRecord
  }
  try {
    //debugger
    const records = await oneDream('peucwbg2hw7gwm0')
    console.log(records)
  } catch (e) {
    console.error(e)
  }

  export async function getDreamOnline() {
    // Modifier la requête pour filtrer jusqu'à la date du jour actuel
    const filteredresults = await pb.collection('reves').getFullList( {
      filter: ` online = true `,
      sort: '+Date'
    })
    return filteredresults
  }
*/

  async function getDreamsWithAuthors() {
    try {
      const records = await pb.collection('reves').getFullList({
        expand: 'users',
      });
      return records;
    } catch (e) {
      console.error(e);
    }
  }
  
  try {
    const records = await getDreamsWithAuthors();
    console.log(records);
  } catch (e) {
    console.error(e);
  }
  
/*
  async function getUser() {
    const records = await pb.collection('users').getFullList()
    return records
  } 
  
  try {
    //debugger
    const records = await getUser()
    console.log(records)
  } catch (e) {
    console.error(e)
  }
  */