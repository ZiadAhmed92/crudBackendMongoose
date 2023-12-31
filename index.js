import express from 'express'
import { dbConnection } from './database/dbConnection.js'

import cors from 'cors';
import router from './src/modules/crud/crud.route.js'
const app = express()
const port = 3000
app.use(cors());
app.use(express.json())
app.use(router)



//Run Database
dbConnection()

app.listen(port, () => console.log(`Example app listening on port ${port}!`))