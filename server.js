//const express = require('express')
import express from 'express'
const app = express()

//const rollDice = require('./lib/a03-wlan418/lib/roll.js')
import rollDice from './roll.js'

//const minimist = require('minimist')
import minimist from 'minimist'

const args = minimist(process.argv.slice(2))

const port = args.port || 5000

app.use(express.json())
app.use(express.urlencoded({extended: true}))

app.get('/', (req, res, next) => {
	res.status(404).send("404 NOT FOUND")
})

app.get('/app/', (req, res, next) => {
	res.status(200).send("200 OK")
})

app.get('/app/roll/', (req, res, next) => {
	const sides =  6
	const dice =  2
	const rolls =  1
	const results = rollDice(sides, dice, rolls)
	res.status(200).json({"sides": sides, "dice": dice, "rolls": rolls, "results": results})
})

app.post('/app/roll/', (req, res) => {
	const sides = parseInt(req.body.sides)
	const dice = parseInt(req.body.dice)
	const rolls = parseInt(req.body.rolls)
	const results = rollDice(sides, dice, rolls)
	res.status(200).json({"sides": sides, "dice": dice, "rolls": rolls, "results": results})
})

app.get('/app/roll/:sides/', (req, res, next) => {
	const sides = parseInt(req.params.sides)
	const dice = 2
	const rolls = 1
	const results = rollDice(sides, dice, rolls)
	res.status(200).json({"sides": sides, "dice": dice, "rolls": rolls, "results": results})
})

app.get('/app/roll/:sides/:dice/', (req, res, next) => {
	const sides = parseInt(req.params.sides)
	const dice = parseInt(req.params.dice)
	const rolls = 1
	const results = rollDice(sides, dice, rolls)
	res.status(200).json({"sides": sides, "dice": dice, "rolls": rolls, "results": results})

})

app.get('/app/roll/:sides/:dice/:rolls/', (req, res, next) => {
	const sides = parseInt(req.params.sides)
	const dice = parseInt(req.params.dice)
	const rolls = parseInt(req.params.rolls)
	const results = rollDice(sides, dice, rolls)
	res.status(200).json({"sides": sides, "dice": dice, "rolls": rolls, "results": results})
})

app.listen(port, () => {
	console.log("Server listening on port " + port + ".")
})
