/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("t6txlidtgwrz4cv")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "1hjsoadg",
    "name": "Type_reve",
    "type": "select",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "maxSelect": 1,
      "values": [
        "Cauchemar",
        "Recurrent",
        "Lucide",
        "Reve"
      ]
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("t6txlidtgwrz4cv")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "1hjsoadg",
    "name": "Type_reve",
    "type": "select",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "maxSelect": 1,
      "values": [
        "Cauchemar.svg",
        "Recurrent.svg",
        "Lucide.svg",
        "Reve.svg"
      ]
    }
  }))

  return dao.saveCollection(collection)
})
