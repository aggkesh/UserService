const express = require('express')
const app = express()
const port = 8080

const fs = require('fs');

let rawdata = fs.readFileSync('users.json');  
let users = JSON.parse(rawdata);

app.get('/user/:id', (req, res) => {
	const user = findUser(req.params.id)
	if(user != null) {
		res.status(200)
		res.send({
			"name": user['name'],
			"age": user['age'],
			"email": user['email']
		})
	} else {
		res.status(500)
		res.send("No user found with given id")
	}
});

// Function used user with given userId 
function findUser(userId) {
	const userIdJsonKey = 'userId'

	for(const index in users) {
		const user = users[index]
		if(user.hasOwnProperty(userIdJsonKey)) {
			if(user[userIdJsonKey] == userId) {
				return user
			}
		}
	}

	return null
}

app.use(express.static('public'))

app.listen(port, () => console.log(`User-Service app listening on port ${port}!`))