migrate((db) => {
  const collection = new Collection({
    "id": "wilq22itef6pwv2",
    "created": "2023-06-11 08:21:19.042Z",
    "updated": "2023-06-11 08:21:19.042Z",
    "name": "login",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "4hvt85hz",
        "name": "email",
        "type": "text",
        "required": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
        }
      },
      {
        "system": false,
        "id": "znypidsp",
        "name": "password",
        "type": "text",
        "required": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
        }
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
  const collection = dao.findCollectionByNameOrId("wilq22itef6pwv2");

  return dao.deleteCollection(collection);
})
