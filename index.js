const express = require('express')
const app = express()
const port = 8080

const fs = require('fs');

let rawdata = fs.readFileSync('users.json');  
let users = JSON.parse(rawdata);

app.get('/user/:id', (req, res) => {
	const user = findUser(req.params.id)
	if(user != null) {
		res.send(users[foundIndex])
	} else {
		res.send("No Index found")
	}
});

app.use(express.static('public'))

app.listen(port, () => console.log(`NAGP-quotes app listening on port ${port}!`))

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