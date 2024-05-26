/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("t6txlidtgwrz4cv")

  collection.name = "reves"

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("t6txlidtgwrz4cv")

  collection.name = "Reves"

  return dao.saveCollection(collection)
})
