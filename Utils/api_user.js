

async function createUser(id, username, firstname, lastname, email, password, phone) {
        const url = "https://petstore.swagger.io/v2/user"
        const response = await fetch(url, {
                method: "POST",
                headers: {
                        "Content-Type": "application/json"
                },
                body: JSON.stringify({
                        "id": id,
                        "username": username,
                        "firstName": firstname,
                        "lastName": lastname,
                        "email": email,
                        "password": password,
                        "phone": phone,
                        "userStatus": 0
                })
        })
        return response;
}


async function login(username, password) {
        const url = "https://petstore.swagger.io/v2/user/login?"
        let response = await fetch(url + new URLSearchParams({
                username: username,
                password: password
        }).toString())
        return response;
}

async function logout() {
        const url = "https://petstore.swagger.io/v2/user/logout";
        const res = await fetch(url);
        return res;
}

async function getUser(username) {
        const url = "https://petstore.swagger.io/v2/user/";
        const res = await fetch(url + username);
        return res;

}

async function updateUser(username, newname) {
        const url = "https://petstore.swagger.io/v2/user/";
        const res = await fetch(url + username,
                {
                        method: "PUT",
                        headers: {
                                "Content-Type": "application/json"
                        },
                        body: JSON.stringify({
                                "username": newname,
                        })
                }
        )
//200
        return res;
}
async function deleteUser(username) {
        const url = "https://petstore.swagger.io/v2/user/";
        const res = await fetch(url + username, {
                method: "DELETE",
                headers: {
                        "Content_type": "application/json"
                },
                body: {
                        "username": username
                }
        })
        return res;
}


module.exports = { getUser, createUser, deleteUser, updateUser, login, logout }