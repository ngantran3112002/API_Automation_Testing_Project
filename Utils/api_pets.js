async function findPet(petID) {
    const url = "https://petstore.swagger.io/v2/pet/"
    const res = await fetch(url + petID);
    // let re = await res.json()
    // console.log(re["status"]);
    return res;
}

async function addPet(id, categoryId, categoryName, name, photoUrls, tagId, tagName) {
    const url = "https://petstore.swagger.io/v2/pet";
    const response = await fetch(url, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            "id": id,
            "category": {
                "id": categoryId,
                "name": categoryName
            },
            "name": name,
            "photoUrls": [
                photoUrls
            ],
            "tags": [
                {
                    "id": tagId,
                    "name": tagName
                }
            ],
            "status": "available"
        })
    })
    return response;
}


module.exports = { findPet, addPet }
