/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("t6txlidtgwrz4cv")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "yf9x5ro0",
    "name": "Analyse",
    "type": "text",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "pattern": ""
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("t6txlidtgwrz4cv")

  // remove
  collection.schema.removeField("yf9x5ro0")

  return dao.saveCollection(collection)
})
