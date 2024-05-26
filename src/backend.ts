import PocketBase from 'pocketbase'
import { Collections, type RevesResponse } from './pocketbase-types'

export const pb = new PocketBase(import.meta.env.VITE_URL_POCKETBASE)


// liste de toutes les reves online avec les informations qui correspondent `a l’user qui les a posté.
export async function allDreamUser() { 
  return await pb.collection(Collections.Reves).getFullList<RevesResponse>({
    expand: 'users', filter: 'online = true'});
}

//Avoir les données d'un user en pasaant son ID en parapmètre
export async function getUserByID(id) {
  return await pb.collection(Collections.Users).getOne(id);
}


//tous les reves postée par un user en donnant son pseudo en parametre.
//PASBON
export async function allDreamByUserName(name) {
    const dreamUsername = await pb.collection('reves').getFullList(
        { filter: `users.id = '${name}'` && 'online = true',
            expand: 'users' });
    return dreamUsername;
}

//la liste de toutes les reves de l'utilisateur qui est connecté
//PASBON
export async function allDreamConnectedUser() {
    const dreamConnectedUser = await pb.collection('reves').getFullList(
        { expand: 'users' });
    return dreamConnectedUser;
}

//tous les reves publics avec les infos user par ordre croissant de leur date de cr´eation dans la base de donn´ees
export async function allDreamUserSort() { 
  return await pb.collection(Collections.Reves).getFullList<RevesResponse>(
        {expand: 'users',
            filter: 'online = true',
            sort: 'created'
        })
}

//creer une nouvel enregistrement de revee dans la base de donn´ees
export async function createDream(dream) {
  return await pb.collection(Collections.Reves).create(dream);
}

//ajouter des user dans la base de donn´ ees
export async function validateMDP(password, passwordConfirm) {
  if (password.value !== passwordConfirm.value) {
      return false;
  } else {
      return true;
  }
};

export async function createUser(user) {
  if (!validateMDP(password, passwordConfirm)) {
    alert('Les mots de passe ne correspondent pas');
    return false;
  }

  if (!selectedImageIndex.value) {
    alert('Vous devez choisir un avatar');
    return false;
  }
  
  if (!termsAccepted.value) {
    alert('Vous devez accepter les conditions générales d’utilisations')
  }

  const record = await pb.collection(Collections.Users).create(user);
    if (record) {
      await doLogin();
    } else {
      console.log("error");
      alert('Une erreur est survenue');
    } 
  }


//connecter un utilisateur 

//supprimer un enregistrement dans la collection reves
export async function deleteDream(id) {
  return await pb.collection(Collections.Reves).delete(id);
}

//Modifier un enregistrement dans la collection users
export async function updateUser(id, user) {
  return await pb.collection(Collections.Users).update(id, user);
}

//Modifier un enregistrement dans la collection reves
export async function updateDream(id, dream) {
  return await pb.collection(Collections.Reves).update(id, dream);
}

//Raccourcir autimatiquement la description pour en crée l'extrait
export function truncateDescription(description, length) {
    if (description.length > length) {
        return description.substring(0, length) + "";
    } else {
        return description;
    }
}