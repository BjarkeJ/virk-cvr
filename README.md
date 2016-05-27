# Introduktion
Dette er en node.js wrapper til det danske CVR register, også kendt som "System-til-system adgang til CVR-data". Tilgå CVR-data om hvilket som helst selskab i Danmark. Lær mere om hvordan får en API key på: http://datahub.virk.dk/dataset/system-til-system-adgang-til-cvr-data/

# Instruktion

## Simpel brug
```
var virkCVRClient = require('./virk_cvr_wrapper');

var apiKey = 'Basic XXXXXX';

var vcc = new virkCVRClient(apiKey);

vcc.mapping(function (err, response) {
  console.log(response);
});

```


## Søgning
```

var searchQuery = { "from" : 0, "size" : 10,
  "query": {
    "bool": {
      "must": {
        "term": {
          "_type": "virksomhed"
        }
      }
    }
  }
};

vcc.search(searchQuery, function (err, response) {
  console.log(response.response.hits.hits);
});

```