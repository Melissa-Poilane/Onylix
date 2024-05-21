/**
* This file was @generated using pocketbase-typegen
*/

import type PocketBase from 'pocketbase'
import type { RecordService } from 'pocketbase'

export enum Collections {
	Reves = "Reves",
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
	Auteur?: RecordIdString
	Date?: IsoDateString
	Description: string
	Extrait_de_description?: string
	Longeur_reve?: RevesLongeurReveOptions
	Note_reve?: RevesNoteReveOptions
	Titre: string
	Type_reve?: RevesTypeReveOptions
	online?: boolean
}

export enum UsersAbonnementOptions {
	"free" = "free",
	"premium" = "premium",
	"premium +" = "premium +",
}
export type UsersRecord = {
	Abonnement?: UsersAbonnementOptions
	Avatar?: string
	name: string
}

// Response types include system fields and match responses from the PocketBase API
export type RevesResponse<Texpand = unknown> = Required<RevesRecord> & BaseSystemFields<Texpand>
export type UsersResponse<Texpand = unknown> = Required<UsersRecord> & AuthSystemFields<Texpand>

// Types containing all Records and Responses, useful for creating typing helper functions

export type CollectionRecords = {
	Reves: RevesRecord
	users: UsersRecord
}

export type CollectionResponses = {
	Reves: RevesResponse
	users: UsersResponse
}

// Type for usage with type asserted PocketBase instance
// https://github.com/pocketbase/js-sdk#specify-typescript-definitions

export type TypedPocketBase = PocketBase & {
	collection(idOrName: 'Reves'): RecordService<RevesResponse>
	collection(idOrName: 'users'): RecordService<UsersResponse>
}
