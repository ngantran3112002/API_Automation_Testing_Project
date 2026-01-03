const { getUser, createUser, deleteUser, updateUser, login, logout } = require("../Utils/api_user");

const assert = require('assert')

it("test login function", async function () {
    const response = await login("user1", "123");
    assert.equal(response.status, 200, "Login Failed")
})

it("Test logout API", async function () {
    const response = await logout();
    assert.equal(response.status, 200, "Logout failed")
})

it("Test Create User API", async function () {
    const response = await createUser("2", "User1", "fName", "lName", "user@gmail.com", "123", "0123456");
    assert.equal(response.status, 200, "Create user failed")
})

it("Testing Get User by username API got Success", async function () {
    const response = await getUser("John");
    const message = await response.json();
    assert.equal(response.status, 200, "Get user failed")
    assert.equal(message["username"], "John");
    assert.equal(message["email"], "JohnDemo@gmail.com")
})

it("Testing get User by username API got failed", async function () {
    const response = await getUser("Alice");
    const message = await response.json();
    assert.equal(response.status, 404, "Expected failure but got success!")
    assert.equal(message["message"], "User not found")
})
it("Test Update User API", async function () {
    const response = await updateUser("user1", "newUser");
    assert.equal(response.status, 200, "Update user failed")

})

it("Test Delete User API got Success", async function () {
    const user = await createUser("2", "User1", "fName", "lName", "user@gmail.com", "123", "0123456");
    const response = await deleteUser("User1");
    assert.equal(response.status, 200, "Delete user failed")
})


it("Test Delete User API got failed", async function () {
    const response = await deleteUser("user1");
    assert.equal(response.status, 404, "Expected failure but got success!")
})
