import PocketBase from 'pocketbase'
import { Collections, type RevesResponse, type TypedPocketBase, type UsersResponse } from './pocketbase-types'

export const pb = new PocketBase(import.meta.env.VITE_URL_POCKETBASE) as TypedPocketBase


// liste de toutes les reves online avec les informations qui correspondent `a l’user qui les a posté.
export async function allDreamUser() { 
  return await pb.collection(Collections.Reves).getFullList<RevesResponse>({
    expand: 'users', filter: 'online = true'});
}

//une fonction qui recupere un reve par id avec les infos utilisateur
export async function getDreamByID(id) {
  return await pb.collection(Collections.Reves).getOne(id, {expand: 'users'});
}

// liste de touts les uers
export async function allUser() { 
  return await pb.collection(Collections.Users).getFullList<UsersResponse>();
}

//Avoir les données d'un user en pasaant son ID en parapmètre
export async function getUserByID(id) {
  return await pb.collection(Collections.Users).getOne(id);
}

//tous les reves publics avec les infos user par ordre croissant de leur date de cr´eation dans la base de donn´ees
export async function allDreamUserSort() { 
  return await pb.collection(Collections.Reves).getFullList<RevesResponse>(
        {expand: 'users',
            filter: 'online = true',
            sort: '-created'
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
//supprimer un enregistrement dans la collection users
export async function deleteUser(id) {
  return await pb.collection(Collections.Users).delete(id);
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

//tous les reves postée par un user en donnant son id en parametre trié par date de création croissent
export async function allDreamByUserName(id) {
  return await pb.collection('reves').getFullList(
      { filter: `users.id = '${id}' && online = True`,
          expand: 'users', 
          sort: 'created' });
}

//la liste de toutes les reves de l'utilisateur tri" par ordre decroissant
export async function allDreamConnectedUser(id) {
  return await pb.collection('reves').getFullList(
      { filter: `users.id = '${id}'`, expand: 'users', sort: '-created'});
}

//Fonction pour appeler l'IA et intérpréter un rêve
const API_URL = "https://api-inference.huggingface.co/models/mistralai/Mistral-7B-Instruct-v0.3";
const headers = { "Authorization": "Bearer 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", "Content-Type": "application/json" };

export async function  CallIAinterpret(id) {
  try {
   const record = await pb.collection(Collections.Reves).getOne(id);
   const demande = record.Description;

   const prompt =  `Tu es un psychanalyste spécialisé dans l'interprétation des rêves. Donne une analyse complète et précise de ce rêve, ne complète pas le rêve. Concentre-toi uniquement sur l'analyse. Assure-toi que ton analyse soit rédigée sans aucune faute de français, en utilisant un langage courant et accessible. :  '${demande}'`;
   console.log('Le prompt de base :', prompt);

const payload = {
    inputs: prompt,
    parameters: { max_new_tokens: 5000, return_full_text: true }
}

    const response = await fetch(API_URL, {
      method: 'POST',
      headers: headers,
      body: JSON.stringify(payload)
    });

    const reponse = await response.json();
const textegenere = reponse[0].generated_text;

const promptLength = prompt.length;
const outputbrut = textegenere.substring(promptLength).trim();

const output = outputbrut.replace(/```json\n|\n```/g, "");

const newAnalyse = await pb.collection(Collections.Reves).update(id, {Analyse: output});
console.log('Analyse générée :', newAnalyse);

return output;
  } catch (error) {
    console.error('Error:', error);
  }
}
