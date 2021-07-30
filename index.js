const express = require('express')
const http = require('http')
const { Server } = require('socket.io')

const app = express()
const server = http.createServer(app)
const io = new Server(server)

app.use(express.static('./'))

let mutations = []
let events = []

io.on('connection', (socket) => {
	console.log('new user connected')

	io.emit('cloned summary', mutations)
	// io.emit('cloned events', events)
	
	socket.on('input summary', (msg) => {
		console.log('new input summary received, current length:', mutations.length)

		if (msg.f === 'initialize') {
			mutations = []
			events = []
		}

		mutations.push(msg)
		io.emit('cloned summary', [msg])
	})

	socket.on('input events', (msg) => {
		console.log('new input event received, current length:', events.length)
		events.push(msg)
		io.emit('cloned events', [msg])
	})

	socket.on('disconnect', () => {
		console.log('user disconnected')
	})
})

server.listen(3000, () => {
	console.log('listening on *:3000')
})