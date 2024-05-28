import PocketBase from 'pocketbase'

const pb = new PocketBase('http://127.0.0.1:8090')

// liste de toutes les reves online avec les informations qui correspondent `a l’user qui les a posté.
export async function allDreamUser() { 
    const fulllist = await pb.collection('reves').getFullList(
        {expand: 'users',
            filter: 'online = true'
        });
        return fulllist ;
}

//Avoir les données d'un user en pasaant son ID en parapmètre
export async function getUserByID(id) {
    const userbyid =  await pb.collection('users').getOne(id) ;
    return userbyid ;
}

//tous les reves publics avec les infos user par ordre croissant de leur date de cr´eation dans la base de donn´ees
export async function allDreamUserSort() { 
    const fulllistsorted = await pb.collection('reves').getFullList(
        {expand: 'users',
            filter: 'online = true',
            sort: 'created'
        });
        return fulllistsorted ;
}

//creer une nouvel enregistrement de revee dans la base de donn´ees
export async function createDream(dream) {
    const dreamCreated = await pb.collection('reves').create(dream);
    return dreamCreated;
}

//ajouter des user dans la base de donn´ ees
export async function createUser(user) {
    const userCreated = await pb.collection('users').create(user);
    return userCreated;
}

//supprimer un enregistrement dans la collection reves
export async function deleteDream(id) {
    const dreamDeleted = await pb.collection('reves').delete(id);
    return dreamDeleted;
}

//Modifier un enregistrement dans la collection users
export async function updateUser(id, user) {
    const userUpdated = await pb.collection('users').update(id, user);
    return userUpdated;
}

//Modifier un enregistrement dans la collection reves
export async function updateDream(id, dream) {
    const dreamUpdated = await pb.collection('reves').update(id, dream);
    return dreamUpdated;
}

//Raccourcir autimatiquement la description pour en crée l'extrait
export function truncateDescription(description, length) {
    if (description.length > length) {
        return description.substring(0, length) + "";
    } else {
        return description;
    }
}

//tous les reves postée par un user en donnant son pseudo en parametre.
export async function allDreamByUserName(name) {
    const dreamUsername = await pb.collection('reves').getFullList(
        { filter: `users.username = "${name}" && online = True`,
            expand: 'users' });
    return dreamUsername;
}

//la liste de toutes les reves de l'utilisateur 
export async function allDreamConnectedUser(id) {
    const dreamConnectedUser = await pb.collection('reves').getFullList(
        { filter: `users.id = '${id}'`, expand: 'users' });
    return dreamConnectedUser;
}