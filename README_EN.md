# Introduction
This is a wrapper for the Danish company registry. Access registry information about any company in Denmark. Learn how to obtain an API key at: http://datahub.virk.dk/dataset/system-til-system-adgang-til-cvr-data/

# Intructions

## Basic usage
```
var virkCVRClient = require('./virk_cvr_wrapper');

var apiKey = 'Basic XXXXXX';

var vcc = new virkCVRClient(apiKey);

vcc.mapping(function (err, response) {
  console.log(response);
});

```


## Search
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