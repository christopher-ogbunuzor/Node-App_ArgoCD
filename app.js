const express = require('express')
const app = express()

app.get('/', (req, res) => res.send('Hello CHIKA!'))
app.listen(4000, () => console.log('Server is not ready'))
