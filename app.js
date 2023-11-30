import express from 'express'

const app = express()
app.use(express.json());

const port = 7070

let users = []

app.get('/users', (req, res) => {
    res.status(200).send(users)
})

app.get('/users/:id', (req, res) => {
    const user = users.find(user => user.id === parseInt(req.params.id))
    console.log({ user })
    res.status(200).send(user)
})

app.post('/users', (req, res) => {
    const body = req.body
    const { name, age } = body
    const newUser = {
        id: users.length + 1,
        name,
        age: parseInt(age)
    }
    users.push(newUser)
    res.status(201).send(newUser)
})

app.delete('/users/:id', (req, res) => {
    users = users.filter(user => user.id !== parseInt(req.params.id))
    res.status(200).send({ message: 'user deleted' })
})


app.listen(port, () => {
    console.log(`Listening on the cool thing port ${port}`)
})