# install

    $ git clone https://github.com/gunman-vagabond/gunclock-api.git
    $ cd gunclock-api
    $ npm install

# run

This gunclock-api is using MongoDB.

Specify MongoDB URI with 'MONGODB_URI' environment value.

    $ cd gunclock-api
    $ DEBUG=gunclock-api:* PORT=3000 MONGODB_URI=mongodb://localhost/gunclock npm start

# access (CURL)

## GET (get all)

    $ curl -X GET localhost:3000/gunclock

## GET (get one)

    $ curl -X GET localhost:3000/gunclock/5e508050de797e6001faa558

## POST (create)

    $ curl -X POST localhost:3000/gunclock -H 'Content-Type:application/json' -d '{ "color":"#ffcccc", "size": "15" }'

## PUT (update one)

    $ curl -X PUT localhost:3000/gunclock/5e508050de797e6001faa558 -H 'Content-Type:application/json' -d '{ "color":"#ccffcc", "size": "20" }'

## DELETE (delete one)

    $ curl -X DELETE localhost:3000/gunclock/5e50817cde797e6001faa559

# front-end Angular

Anular web-ap using this gunclock-api can be downloaded in https://github.com/gunman-vagabond/gunclock-angular.git

