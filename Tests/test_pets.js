const { findPackageJSON } = require("module");
const { addPet, findPet } = require("../Utils/api_pets");
const assert = require('assert')


it('Test Add Pet API', async function () {
    const response = await addPet("3", "2", "Dog", "Doggie", "C:/image.png", "3", "Animal");
    assert.equal(response.status, "200", "Add Pet failed")

})

// Pet is found
it("Test find Pet by petId API got success", async function () {
    const response = await findPet("5");
    assert.equal(response.status, "200", "Find Pet failed")
})

it("Test find pet by petId API got fail", async function () {
    const response = await findPet("1");
    const mess = await response.json();
    assert.equal(response.status, "404", "Expected failure but got success!")
    assert.equal(mess["message"], "Pet not found")
})
