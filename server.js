const express = require('express');
const bcrypt = require('bcryptjs');
const cors = require('cors');

const register = require('./controllers/register');
const login = require('./controllers/login');
const dashboard = require('./controllers/dashboard');
const auth = require('./auth/auth');
const data = require('./data.json');

const app = express();

app.use(cors());   
app.use(express.json());

app.post('/signin', (req, res) => { login.handleSignin(req, res, data, bcrypt)}); 

app.post('/register', (req, res) => { register.handleRegister(req, res, data, bcrypt)});

app.get('/employees', auth.requireAuth, (req, res) => { dashboard.getEmployeesForDashboard(res, data)});

app.listen(3001, ()=> {
    console.log('app is running on port 3001');
  })