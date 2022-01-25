export default async function fetchCollection(collectionId) {
    const collection = await fetch('/api/get-collection?id=' + collectionId)
        .catch(error => console.log(error))
    return await collection.json()
}
