const express = require('express');
const app = express();

const USER_ROUTE = '/api/users/:id';

function getUserById(req, res) {
  const { id } = req.params;
  res.send(`User ${id}`);
}

app.get(USER_ROUTE, getUserById);
app.post('/api/users', createUser);
app.delete('/api/items/:itemId', (req, res) => {
  res.sendStatus(204);
});

function createUser(req, res) {
  res.json({ id: 1, name: 'New User' });
}