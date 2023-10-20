const response = {
  "id": "api.content.search",
  "ver": "1.0",
  "ts": "2023-10-10T13:56:50.374Z",
  "params": {
    "resmsgid": "dc3a4e60-6774-11ee-a1e6-236e810e887c",
    "msgid": "6803be90-3c86-4964-a5db-fdb8b39dd9cc",
    "status": "successful",
    "err": null,
    "errmsg": null
  },
  "responseCode": "OK",
  "result": {
    "count": 1,
    "content": [
      {
        "trackable": {
          "enabled": "No",
          "autoBatch": "No"
        },
        "identifier": "do_113777389672423424171",
        "primaryCategory": "Course Unit",
        "channel": "0137541424673095687",
        "name": "Course Unit",
        "mimeType": "application/vnd.ekstep.content-collection",
        "contentType": "CourseUnit",
        "pkgVersion": 1,
        "objectType": "Content",
        "orgDetails": {
          "email": null,
          "orgName": "Sunbird Org"
        }
      }
    ],
    "facets": [
      {
        "values": [{
          "name": "grains",
          "count": 9
        },
        {
          "name": "horticulture",
          "count": 32
        }],

        "name": "foodcrops"
      },
      {
        "values": [{
          "name": "feedingandnutrition",
          "count": 9
        },
        {
          "name": "geneticsandselection",
          "count": 32
        }],
        "name": "livestockmanagement"
      },
      {
        "values": [
          {
            "name": "course unit",
            "count": 1
          }
        ],
        "name": "primaryCategory"
      },
      {
        "values": [{
          "name": "crops",
          "count": 9
        },
        {
          "name": "pastures",
          "count": 32
        }],
        "name": "commercialcrops"
      },
      {
        "values": [{
          "name": "beefcattle",
          "count": 9
        },
        {
          "name": "bees",
          "count": 32
        }],
        "name": "livestockspecies"
      },
      {
        "values": [{
          "name": "diseases",
          "count": 9
        }
        ],
        "name": "animalwelfare"
      },
      {
        "values": [
          {
            "name": "content",
            "count": 1
          }
        ],
        "name": "mediaType"
      },
      {
        "values": [
          {
            "name": "application/vnd.ekstep.content-collection",
            "count": 1
          }
        ],
        "name": "mimeType"
      }
    ]
  }
};

module.exports = response;

