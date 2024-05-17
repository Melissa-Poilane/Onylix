/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "t6txlidtgwrz4cv",
    "created": "2024-05-17 08:47:37.376Z",
    "updated": "2024-05-17 08:47:37.376Z",
    "name": "Reves",
    "type": "base",
    "system": false,
    "schema": [
      {
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
            "Récurrent",
            "Lucide",
            "Rêve"
          ]
        }
      },
      {
        "system": false,
        "id": "asqy9yoq",
        "name": "Longeur_reve",
        "type": "select",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {
          "maxSelect": 1,
          "values": [
            "1",
            "2",
            "3",
            "4",
            "5"
          ]
        }
      },
      {
        "system": false,
        "id": "7kz0pn1f",
        "name": "Note_reve",
        "type": "select",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {
          "maxSelect": 1,
          "values": [
            "1",
            "2",
            "3",
            "4",
            "5"
          ]
        }
      },
      {
        "system": false,
        "id": "9njtq2mi",
        "name": "Titre",
        "type": "text",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
        }
      },
      {
        "system": false,
        "id": "9r6gjv0d",
        "name": "Description",
        "type": "text",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
        }
      },
      {
        "system": false,
        "id": "x8ermpz5",
        "name": "Extrait_de_description",
        "type": "text",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
        }
      },
      {
        "system": false,
        "id": "atub8t5s",
        "name": "Date_heure_de_saisie",
        "type": "date",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {
          "min": "",
          "max": ""
        }
      },
      {
        "system": false,
        "id": "9kfqxotr",
        "name": "online",
        "type": "bool",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {}
      }
    ],
    "indexes": [],
    "listRule": null,
    "viewRule": null,
    "createRule": null,
    "updateRule": null,
    "deleteRule": null,
    "options": {}
  });

  return Dao(db).saveCollection(collection);
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("t6txlidtgwrz4cv");

  return dao.deleteCollection(collection);
})
