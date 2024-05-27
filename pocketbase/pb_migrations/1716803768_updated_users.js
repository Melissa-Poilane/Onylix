/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("_pb_users_auth_")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "xk6mc6jy",
    "name": "Avatar",
    "type": "select",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "maxSelect": 1,
      "values": [
        "../public/avatars/biche.webp",
        "../public/avatars/chat.webp",
        "../public/avatars/corbeau.webp",
        "../public/avatars/hibou.webp",
        "../public/avatars/panda.webp",
        "../public/avatars/tigre.webp"
      ]
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("_pb_users_auth_")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "xk6mc6jy",
    "name": "Avatar",
    "type": "select",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "maxSelect": 1,
      "values": [
        "biche.webp",
        "chat.webp",
        "corbeau.webp",
        "hibou.webp",
        "panda.webp",
        "tigre.webp"
      ]
    }
  }))

  return dao.saveCollection(collection)
})
