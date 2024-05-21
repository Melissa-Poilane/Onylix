import PocketBase from 'pocketbase'
import { Collections, type RevesResponse, type UsersResponse } from './pocketbase-types'

export const pb = new PocketBase(import.meta.env.VITE_URL_POCKETBASE)

export async function getDream() {
  return await pb.collection(Collections.Reves).getFullList<RevesResponse>()
}
export async function getDreamOnline() {
  return await pb.collection(Collections.Reves).getFullList<RevesResponse>( {
    filter: `online = true`,
    sort: '+date', 
    expand: 'users'
  })
}

export async function getUser() {
  return await pb.collection(Collections.Users).getFullList<UsersResponse>()
}