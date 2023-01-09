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
	res.status(404)
})

app.get('/app/', (req, res, next) => {
	res.status(200)
})

app.get('/app/roll/', (req, res, next) => {
	const sides =  req.body.sides || 6
	const dice =  req.body.dice || 2
	const rolls =  req.body.rolls || 1
	const results = rollDice(sides, dice, rolls)
	res.status(200).json({"sides": sides, "dice": dice, "rolls": rolls, "results": results})
})

app.get('/app/roll/:sides/', (req, res, next) => {
	const sides = req.params.sides
	const dice = 2
	const rolls = 1
	const results = rollDice(sides, dice, rolls)
	res.status(200).json({"sides": sides, "dice": dice, "rolls": rolls, "results": results})
})

app.get('/app/roll/:sides/:dice/', (req, res, next) => {
	const sides = req.params.sides
	const dice = req.params.dice
	const rolls = 1
	const results = rollDice(sides, dice, rolls)
	res.status(200).json({"sides": sides, "dice": dice, "rolls": rolls, "results": results})

})

app.get('/app/roll/:sides/:dice/:rolls/', (req, res, next) => {
	const sides = req.params.sides
	const dice = req.params.dice
	const rolls = req.params.rolls
	const results = rollDice(sides, dice, rolls)
	res.status(200).json({"sides": sides, "dice": dice, "rolls": rolls, "results": results})
})

app.listen(port, () => {
	console.log("Server listening on port " + port + ".")
})
