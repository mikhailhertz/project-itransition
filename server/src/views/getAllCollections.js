const Collection = require('../models/collectionModel')

async function getAllCollections(request, response) {
    var collection = await Collection.find()
        .select('-user -__v').lean().exec()
    response.json(collection)
}

module.exports = getAllCollections
