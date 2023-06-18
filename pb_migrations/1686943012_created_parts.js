migrate((db) => {
  const collection = new Collection({
    "id": "5j4n7jxsotku4cx",
    "created": "2023-06-16 19:16:52.588Z",
    "updated": "2023-06-16 19:16:52.588Z",
    "name": "parts",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "ozpp7l6d",
        "name": "part",
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
        "id": "hdva3wq6",
        "name": "volume",
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
  const collection = dao.findCollectionByNameOrId("5j4n7jxsotku4cx");

  return dao.deleteCollection(collection);
})
