/**
* This file was @generated using pocketbase-typegen
*/

import type PocketBase from 'pocketbase'
import type { RecordService } from 'pocketbase'

export enum Collections {
	Reves = "reves",
	Users = "users",
}

// Alias types for improved usability
export type IsoDateString = string
export type RecordIdString = string
export type HTMLString = string

// System fields
export type BaseSystemFields<T = never> = {
	id: RecordIdString
	created: IsoDateString
	updated: IsoDateString
	collectionId: string
	collectionName: Collections
	expand?: T
}

export type AuthSystemFields<T = never> = {
	email: string
	emailVisibility: boolean
	username: string
	verified: boolean
} & BaseSystemFields<T>

// Record types for each collection

export enum RevesTypeReveOptions {
	"Cauchemar" = "Cauchemar",
	"Récurrent" = "Récurrent",
	"Lucide" = "Lucide",
	"Rêve" = "Rêve",
}

export enum RevesLongeurReveOptions {
	"E1" = "1",
	"E2" = "2",
	"E3" = "3",
	"E4" = "4",
	"E5" = "5",
}

export enum RevesNoteReveOptions {
	"E1" = "1",
	"E2" = "2",
	"E3" = "3",
	"E4" = "4",
	"E5" = "5",
}
export type RevesRecord = {
	Date?: IsoDateString
	Description: string
	Extrait_de_description?: string
	Longeur_reve?: RevesLongeurReveOptions
	Note_reve?: RevesNoteReveOptions
	Titre: string
	Type_reve?: RevesTypeReveOptions
	online?: boolean
	users?: RecordIdString
}

export enum UsersAbonnementOptions {
	"free.svg" = "free.svg",
	"premium.svg" = "premium.svg",
	"premium+.svg" = "premium+.svg",
}

export enum UsersAvatarOptions {
	"biche.webp" = "biche.webp",
	"chat.webp" = "chat.webp",
	"corbeau.webp" = "corbeau.webp",
	"hibou.webp" = "hibou.webp",
	"panda.webp" = "panda.webp",
	"tigre.webp" = "tigre.webp",
}
export type UsersRecord = {
	Abonnement?: UsersAbonnementOptions
	Avatar?: UsersAvatarOptions
	biographie?: string
	name: string
}

// Response types include system fields and match responses from the PocketBase API
export type RevesResponse<Texpand = unknown> = Required<RevesRecord> & BaseSystemFields<Texpand>
export type UsersResponse<Texpand = unknown> = Required<UsersRecord> & AuthSystemFields<Texpand>

// Types containing all Records and Responses, useful for creating typing helper functions

export type CollectionRecords = {
	reves: RevesRecord
	users: UsersRecord
}

export type CollectionResponses = {
	reves: RevesResponse
	users: UsersResponse
}

// Type for usage with type asserted PocketBase instance
// https://github.com/pocketbase/js-sdk#specify-typescript-definitions

export type TypedPocketBase = PocketBase & {
	collection(idOrName: 'reves'): RecordService<RevesResponse>
	collection(idOrName: 'users'): RecordService<UsersResponse>
}
